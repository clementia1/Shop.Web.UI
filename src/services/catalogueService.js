import axios from 'axios';
import { PIZZA_API_URI } from '../config';

const catalogueService = {

    getBySlug: async (slug) => {
        return await axios.get(`${PIZZA_API_URI}/getbyslug?slug=${slug}`);
    },

    getByPage: async (page, size = 10) => {
        let response = await axios.get(`${PIZZA_API_URI}/getbypage?page=${page}&size=${size}`);
        return response.data
    }
};

export default catalogueService;