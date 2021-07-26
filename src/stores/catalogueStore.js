import React, { useContext } from "react";
import { makeAutoObservable } from "mobx";

class CatalogueStore {
    products = [];

    constructor() {
        makeAutoObservable(this);
    }

    setProducts(products) {
        this.products = products
    }

    addProduct(product) {
        this.products.push(product)
    }
}

const catalogueStoreContext = React.createContext(new CatalogueStore);

export const useCatalogueStore = () => useContext(catalogueStoreContext);