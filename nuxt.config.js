export default {
    mode: 'spa',

    head: {
        title: 'Photobank',
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=500, initial-scale=1' },
        ],
    },

    plugins: [
        '~/plugins/axios',
    ],

    buildModules: [],

    modules: [
        '@nuxtjs/axios',
        'nuxt-i18n',
    ],

    axios: {
        baseURL: process.env.API_URL,
    },

    i18n: { // will rewrite to separate file
        locales: ['en'],
        defaultLocale: 'en',
        vueI18n: {
            fallbackLocale: 'en',
            messages: {
                en: {
                    about: 'About',
                    features: 'Features',
                    news: 'News',
                    top: 'Top',
                },
            },
        },
    },

    css: [
        './style/base.scss',
    ],
};
