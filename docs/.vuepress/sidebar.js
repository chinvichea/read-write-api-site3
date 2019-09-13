// https://vuepress.vuejs.org/theme/default-theme-config.html#sidebar

// TODO(mbana): collapsable behaviour turned off for now as it is causing issues. Need to investigate further.
const collapsable = true;
const sidebarDepth = 0;

module.exports = [
    // v3.1.2
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
                        sidebarDepth,
                    },
                    {
                        title: 'Accounts',
                        path: '/v3.1.2/resources-and-data-models/aisp/Accounts',
                        sidebarDepth,
                    },
                    {
                        title: 'Balances',
                        path: '/v3.1.2/resources-and-data-models/aisp/Balances',
                        sidebarDepth,
                    },
                    {
                        title: 'Transactions',
                        path: '/v3.1.2/resources-and-data-models/aisp/Transactions',
                        sidebarDepth,
                    },
                    {
                        title: 'Beneficiaries',
                        path: '/v3.1.2/resources-and-data-models/aisp/Beneficiaries',
                        sidebarDepth,
                    },
                    {
                        title: 'Direct Debits',
                        path: '/v3.1.2/resources-and-data-models/aisp/direct-debits',
                        sidebarDepth,
                    },
                    {
                        title: 'Products',
                        path: '/v3.1.2/resources-and-data-models/aisp/Products',
                        collapsable: collapsable,
                        sidebarDepth: 1,
                        children: [
                            {
                                title: 'BCA Product Data Model',
                                path: '/v3.1.2/resources-and-data-models/aisp/bca-product-data-model',
                                sidebarDepth,
                            },
                            {
                                title: 'PCA Product Data Model',
                                path: '/v3.1.2/resources-and-data-models/aisp/pca-product-data-model',
                                sidebarDepth,
                            },
                            {
                                title: 'Other Product Data Model',
                                path: '/v3.1.2/resources-and-data-models/aisp/other-product-data-model',
                                sidebarDepth,
                            },
                        ],
                    },
                    {
                        title: 'Offers',
                        path: '/v3.1.2/resources-and-data-models/aisp/Offers',
                        sidebarDepth,
                    },
                    {
                        title: 'Parties',
                        path: '/v3.1.2/resources-and-data-models/aisp/Parties',
                        sidebarDepth,
                    },
                    {
                        title: 'Scheduled Payments',
                        path: '/v3.1.2/resources-and-data-models/aisp/scheduled-payments',
                        sidebarDepth,
                    },
                    {
                        title: 'Statements',
                        path: '/v3.1.2/resources-and-data-models/aisp/Statements',
                        sidebarDepth,
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
                        sidebarDepth,
                    },
                    {
                        title: 'Domestic Payments',
                        path: '/v3.1.2/resources-and-data-models/pisp/domestic-payments',
                        sidebarDepth,
                    },
                    {
                        title: 'Domestic Scheduled Payment Consents',
                        path: '/v3.1.2/resources-and-data-models/pisp/domestic-scheduled-payment-consents',
                        sidebarDepth,
                    },
                    {
                        title: 'Domestic Scheduled Payment',
                        path: '/v3.1.2/resources-and-data-models/pisp/domestic-scheduled-payments',
                        sidebarDepth,
                    },
                    {
                        title: 'Domestic Standing Order Consents',
                        path: '/v3.1.2/resources-and-data-models/pisp/domestic-standing-order-consents',
                        sidebarDepth,
                    },
                    {
                        title: 'Domestic Standing Orders',
                        path: '/v3.1.2/resources-and-data-models/pisp/domestic-standing-orders',
                        sidebarDepth,
                    },
                    {
                        title: 'International Payment Consents',
                        path: '/v3.1.2/resources-and-data-models/pisp/international-payment-consents',
                        sidebarDepth,
                    },
                    {
                        title: 'International Payments',
                        path: '/v3.1.2/resources-and-data-models/pisp/international-payments',
                        sidebarDepth,
                    },
                    {
                        title: 'International Scheduled Payment Consents',
                        path: '/v3.1.2/resources-and-data-models/pisp/international-scheduled-payment-consents',
                        sidebarDepth,
                    },
                    {
                        title: 'International Scheduled Payments',
                        path: '/v3.1.2/resources-and-data-models/pisp/international-scheduled-payments',
                        sidebarDepth,
                    },
                    {
                        title: 'International Standing Order Consents',
                        path: '/v3.1.2/resources-and-data-models/pisp/international-standing-order-consents',
                        sidebarDepth,
                    },
                    {
                        title: 'International Standing Orders ',
                        path: '/v3.1.2/resources-and-data-models/pisp/international-standing-orders',
                        sidebarDepth,
                    },
                    {
                        title: 'File Payment Consents',
                        path: '/v3.1.2/resources-and-data-models/pisp/file-payment-consents',
                        sidebarDepth,
                    },
                    {
                        title: 'File Payments',
                        path: '/v3.1.2/resources-and-data-models/pisp/file-payments',
                        sidebarDepth,
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
    // v3.1.3
    {
        title: 'Version 3.1.3',
        path: '/v3.1.3/profiles/read-write-data-api-profile',
        collapsable: collapsable,
        sidebarDepth: 1,
        children: [
            {
                title: 'Account and Transaction API',
                path: '/v3.1.3/profiles/account-and-transaction-api-profile',
                collapsable: collapsable,
                sidebarDepth: 1,
                children: [
                    {
                        title: 'Account Access Consents',
                        path: '/v3.1.3/resources-and-data-models/aisp/account-access-consents',
                        sidebarDepth,
                    },
                    {
                        title: 'Accounts',
                        path: '/v3.1.3/resources-and-data-models/aisp/Accounts',
                        sidebarDepth,
                    },
                    {
                        title: 'Balances',
                        path: '/v3.1.3/resources-and-data-models/aisp/Balances',
                        sidebarDepth,
                    },
                    {
                        title: 'Transactions',
                        path: '/v3.1.3/resources-and-data-models/aisp/Transactions',
                        sidebarDepth,
                    },
                    {
                        title: 'Beneficiaries',
                        path: '/v3.1.3/resources-and-data-models/aisp/Beneficiaries',
                        sidebarDepth,
                    },
                    {
                        title: 'Direct Debits',
                        path: '/v3.1.3/resources-and-data-models/aisp/direct-debits',
                        sidebarDepth,
                    },
                    {
                        title: 'Products',
                        path: '/v3.1.3/resources-and-data-models/aisp/Products',
                        collapsable: collapsable,
                        sidebarDepth: 1,
                        children: [
                            {
                                title: 'BCA Product Data Model',
                                path: '/v3.1.3/resources-and-data-models/aisp/bca-product-data-model',
                                sidebarDepth,
                            },
                            {
                                title: 'PCA Product Data Model',
                                path: '/v3.1.3/resources-and-data-models/aisp/pca-product-data-model',
                                sidebarDepth,
                            },
                            {
                                title: 'Other Product Data Model',
                                path: '/v3.1.3/resources-and-data-models/aisp/other-product-data-model',
                                sidebarDepth,
                            },
                        ],
                    },
                    {
                        title: 'Offers',
                        path: '/v3.1.3/resources-and-data-models/aisp/Offers',
                        sidebarDepth,
                    },
                    {
                        title: 'Parties',
                        path: '/v3.1.3/resources-and-data-models/aisp/Parties',
                        sidebarDepth,
                    },
                    {
                        title: 'Scheduled Payments',
                        path: '/v3.1.3/resources-and-data-models/aisp/scheduled-payments',
                        sidebarDepth,
                    },
                    {
                        title: 'Statements',
                        path: '/v3.1.3/resources-and-data-models/aisp/Statements',
                        sidebarDepth,
                    },
                ],
            },
            {
                title: 'Payment Initiation API ',
                path: '/v3.1.3/profiles/payment-initiation-api-profile',
                collapsable: collapsable,
                sidebarDepth: 1,
                children: [
                    {
                        title: 'Domestic Payments Consents',
                        path: '/v3.1.3/resources-and-data-models/pisp/domestic-payment-consents',
                        sidebarDepth,
                    },
                    {
                        title: 'Domestic Payments',
                        path: '/v3.1.3/resources-and-data-models/pisp/domestic-payments',
                        sidebarDepth,
                    },
                    {
                        title: 'Domestic Scheduled Payment Consents',
                        path: '/v3.1.3/resources-and-data-models/pisp/domestic-scheduled-payment-consents',
                        sidebarDepth,
                    },
                    {
                        title: 'Domestic Scheduled Payment',
                        path: '/v3.1.3/resources-and-data-models/pisp/domestic-scheduled-payments',
                        sidebarDepth,
                    },
                    {
                        title: 'Domestic Standing Order Consents',
                        path: '/v3.1.3/resources-and-data-models/pisp/domestic-standing-order-consents',
                        sidebarDepth,
                    },
                    {
                        title: 'Domestic Standing Orders',
                        path: '/v3.1.3/resources-and-data-models/pisp/domestic-standing-orders',
                        sidebarDepth,
                    },
                    {
                        title: 'International Payment Consents',
                        path: '/v3.1.3/resources-and-data-models/pisp/international-payment-consents',
                        sidebarDepth,
                    },
                    {
                        title: 'International Payments',
                        path: '/v3.1.3/resources-and-data-models/pisp/international-payments',
                        sidebarDepth,
                    },
                    {
                        title: 'International Scheduled Payment Consents',
                        path: '/v3.1.3/resources-and-data-models/pisp/international-scheduled-payment-consents',
                        sidebarDepth,
                    },
                    {
                        title: 'International Scheduled Payments',
                        path: '/v3.1.3/resources-and-data-models/pisp/international-scheduled-payments',
                        sidebarDepth,
                    },
                    {
                        title: 'International Standing Order Consents',
                        path: '/v3.1.3/resources-and-data-models/pisp/international-standing-order-consents',
                        sidebarDepth,
                    },
                    {
                        title: 'International Standing Orders ',
                        path: '/v3.1.3/resources-and-data-models/pisp/international-standing-orders',
                        sidebarDepth,
                    },
                    {
                        title: 'File Payment Consents',
                        path: '/v3.1.3/resources-and-data-models/pisp/file-payment-consents',
                        sidebarDepth,
                    },
                    {
                        title: 'File Payments',
                        path: '/v3.1.3/resources-and-data-models/pisp/file-payments',
                        sidebarDepth,
                    },
                ],
            },
            {
                title: 'Confirmation of Funds API Profile',
                path: '/v3.1.3/profiles/confirmation-of-funds-api-profile',
                collapsable: collapsable,
                sidebarDepth: 1,
                children: [
                    {
                        title: 'Funds Confirmation Consent',
                        path: '/v3.1.3/resources-and-data-models/cbpii/funds-confirmation-consent',
                    },
                    {
                        title: 'Funds Confirmation',
                        path: '/v3.1.3/resources-and-data-models/cbpii/funds-confirmation',
                    },
                ],
            },
            {
                title: 'Event Notification API',
                path: '/v3.1.3/profiles/event-notification-api-profile',
                collapsable: collapsable,
                sidebarDepth: 1,
                children: [
                    {
                        title: 'Event Notification Subscription API',
                        path: '/v3.1.3/profiles/event-notification-subscription-api-profile',
                    },
                    {
                        title: 'Callback URL API',
                        path: '/v3.1.3/profiles/callback-url-api-profile',
                    },
                    {
                        title: 'Real Time Event Notification API',
                        path: '/v3.1.3/profiles/real-time-event-notification-api-profile',
                    },
                    {
                        title: 'Aggregated Polling API',
                        path: '/v3.1.3/profiles/aggregated-polling-api-profile',
                    },
                ],
            },
            // {
            //   title: 'Profiles',
            //   path: '/v3.1.3/profiles/',
            //   collapsable: collapsable,
            //   sidebarDepth: 1,
            //   children: [
            //     '/v3.1.3/profiles/aggregated-polling-api-profile',
            //     '/v3.1.3/profiles/callback-url-api-profile',
            //     '/v3.1.3/profiles/event-notification-subscription-api-profile',
            //     '/v3.1.3/profiles/file-payments-api-profile',
            //     '/v3.1.3/profiles/real-time-event-notification-api-profile',
            //   ]
            // },
            {
                title: 'Resources and Data Models',
                path: '/v3.1.3/resources-and-data-models/',
                collapsable: collapsable,
                sidebarDepth: 1,
                children: [
                    '/v3.1.3/resources-and-data-models/aisp/',
                    '/v3.1.3/resources-and-data-models/pisp/',
                    '/v3.1.3/resources-and-data-models/cbpii/',
                    '/v3.1.3/resources-and-data-models/event-notifications/',
                ]
            },
            {
                title: 'References',
                path: '/v3.1.3/references/',
                collapsable: collapsable,
                sidebarDepth: 1,
                children: [
                    '/v3.1.3/references/domestic-payment-message-formats',
                    '/v3.1.3/references/namespaced-enumerations',
                ]
            },
        ],
    },
];
