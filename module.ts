// -- outer module
// Node - CommonJS
// RequireJS - AMD
// import User = require('./user_commonjs')
import user = require('./user_amd')
// tsc module.ts -m commonjs
console.log(user.name)
// -- inner module
// <reference path="./userModule.ts" />
// tsc module.ts --out all.js
// console.log(UserModule.name);
// console.log(UserModule.AddressModule.zip);

// import addr = UserModule.AddressModule;
// console.log(addr.zip)