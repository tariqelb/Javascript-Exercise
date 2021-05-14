// Write a JavaScript program to measure the time taken by a function to execute.

// method 1 
const {performance} = require('perf_hooks');
 
var start = performance.now();
 
// task starts
for (var i = 0; i < 1000000;i++);
// task ends

var end = performance.now();
console.log(`Execution time: ${end - start} ms`);

// method 2
console.time('Execution Time');
 
// task starts
for (var i = 0; i < 1000000;i++);
// task ends
 
console.timeEnd('Execution Time');

// method 3

var start =  +Date.now();
 
// task starts
for (var i = 0; i < 100000000;i++);
// task ends
 
var end =  +Date.now();
console.log(`Execution time: ${end - start} ms`);


// method 4
const time_taken = callback => {
    const result = callback();
    return result;
  };
console.log("Time taken: " + time_taken(() => Math.pow(2, 10))+" ms");