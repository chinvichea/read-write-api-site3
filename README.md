# `read-write-api-site`

Fork of <https://github.com/OpenBankingUK/read-write-api-site2>.

## Build

```sh
git clone git@github.com:banaio/read-write-api-site2.git
cd read-write-api-site2
yarn docs:dev # OR npm run docs:dev
yarn docs:build # Or npm run docs:build
```

## Deploy

Manually deploy to the `gh-pages` branch using the script, then delete the `docs/.vuepress/dist` folder:

```sh
./deploy.sh && rm -fr docs/.vuepress/dist
```

then go to <https://github.com/banaio/read-write-api-site2>.
