import React, { useContext } from "react";
import axios from 'axios';
import { action, observable } from "mobx";

const catalogueStore = observable({
    products: [],
    setProducts: action((products) => {
        catalogueStore.products = products;
    }),
    addProduct: action((product) => {
        catalogueStore.setProducts([product, ...catalogueStore.products]);
    }),
    getProductBySlug: action(async (slug) => {
        let response = await axios.get(`${process.env.PIZZA_API_URI}/getbyslug?slug=${slug}`);
        return response.data.pizza
    })
})

const catalogueStoreContext = React.createContext(catalogueStore);

export const useCatalogueStore = () => useContext(catalogueStoreContext);