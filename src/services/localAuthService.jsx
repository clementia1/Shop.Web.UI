import { customAlphabet } from 'nanoid';

const userIdKey = "local_user_id";
const nanoid = customAlphabet('1234567890', 9);

const localAuthService = {

    createId: () => {
        let id = nanoid();
        localStorage.setItem(userIdKey, id);

        return id
    },

    getId: () => {
        let id = localStorage.getItem(userIdKey);

        return id ?? localAuthService.createId()
    }
}

export default localAuthService