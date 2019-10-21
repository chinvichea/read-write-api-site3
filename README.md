# `read-write-api-site`

Fork of <https://github.com/OpenBankingUK/read-write-api-site3>.

## Live

* <https://banaio-read-write-api-site3.netlify.com/>.
* <https://github.com/banaio/read-write-api-site3>.

## Status

[![Netlify Status](https://api.netlify.com/api/v1/badges/b86d5d34-8f2f-4d8c-9481-7bc9efbd6cd5/deploy-status)](https://app.netlify.com/sites/banaio-read-write-api-site3/deploys)

## Build

```sh
git clone git@github.com:banaio/read-write-api-site3.git
cd read-write-api-site3
yarn install --frozen-lockfile --non-interactive
yarn docs:dev
yarn docs:build
```

## Development

```sh
git clone git@github.com:banaio/read-write-api-site3.git
cd read-write-api-site3
yarn install --frozen-lockfile --non-interactive
yarn docs:dev
... # Make changes
yarn lint-md
```

## Deploy

### Netlify

The [Netlify](https://www.netlify.com/) is automatically deployed to <https://banaio-read-write-api-site3.netlify.com/> when a commit is pushed to `master`:

> Auto publishing is on. Deploys from master are published automatically.

See <https://app.netlify.com/sites/banaio-read-write-api-site3/deploys> for all the deploys.

### GitHub Pages

The [GitHub Pages](https://pages.github.com/) needs a manual deploy.

Manually deploy to the `gh-pages` branch using the script, then delete the `docs/.vuepress/dist` folder:

```sh
./deploy.sh && rm -fr docs/.vuepress/dist
```

then go to <https://github.com/banaio/read-write-api-site3>.
