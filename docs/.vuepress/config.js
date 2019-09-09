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
                // required
                title: 'Version 3.1.2 - Group',
                // optional, which should be a absolute path.
                path: '/v3.1.2/',
                // optional, defaults to true
                collapsable: false,
                // optional, defaults to 1
                sidebarDepth: 1,
                children: [
                    {
                        title: 'Profiles',
                        // optional, which should be a absolute path.
                        path: '/v3.1.2/profiles/',
                        // optional, defaults to true
                        collapsable: false,
                        // optional, defaults to 1
                        sidebarDepth: 1,
                        children: [
                            '/v3.1.2/profiles/account-and-transaction-api-profile',
                            '/v3.1.2/profiles/aggregated-polling-api-profile',
                            '/v3.1.2/profiles/callback-url-api-profile',
                            '/v3.1.2/profiles/confirmation-of-funds-api-profile',
                            '/v3.1.2/profiles/event-notification-api-profile',
                            '/v3.1.2/profiles/event-notification-subscription-api-profile',
                            '/v3.1.2/profiles/file-payments-api-profile',
                            '/v3.1.2/profiles/payment-initiation-api-profile',
                            '/v3.1.2/profiles/read-write-data-api-profile',
                            '/v3.1.2/profiles/real-time-event-notification-api-profile',
                        ]
                    },
                    {
                        title: 'Resources and Data Models',
                        // optional, which should be a absolute path.
                        path: '/v3.1.2/resources-and-data-models/',
                        // optional, defaults to true
                        collapsable: false,
                        // optional, defaults to 1
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
                        // optional, which should be a absolute path.
                        path: '/v3.1.2/references/',
                        // optional, defaults to true
                        collapsable: false,
                        // optional, defaults to 1
                        sidebarDepth: 1,
                        children: [
                            '/v3.1.2/references/domestic-payment-message-formats',
                            '/v3.1.2/references/namespaced-enumerations',
                        ]
                    },
                ]
            },
            {
                // required
                title: 'Version 3.1.2 - Group',
                // // optional, which should be a absolute path.
                // path: '/v3.1.2/',
                // optional, defaults to true
                collapsable: true,
                // optional, defaults to 1
                sidebarDepth: 1,
                children: [
                    {
                        title: 'Profiles',
                        // // optional, which should be a absolute path.
                        // path: '/v3.1.2/profiles/',
                        // optional, defaults to true
                        collapsable: true,
                        // optional, defaults to 1
                        sidebarDepth: 1,
                        children: [
                            '/v3.1.2/profiles/account-and-transaction-api-profile',
                            '/v3.1.2/profiles/aggregated-polling-api-profile',
                            '/v3.1.2/profiles/callback-url-api-profile',
                            '/v3.1.2/profiles/confirmation-of-funds-api-profile',
                            '/v3.1.2/profiles/event-notification-api-profile',
                            '/v3.1.2/profiles/event-notification-subscription-api-profile',
                            '/v3.1.2/profiles/file-payments-api-profile',
                            '/v3.1.2/profiles/payment-initiation-api-profile',
                            '/v3.1.2/profiles/read-write-data-api-profile',
                            '/v3.1.2/profiles/real-time-event-notification-api-profile',
                        ]
                    },
                    {
                        title: 'Resources and Data Models',
                        // // optional, which should be a absolute path.
                        // path: '/v3.1.2/resources-and-data-models/',
                        // optional, defaults to true
                        collapsable: true,
                        // optional, defaults to 1
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
                        // // optional, which should be a absolute path.
                        // path: '/v3.1.2/references/',true
                        // optional, defaults to true
                        collapsable: true,
                        // optional, defaults to 1
                        sidebarDepth: 1,
                        children: [
                            '/v3.1.2/references/domestic-payment-message-formats',
                            '/v3.1.2/references/namespaced-enumerations',
                        ]
                    },
                ]
            },
        ],
        sidebarDepth: 2,
        // displayAllHeaders: false,
    },
    markdown: {
        lineNumbers: true,
        toc: {
            includeLevel: [
                1,
                2,
            ],
        },
        extendMarkdown: md => {
            // use more markdown-it plugins!
            md.set({ breaks: true });
            md.use(require('markdown-it-toc'));
            md.use(require('markdown-it-katex'));
            md.use(require('markdown-it-footnote'));
        },
    },
    cache: false,
};
