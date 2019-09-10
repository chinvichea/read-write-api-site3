module.exports = {
    base: '/read-write-api-site2/',
    title: 'OBIE Read/Write API Standards',
    description: 'Read/Write API Standards',
    head: [
        [
            'link',
            {
                rel: 'icon',
                href: '/favicon.ico',
            }
        ],
    ],
    themeConfig: {
        logo: 'favicon.png',
        lastUpdated: 'Last Updated',
        sidebar: [
            {
                title: 'Version 3.1.2',
                path: '/v3.1.2/',
                collapsable: false,
                sidebarDepth: 1,
                children: [
                    {
                        title: 'Profiles',
                        path: '/v3.1.2/profiles/',
                        collapsable: true,
                        sidebarDepth: 1,
                        children: [
                            '/v3.1.2/profiles/read-write-data-api-profile',
                            '/v3.1.2/profiles/account-and-transaction-api-profile',
                            '/v3.1.2/profiles/aggregated-polling-api-profile',
                            '/v3.1.2/profiles/callback-url-api-profile',
                            '/v3.1.2/profiles/confirmation-of-funds-api-profile',
                            '/v3.1.2/profiles/event-notification-api-profile',
                            '/v3.1.2/profiles/event-notification-subscription-api-profile',
                            '/v3.1.2/profiles/file-payments-api-profile',
                            '/v3.1.2/profiles/payment-initiation-api-profile',
                            '/v3.1.2/profiles/real-time-event-notification-api-profile',
                        ]
                    },
                    {
                        title: 'Resources and Data Models',
                        path: '/v3.1.2/resources-and-data-models/',
                        collapsable: true,
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
                        collapsable: true,
                        sidebarDepth: 1,
                        children: [
                            '/v3.1.2/references/domestic-payment-message-formats',
                            '/v3.1.2/references/namespaced-enumerations',
                        ]
                    },
                ]
            },
        ],
        nav: [
            {
                text: 'Versions',
                items: [
                    {
                        text: 'Version 3.1.2',
                        link: '/v3.1.2/',
                    },
                ]
            }
        ],
        sidebarDepth: 1,
        displayAllHeaders: false,
    },
    markdown: {
        // options for markdown-it-anchor
        anchor: {
            permalink: true,
        },
        // options for markdown-it-toc
        toc: {
            includeLevel: [
                1,
                2,
                3,
            ],
        },
        extendMarkdown: md => {
            // use more markdown-it plugins!
            // md.set({ breaks: true });
            md.use(require('markdown-it-toc'));
            md.use(require('markdown-it-katex'));
            md.use(require('markdown-it-footnote'));
        },
    },
    cache: false,
    // These settings control the server that is started when you do `yarn docs:dev`.
    // It displays useful warnings and errors.
    //
    // https://cli.vuejs.org/config/#devserver
    // https://webpack.js.org/configuration/dev-server/
    devServer: {
        clientLogLevel: 'info',
        compress: true,
        overlay: {
            warnings: false,
            errors: false,
        },
        open: 'Google Chrome',
    },
};
