import React, { useContext } from "react";
import { makeAutoObservable } from "mobx";
import cartService from "../services/cartService";

class CartStore {
    cartProducts = [];
    isLoading = false;

    constructor() {
        makeAutoObservable(this);
    }

    async addProduct(product, amount = 1) {
        let item = { ...product, amount };
        let result = await cartService.add(item);

        let itemIndex = this.cartProducts.findIndex(i => i.name === item.name);

        if (itemIndex === -1) {
            this.cartProducts.push(item);
            return;
        }

        this.cartProducts[itemIndex].amount++;
    }

    removeProduct(productName) {
        let product = this.cartProducts.find(i => i.name === productName);
        this.cartProducts = this.cartProducts.filter(item => item != product);
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