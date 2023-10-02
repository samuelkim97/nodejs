const os = require("os");

// info about user
const user = os.userInfo();
console.log(user);

// method returns the sytem uptime in seconds
console.log(os.uptime());

const currentOS = {
  name: os.type(),
  release: os.release(),
  totalMem: os.totalmem(),
  freeMem: os.freemem(),
};

console.log(currentOS);