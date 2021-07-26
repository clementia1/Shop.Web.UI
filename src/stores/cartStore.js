import React, { useContext } from "react";
import { makeAutoObservable } from "mobx";
import cartService from "../services/cartService";

class CartStore {
    cartProducts = [];

    constructor() {
        makeAutoObservable(this);
    }

    addProduct(product, amount = 1) {
        let item = { product, amount };
        this.cartProducts.push(item);
        //cartService.add(item);
    }

    get products() {
        return this.cartProducts;
    }

    get productsCount() {
        return this.cartProducts.length
    }
}

const cartStoreContext = React.createContext(new CartStore());

export const useCartStore = () => useContext(cartStoreContext);