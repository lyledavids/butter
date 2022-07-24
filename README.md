# @0xlyle/butter
 A quick and easy way to integrate token gating in your project

[![npm (scoped)](https://img.shields.io/npm/v/@0xlyle/butter.svg)](https://www.npmjs.com/package/@0xlyle/butter)
[![npm bundle size (minified)](https://img.shields.io/bundlephobia/min/@0xlyle/butter.svg)](https://www.npmjs.com/package/@0xlyle/butter)



## Install

```
npm i @0xlyle/butter
```


## Usage

```
const butter = require("@0xlyle/butter");
let access = await butter.spread(chainID,accountAddress,covalentKey,tokenContractAddress)

//Returns true or false
//Depending on result, show user appropriate message
//if(access) //true do something else(false) //do something
```
