import React, { useContext } from "react";
import { makeAutoObservable } from "mobx";
import catalogueService from "../services/catalogueService";

class CatalogueStore {
    products = [{}, {}, {}, {}, {}, {}];
    pagesCount = 0;

    constructor() {
        makeAutoObservable(this);        
    }

    get products() {
        return this.products;
    }

    get pagesCount() {
        return this.pagesCount
    }

    async getByPage(page, size) {
        let response = await catalogueService.getByPage(page, size);
        this.setProducts(response.pizza);
        this.setPageCount(response.totalPages);
    }

    setPageCount(count) {
        this.pagesCount = count
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