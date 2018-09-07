
# sprint-namer
[![package version](https://img.shields.io/npm/v/sprint-namer.svg?style=flat-square)](https://npmjs.org/package/sprint-namer)
[![package downloads](https://img.shields.io/npm/dm/sprint-namer.svg?style=flat-square)](https://npmjs.org/package/sprint-namer)
[![standard-readme compliant](https://img.shields.io/badge/readme%20style-standard-brightgreen.svg?style=flat-square)](https://github.com/RichardLitt/standard-readme)
[![package license](https://img.shields.io/npm/l/sprint-namer.svg?style=flat-square)](https://npmjs.org/package/sprint-namer)
[![make a pull request](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com)

> Get a random name for your next sprint

## Table of Contents

- [Install](#install)
- [Usage](#usage)
- [Contribute](#contribute)
- [License](#License)

## Install

This project uses [node](https://nodejs.org) and [npm](https://www.npmjs.com). 

```sh
$ npm install sprint-namer
$ # OR
$ yarn add sprint-namer
```

## Usage

```js
const getSprintName = require('sprint-namer')

console.log(getSprintName()) // poorly creepy Goku
console.log(getSprintName({adverbs: []})) // big-headed Zuckerberg
```

## Contribute

1. Fork it and create your feature branch: git checkout -b my-new-feature
2. Commit your changes: git commit -am 'Add some feature'
3. Push to the branch: git push origin my-new-feature 
4. Submit a pull request

## License

MIT
    