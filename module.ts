/// <reference path="./userModule.ts" />
// tsc module.ts --out all.js
console.log(UserModule.name);
console.log(UserModule.AddressModule.zip);

import addr = UserModule.AddressModule;
console.log(addr.zip);