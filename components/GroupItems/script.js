export default {
    props: {
        array: {
            type: Array,
            default: () => [],
        },
        name: {
            type: String,
            default: '',
        },
    },

    computed: {
        favorites () {
            return this.$parent.favorites;
        },
    },

    methods: {
        favoriteIcon (id) {
            return this.favorites.includes(id) ? 'times' : 'heart';
        },

        handleFavorite (id) {
            const index = this.favorites.indexOf(id);
            if (index > -1) {
                this.favorites.splice(index, 1);
            } else {
                this.favorites.push(id);
            }
        },
    }
};
