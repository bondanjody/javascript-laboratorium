import os from 'os'

console.log("-----------------------------------");
console.log("DATA SISTEM OPERASI")
console.log("-----------------------------------");
console.log(`Platform : ${os.platform()}`);
console.log(`Architecture : ${os.arch()}`);
console.log(`Home Directory : ${os.homedir()}`);
console.log(`Hostname : ${os.hostname()}`);
console.table(os.cpus());
console.log(`Uptime : ${os.uptime()}`);
console.log(`Total Memory : ${os.totalmem()}`);
console.log(`Free Memory : ${os.freemem()}`);
console.table(os.networkInterfaces())