import React, { useContext } from "react";
import axios from 'axios';
import { action, observable } from "mobx";

const productStore = observable({
    product: {},
    getProductBySlug: action(async (slug) => {
        let response = await axios.get(`${process.env.PIZZA_API_URI}/getbyslug?slug=${slug}`);
        productStore.product = response.data.pizza;
        return productStore.product
    })
})

const productStoreContext = React.createContext(productStore);

export const useProductStore = () => useContext(productStoreContext);