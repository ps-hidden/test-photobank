import GroupItems from '@/components/GroupItems';
import { TYPE_ALBUM, TYPE_FAVORITE } from '~/config/const';

export default {
    components: {
        GroupItems,
    },

    data: () => ({
        types: { TYPE_ALBUM, TYPE_FAVORITE },
        photos: [],
        favorites: [],
        type: TYPE_ALBUM,
    }),

    computed: {
        array () {
            return this.type === TYPE_FAVORITE
                ? this.getFavorites()
                : this.getGroup();
        },
    },

    methods: {
        get (favorites = false) {
            this.$axios
                .get('photos', {
                    params: {
                        _limit: 100,
                        id: favorites ? this.favorites : null,
                    },
                })
                .then((response) => {
                    this.$set(this, 'photos', response.data.sort((a, b) => {
                        if (a.title > b.title) {
                            return 1;
                        }
                        if (a.title < b.title) {
                            return -1;
                        }

                        return 0;
                    }));
                });
        },

        changeType (type) {
            this.type = type;
            this.get(type === TYPE_FAVORITE);
        },

        getFavorites () {
            return {
                Favorite: this.photos.filter((el) => this.favorites.includes(el.id)),
            };
        },

        getGroup () {
            return this.photos
                .reduce((r, a) => {
                    const k = a.title.substr(0, 1).toUpperCase();
                    r[k] = [...r[k] || [], a];

                    return r;
                }, {});
        },
    },

    created () {
        this.get();
    },
};
