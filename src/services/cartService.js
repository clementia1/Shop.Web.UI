import axios from 'axios';
import { CART_API_URI } from '../config';

const cartService = {

    add: async (product, userId) => {
        let tokenString = localStorage.getItem('oidc.user:http://localhost:5000:pkce_client');
        let token = JSON.parse(tokenString);
        let response = await axios.post(`${CART_API_URI}/${userId}`, { product });
        return response.status
    },

    get: async (userId) => {
        let tokenString = localStorage.getItem('oidc.user:http://localhost:5000:pkce_client');
        let token = JSON.parse(tokenString);
        let response = await axios.get(`${CART_API_URI}/${userId}`);
        return response.data.products;
    },

    delete: async (productId, userId) => {
        let tokenString = localStorage.getItem('oidc.user:http://localhost:5000:pkce_client');
        let token = JSON.parse(tokenString);
        let response = await axios.delete(`${CART_API_URI}/${userId}`, {
            data: {
                productId
            }
        });
        return response.status
    }
};

export default cartService;