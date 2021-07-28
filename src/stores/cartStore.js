import React, { useContext } from "react";
import { makeAutoObservable } from "mobx";
import cartService from "../services/cartService";
import localAuthService from "../services/localAuthService";

class CartStore {
    cartProducts = [];
    isLoading = false;

    constructor() {
        makeAutoObservable(this);
    }

    async addProduct(product, userId, amount = 1) {
        userId ??= localAuthService.getId();
        let item = { ...product, amount };
        this.setIsLoading(true);

        let result = await cartService.add(item, userId);

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

    async fetchProducts(userId) {
        userId ??= localAuthService.getId();
        let products = await cartService.get(userId);
        this.setProducts(products)
    }

    async removeProduct(productId, userId) {
        userId ??= localAuthService.getId();
        let result = await cartService.delete(productId, userId);

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