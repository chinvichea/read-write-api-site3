# `read-write-api-site`

Fork of <https://github.com/OpenBankingUK/read-write-api-site2>.

## Status

[![Netlify Status](https://api.netlify.com/api/v1/badges/d523b90e-cb71-41eb-984b-ae31ac9353e6/deploy-status)](https://app.netlify.com/sites/banaio-read-write-api-site2/deploys)

## Build

```sh
git clone git@github.com:banaio/read-write-api-site2.git
cd read-write-api-site2
yarn install --frozen-lockfile --non-interactive
yarn docs:dev
yarn docs:build
```

## Development

```sh
git clone git@github.com:banaio/read-write-api-site2.git
cd read-write-api-site2
yarn install --frozen-lockfile --non-interactive
yarn docs:dev
... # Make changes
yarn lint-md
```

## Deploy

Manually deploy to the `gh-pages` branch using the script, then delete the `docs/.vuepress/dist` folder:

```sh
./deploy.sh && rm -fr docs/.vuepress/dist
```

then go to <https://github.com/banaio/read-write-api-site2>.

## IFrame

Code for how to embed the page in an IFrame:

```html
<!DOCTYPE html>
<html lang="en-US" style='width: 100%; height: 100%'>

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width,initial-scale=1">
    <style>
    </style>
</head>

<body style='width: 100%; height: 100%'>
    <iframe allowfullscreen='true' style='width: 100%; height: 100%'
        src="https://banaio.github.io/read-write-api-site2/index.html">
        <p>Your browser does not support iframes.</p>
    </iframe>

</body>

</html>
```
