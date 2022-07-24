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
import { spread } from '@0xlyle/butter'
const result = await spread(chainID,accountAddress,covalentKey,tokenContractAddress)


const result = await spread("1","0x0...","ckey_32...","0xd....")


OR 

const chainID = "1" //ETH Mainnet
const accountAddress = "0x0...."
const covalentKey = "ckey_32..."
const tokenContractAddress = "0xd...."
const result = await spread(chainID,accountAddress,covalentKey,tokenContractAddress)
//Returns true or false
//Depending on result, show user appropriate message
//if(result) //true do something else(false) //do something
```

Get Covalent Key from https://www.covalenthq.com/

Sample React app - https://butter-sample-app-pooly-supporter.netlify.app/
Sample React app repo - https://github.com/lyledavids/butter_react_sample_app