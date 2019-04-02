define(["require", "exports", "./user_amd"], function (require, exports, user) {
    "use strict";
    exports.__esModule = true;
    // tsc module.ts -m commonjs
    console.log(user.name);
});
// -- inner module
// <reference path="./userModule.ts" />
// tsc module.ts --out all.js
// console.log(UserModule.name);
// console.log(UserModule.AddressModule.zip);
// import addr = UserModule.AddressModule;
// console.log(addr.zip)
