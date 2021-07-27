import React, { useContext } from "react";
import { makeAutoObservable } from "mobx";
import CartService from "../services/cartService";

class CartStore {
    cartProducts = [];
    isLoading = false;

    constructor() {
        makeAutoObservable(this);
    }

    async addProduct(product, amount = 1) {
        let item = { ...product, amount };
        this.setIsLoading(true);

        let result = await CartService.getInstance().addProduct(item);

        if (result !== 200) {
            this.setIsLoading(false);
            return
        }

        let itemIndex = this.cartProducts.findIndex(i => i.name === item.name);

        if (itemIndex === -1) {
            this.cartProducts.push(item);
            this.setIsLoading(false);
            return
        }

        this.cartProducts[itemIndex].amount++
        this.setIsLoading(false);
    }

    async fetchProducts() {
        let products = await CartService.getInstance().getProducts();
        this.setProducts(products)
    }

    async removeProduct(productId) {
        let result = await CartService.getInstance().deleteProduct(productId);

        if (result !== 200) return;

        this.setProducts(this.cartProducts.filter(item => item.id != productId));
    }

    setIsLoading(value) {
        this.isLoading = value
    }

    setProducts(products) {
        this.cartProducts = products
    }

    get products() {
        return this.cartProducts
    }

    get loadingState() {
        return this.isLoading
    }

    get productsCount() {
        return this.cartProducts.length
    }

    calcProductPrice(productName) {
        let product = this.cartProducts.find(i => i.name === productName);
        return product.price * product.amount
    }
}

const cartStoreContext = React.createContext(new CartStore());

export const useCartStore = () => useContext(cartStoreContext);