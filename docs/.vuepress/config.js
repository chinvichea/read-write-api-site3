/**
 * VuePress config file: `docs/.vuepress/config.js`.
 * Documentation: https://vuepress.vuejs.org/config/.
 */

const sidebar = require('./sidebar.js');
const nav = require('./nav.js');
const devServer = require('./devServer.js');

module.exports = {
    base: '/read-write-api-site2/',
    title: 'OBIE Read/Write API Standards',
    description: 'Read/Write API Standards',
    themeConfig: {
        lastUpdated: 'Last Updated',
        sidebar,
        nav,
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
    devServer,
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
    // TODO(mbana): WIP.
    // extraWatchFiles: [
    //     require.resolve('./sidebar.js'),
    //     // or '.vuepress/sidebar.js'
    // ],
};
