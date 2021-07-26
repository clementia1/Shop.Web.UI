import axios from 'axios';
import { PIZZA_API_URI } from '../config';

const catalogueService = {

    getBySlug: async (slug) => {
        return await axios.get(`${PIZZA_API_URI}/getbyslug?slug=${slug}`);
    }
};

export default catalogueService;