<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://pbs.twimg.com/profile_images/1158525417537572864/JOCSsoII_400x400.jpg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">This API fetches values from a Google Sheets spreadsheet and returns them in JSON format.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
</p>

## Description

This API is designed to fetch data from Google Sheets and convert it into standard JSON format. It can be used to obtain Sammy NPC data from [OTPokemon](https://otpokemon.com/), a popular Pokémon-themed Tibia game with a vibrant community...

## Installation

```bash
$ npm install
```
After installing the dependencies, some changes in the code are necessary.

In the app.controller.ts file, within the getData() method, you need to change the constant spreadsheetId to the ID of the spreadsheet you will be using.

You also need to download a credential from [Google Cloud](https://console.cloud.google.com/) to gain access to the file via requests.

Download the credential, rename it to credentials.json, and place it in the root of the project.

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```


## Stay in touch

- Author - [Paulo Henrique dos Santos](https://github.com/PauloSantos1109)

## License

Nest is [MIT licensed](LICENSE).
