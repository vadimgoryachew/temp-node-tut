const os = require('os');

// uset info 
console.log(os.type(), os.arch(), os.userInfo(), os.uptime());

const currentOS = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMen: os.freemem()
};
console.log(currentOS);