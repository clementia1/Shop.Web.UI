import React, { useContext } from "react";
import { makeAutoObservable, action, observable, computed } from "mobx";
import cartService from "../services/cartService";

class CartStore {
    cartProducts = [];

    constructor() {
        makeAutoObservable(this);
    }

    addProduct(product, amount = 1) {
        let item = { product, amount };
        this.cartProducts.push(item);
        cartService.add(item);
    }

    get productsCount() {
        return this.cartProducts.length
    }
}

const cartStoreContext = React.createContext(new CartStore());
export const CartStoreProvider = cartStoreContext.Provider;
export const useCartStore = () => useContext(cartStoreContext);