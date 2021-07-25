import axios from 'axios';
import { CART_API_URI } from '../config';

const cartService = {

    add: (product) => {
        axios.post(CART_API_URI, product)
    }
};

export default cartService;