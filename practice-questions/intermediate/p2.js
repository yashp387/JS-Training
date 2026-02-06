// Problem 2: Event Loop, Microtasks & Macrotasks
// Objective
// Understand JavaScript execution order using the call stack, microtask queue, and macrotask queue.
// Question
// Predict the execution order of the following code and explain why.
console.log("start");

setTimeout(() => console.log("timeout"), 0);

Promise.resolve()
  .then(() => console.log("promise 1"))
  .then(() => console.log("promise 2"));

console.log("end");

// output: 
// start
// end
// promise 1
// promise 2
// timeout

// explanation:
// first all the synchronous code will run and logs "start" and "end"
// then execution goes to setTimeout and it is placed into the macrotask queue
// then execution goes to already resolved promise and placed it into the microtask queue
// once call stack is empty event loop will executes microtasks first and logs "promise 1" and then "promise 2"
// once microtask queue become empty,then event loop executes macrotasks queue and logs "timeout"