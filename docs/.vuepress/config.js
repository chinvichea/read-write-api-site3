/**
 * VuePress config file: `docs/.vuepress/config.js`.
 * Documentation: https://vuepress.vuejs.org/config/.
 */

// https://vuepress.vuejs.org/theme/default-theme-config.html#sidebar
const create_sidebar = () => {
    // TODO(mbana): collapsable behaviour turned off for now as it is causing issues. Need to investigate further.
    const collapsable = true;
    return [
        {
            title: 'Version 3.1.2',
            path: '/v3.1.2/profiles/read-write-data-api-profile',
            collapsable: collapsable,
            sidebarDepth: 1,
            children: [
                {
                    title: 'Account and Transaction API',
                    path: '/v3.1.2/profiles/account-and-transaction-api-profile',
                    collapsable: collapsable,
                    sidebarDepth: 1,
                    children: [
                        {
                            title: 'Account Access Consents',
                            path: '/v3.1.2/resources-and-data-models/aisp/account-access-consents',
                        },
                        {
                            title: 'Accounts',
                            path: '/v3.1.2/resources-and-data-models/aisp/Accounts',
                        },
                    ],
                },
                {
                    title: 'Payment Initiation API ',
                    path: '/v3.1.2/profiles/payment-initiation-api-profile',
                    collapsable: collapsable,
                    sidebarDepth: 1,
                    children: [
                        {
                            title: 'Domestic Payments Consents',
                            path: '/v3.1.2/resources-and-data-models/pisp/domestic-payment-consents',
                        },
                        {
                            title: 'Domestic Payments',
                            path: '/v3.1.2/resources-and-data-models/pisp/domestic-payments',
                        },
                    ],
                },
                {
                    title: 'Confirmation of Funds API Profile',
                    path: '/v3.1.2/profiles/confirmation-of-funds-api-profile',
                    collapsable: collapsable,
                    sidebarDepth: 1,
                    children: [
                        {
                            title: 'Funds Confirmation Consent',
                            path: '/v3.1.2/resources-and-data-models/cbpii/funds-confirmation-consent',
                        },
                        {
                            title: 'Funds Confirmation',
                            path: '/v3.1.2/resources-and-data-models/cbpii/funds-confirmation',
                        },
                    ],
                },
                {
                    title: 'Event Notification API',
                    path: '/v3.1.2/profiles/event-notification-api-profile',
                    collapsable: collapsable,
                    sidebarDepth: 1,
                    children: [
                        {
                            title: 'Event Notification Subscription API',
                            path: '/v3.1.2/profiles/event-notification-subscription-api-profile',
                        },
                        {
                            title: 'Callback URL API',
                            path: '/v3.1.2/profiles/callback-url-api-profile',
                        },
                        {
                            title: 'Real Time Event Notification API',
                            path: '/v3.1.2/profiles/real-time-event-notification-api-profile',
                        },
                        {
                            title: 'Aggregated Polling API',
                            path: '/v3.1.2/profiles/aggregated-polling-api-profile',
                        },
                    ],
                },
                // {
                //   title: 'Profiles',
                //   path: '/v3.1.2/profiles/',
                //   collapsable: collapsable,
                //   sidebarDepth: 1,
                //   children: [
                //     '/v3.1.2/profiles/aggregated-polling-api-profile',
                //     '/v3.1.2/profiles/callback-url-api-profile',
                //     '/v3.1.2/profiles/event-notification-subscription-api-profile',
                //     '/v3.1.2/profiles/file-payments-api-profile',
                //     '/v3.1.2/profiles/real-time-event-notification-api-profile',
                //   ]
                // },
                {
                    title: 'Resources and Data Models',
                    path: '/v3.1.2/resources-and-data-models/',
                    collapsable: collapsable,
                    sidebarDepth: 1,
                    children: [
                        '/v3.1.2/resources-and-data-models/aisp/',
                        '/v3.1.2/resources-and-data-models/pisp/',
                        '/v3.1.2/resources-and-data-models/cbpii/',
                        '/v3.1.2/resources-and-data-models/event-notifications/',
                    ]
                },
                {
                    title: 'References',
                    path: '/v3.1.2/references/',
                    collapsable: collapsable,
                    sidebarDepth: 1,
                    children: [
                        '/v3.1.2/references/domestic-payment-message-formats',
                        '/v3.1.2/references/namespaced-enumerations',
                    ]
                },
            ],
        },
    ];
}

const create_nav = () => {
    return false;

    // We currently don't want an nav at the top.
    // return [
    //   {
    //     text: 'Versions',
    //     items: [
    //       {
    //         text: 'Version 3.1.2',
    //         link: '/v3.1.2/',
    //       },
    //     ]
    //   }
    // ]
};

const create_dev_server = () => {
    // https://cli.vuejs.org/config/#devserver
    // https://webpack.js.org/configuration/dev-server/
    return {
        // https://webpack.js.org/configuration/dev-server/#devserverclientloglevel
        clientLogLevel: 'info',
        // https://webpack.js.org/configuration/dev-server/#devservercompress
        compress: true,
        // https://webpack.js.org/configuration/dev-server/#devserveroverlay
        overlay: {
            warnings: false,
            errors: false,
        },
        // https://webpack.js.org/configuration/dev-server/#devserveropen
        open: 'Google Chrome',
        // https://webpack.js.org/configuration/dev-server/#devserverwatchcontentbase
        watchContentBase: true,
    };
}

module.exports = {
    base: '/read-write-api-site2/',
    title: 'OBIE Read/Write API Standards',
    description: 'Read/Write API Standards',
    themeConfig: {
        lastUpdated: 'Last Updated',
        sidebar: create_sidebar(),
        nav: create_nav(),
        sidebarDepth: 1,
        // https://vuepress.vuejs.org/theme/default-theme-config.html#displaying-header-links-of-all-pages
        displayAllHeaders: false,
        // https://vuepress.vuejs.org/theme/default-theme-config.html#search-box
        searchMaxSuggestions: 30,
    },
    markdown: {
        // https://vuepress.vuejs.org/config/#markdown-linenumbers
        lineNumbers: true,
        // options for markdown-it-anchor
        anchor: {
            permalink: true,
        },
        // options for markdown-it-toc
        toc: {
            includeLevel: [
                // We don't want to include the top-level header, so remove level 1.
                // 1,
                2,
                3,
                4,
                5,
                6,
            ],
            // If you want to debug this, e.g., to compare it again Confluence, uncomment line below.
            // 'listType': 'ol',
        },
        // https://vuepress.vuejs.org/plugin/option-api.html#extendmarkdown
        extendMarkdown: (md) => {
            // use more markdown-it plugins!

            // Converts '\n' in paragraphs into <br>
            // md.set({ breaks: true });
        },
        // https://vuepress.vuejs.org/plugin/option-api.html#chainmarkdown
        chainMarkdown: (config) => {
            return config;
        },
    },
    plugins: [
        // https://vuepress.vuejs.org/plugin/official/plugin-back-to-top.html
        '@vuepress/back-to-top',
        // https://vuepress.vuejs.org/plugin/official/plugin-nprogress.html
        '@vuepress/nprogress',
        // https://vuepress.vuejs.org/plugin/official/plugin-search.html
        [
            '@vuepress/search',
            {
                searchMaxSuggestions: 30,
                // Ideally we want all the search results but the container rendering the
                // search results does not have scrollbars so all the results are not displayed.
                // searchMaxSuggestions: Number.MAX_SAFE_INTEGER,
            },
        ],
    ],
    cache: false,
    // These settings configures the server that is started when you do `yarn docs:dev`.
    // With the current configuration settings, if you open Google Chrome DevTools after navigating
    // to the site, it will display any compilation warnings/errors related to Markdown amongst other things.
    devServer: create_dev_server(),
    // https://cli.vuejs.org/config/#css-sourcemap
    css: {
        sourceMap: true,
    },
    // https://cli.vuejs.org/config/#runtimecompiler
    runtimeCompiler: true,
    // https://vuepress.vuejs.org/config/#chainwebpack
    chainWebpack: (config, isServer) => {
        // Inline fonts and images so we don't do another fetch for them.
        // If we set `limit` to zero, all the fonts and images are inlined.
        // Explanation can be found in:
        // * https://cli.vuejs.org/guide/webpack.html#replacing-loaders-of-a-rule
        // * https://github.com/vuejs/vue-cli/issues/3215

        config.module.rule('fonts').use('url-loader').tap((opts) => {
            const options = Object.assign(opts, { limit: 0 });
            return options;
        });

        config.module.rule('images').use('url-loader').tap((opts) => {
            const options = Object.assign(opts, { limit: 0 });
            return options;
        });
    },
    // https://vuepress.vuejs.org/config/#evergreen
    // This will disable ES5 transpilation and polyfills for IE, and result in faster builds and smaller files.
    // Set to true, if we want to support IE.
    evergreen: true,
};
