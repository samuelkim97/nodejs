// Modules
const { john, peter, susan } = require("./4-names");
const sayHi = require("./5-utils");
const data = require("./6-alternative-flavour");
require("./7-mind-grenade");

sayHi(john);
sayHi(peter);
sayHi(susan);

console.log(data);
