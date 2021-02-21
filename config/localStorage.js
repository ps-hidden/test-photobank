import { TYPE_FAVORITE, TYPE_ALBUM, STORE_NAME } from '@/config/const';

const array = `${STORE_NAME}_array`;
const type = `${STORE_NAME}_type`;

export default {
    getFavorites () {
        const data = localStorage.getItem(array);
        if (!data) {
            return [];
        }

        const value = JSON.parse(data);

        return Array.isArray(value)
            ? value
            : [];
    },

    setFavorites (data) {
        localStorage.setItem(array, JSON.stringify(data));
    },

    getType () {
        const data = localStorage.getItem(type);

        return TYPE_FAVORITE === data
            ? TYPE_FAVORITE
            : TYPE_ALBUM;
    },

    setType (data) {
        localStorage.setItem(type, data);
    },
};
