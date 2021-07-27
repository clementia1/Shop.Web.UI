import axios from 'axios';
import { CART_API_URI } from '../config';

const cartService = {

    add: async (product, userId) => {
        await axios.post(`${CART_API_URI}/${userId}`, product)
    }

/*     delete: (product) => {
        axios.post(CART_API_URI, product)
    } */
};

export default cartService;