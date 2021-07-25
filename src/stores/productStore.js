import React, { useContext } from "react";
import axios from 'axios';
import { action, observable } from "mobx";
import { PIZZA_API_URI } from "../config";

const productStore = observable({
    product: {},
    getProductBySlug: action(async (slug) => {
        let response = await axios.get(`${PIZZA_API_URI}/getbyslug?slug=${slug}`);
        productStore.product = response.data.pizza;
        return productStore.product
    }),
    resetProduct: action(() => {
        productStore.product = {};
    })
})

const productStoreContext = React.createContext(productStore);

export const useProductStore = () => useContext(productStoreContext);