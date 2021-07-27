import axios from 'axios';
import React, { Component, PureComponent, useState, useEffect } from 'react';
import { useAuth, withAuth } from 'oidc-react';
import { UserManager } from 'oidc-react';
import { CART_API_URI } from '../config';

/* const cartService = {

    add: async (product) => {
        let tokenString = localStorage.getItem('oidc.user:http://localhost:5000:pkce_client');
        let token = JSON.parse(tokenString);
        let response = await axios.post(`${CART_API_URI}/${token.profile.sub}`, { product }, {
            headers: {
                'Authorization': `Bearer ${tokenString}`
            },
        });
        return response.status
    },

    get: async () => {
        let tokenString = localStorage.getItem('oidc.user:http://localhost:5000:pkce_client');
        let token = JSON.parse(tokenString);
        let response = await axios.get(`${CART_API_URI}/${token.profile.sub}`, {
            headers: {
                'Authorization': `Bearer ${tokenString}`
            },
        });
        return response.data.products;
    },

    delete: async (productId) => {
        let tokenString = localStorage.getItem('oidc.user:http://localhost:5000:pkce_client');
        let token = JSON.parse(tokenString);
        let response = await axios.delete(`${CART_API_URI}/${token.profile.sub}`, {
            headers: {
                'Authorization': `Bearer ${tokenString}`
            },
            data: {
                productId
            }
        });
        return response.status
    }
};
 */

export class CartService extends PureComponent {
    static myInstance = null;

    static getInstance() {
        if (CartService.myInstance === null) {
            CartService.myInstance = new CartService();
        }
        return CartService.myInstance;
    }

    async addProduct(product) {
        let tokenString = localStorage.getItem('oidc.user:http://localhost:5000:pkce_client');
        let token = JSON.parse(tokenString);
        let response = await axios.post(`${CART_API_URI}/${token.profile.sub}`, { product }, {
            headers: {
                'Authorization': `Bearer ${tokenString}`
            },
        });
        return response.status
    }

    async getProducts() {
        let tokenString = localStorage.getItem('oidc.user:http://localhost:5000:pkce_client');
        let token = JSON.parse(tokenString);
        let response = await axios.get(`${CART_API_URI}/${token.profile.sub}`, {
            headers: {
                'Authorization': `Bearer ${tokenString}`
            },
        });
        return response.data.products;
    }

    async deleteProduct(productId) {
        let tokenString = localStorage.getItem('oidc.user:http://localhost:5000:pkce_client');
        let token = JSON.parse(tokenString);
        let response = await axios.delete(`${CART_API_URI}/${token.profile.sub}`, {
            headers: {
                'Authorization': `Bearer ${tokenString}`
            },
            data: {
                productId
            }
        });
        return response.status
    }
}

export default CartService;