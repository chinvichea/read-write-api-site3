# `read-write-api-site`

## Live

* <https://openbankinguk.github.io/read-write-api-site3>.

## Build

```sh
git clone git@github.com:OpenBankingUK/read-write-api-site3.git
cd read-write-api-site3
yarn install --frozen-lockfile --non-interactive
yarn docs:dev
yarn docs:build
```

## Development

```sh
git clone git@github.com:OpenBankingUK/read-write-api-site3.git
cd read-write-api-site3
yarn install --frozen-lockfile --non-interactive
yarn docs:dev
... # Make changes
yarn lint-md
```

## Deploy

### GitHub Pages

The [GitHub Pages](https://pages.github.com/) needs a manual deploy.

Manually deploy to the `gh-pages` branch using the script, then delete the `docs/.vuepress/dist` folder:

```sh
./deploy.sh && rm -fr docs/.vuepress/dist
```

then go to <https://openbankinguk.github.io/read-write-api-site3>.
