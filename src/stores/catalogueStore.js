import React, { useContext } from "react";
import { action, observable } from "mobx";

const catalogueStore = observable({
    products: [],
    setProducts: action((products) => {
        catalogueStore.products = products;
    }),
    addProduct: action((product) => {
        catalogueStore.setProducts([product, ...catalogueStore.products]);
    }),
    getProductBySlug: action((slug) => {
        return catalogueStore.products.find(product => product.slug === slug)
    })
})

const catalogueStoreContext = React.createContext(catalogueStore);

export const useCatalogueStore = () => useContext(catalogueStoreContext);