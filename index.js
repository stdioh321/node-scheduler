const schedule = require('node-schedule');

console.log("Before");
const job = schedule.scheduleJob('*/3 * * * * *', function(){
  console.log(`${new Date()} - The answer to life, the universe, and everything!`);
});

console.log("After");