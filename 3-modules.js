modules

const names = require('./4-names');
const sayHi = require('./5-utils.js');
const data = require('./6-alternative-flavor.js');
require('./7-mind-grenade.js');
console.log(data);
sayHi('Susan');
sayHi(names.john);
sayHi(names.peter);