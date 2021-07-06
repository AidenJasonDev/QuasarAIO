const perf = require('execution-time')();

//at beginning of your code
perf.start();

//at end of your code
const results = perf.stop();
console.log(results.time);  // in milliseconds