import React, { useContext } from "react";
import { makeAutoObservable, action, observable, computed } from "mobx";

const cartStore2 = observable({
    cartProducts: [{}],
    setProducts: action((products) => {
        cartStore.cartProducts = products;
    }),
    addProduct: action((product, amount = 1) => {
        let productRecord = {
             product,
             amount,
        };
        cartStore.cartProducts.push(productRecord);
    }),
    removeProduct: action((product) => {
        cartStore.cartProducts.filter(item => item.product != product);
    }),
    emptyCart: action(() => {
        cartStore.cartProducts = [];
    }),
    getProductsCount: computed(() => {
        return cartStore.cartProducts.length;
    })
})

class CartStore {
    cartProducts = [];

    constructor() {
        makeAutoObservable(this)
    }

    addProduct(product, amount = 1) {
        this.cartProducts.push({ product, amount })
    }

    get productsCount() {
        return this.cartProducts.length
    }
}

const cartStoreContext = React.createContext(new CartStore());
export const CartStoreProvider = cartStoreContext.Provider;
export const useCartStore = () => useContext(cartStoreContext);