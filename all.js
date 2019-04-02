var UserModule;
(function (UserModule) {
    UserModule.name = 'Maki';
    var AddressModule;
    (function (AddressModule) {
        AddressModule.zip = '111-1111';
    })(AddressModule = UserModule.AddressModule || (UserModule.AddressModule = {}));
})(UserModule || (UserModule = {}));
/// <reference path="./userModule.ts" />
console.log(UserModule.name);
console.log(UserModule.AddressModule.zip);
var addr = UserModule.AddressModule;
console.log(addr.zip);
