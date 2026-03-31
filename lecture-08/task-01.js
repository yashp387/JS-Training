// `### Task 1: Predict Output of Async Code`

// `### Objective`
// `Predict the execution order of asynchronous code involving Promises, setTimeout, and the event loop.`

// `### Requirements`
// `1. Predict the output order for each code block`
// `2. Run the code and compare with your prediction`
// `3. Explain the execution order based on the event loop`

// `### Code Block 1: Basic Async`

// console.log("1");

// setTimeout(function () {
//   console.log("2");
// }, 0);

// Promise.resolve().then(function () {
//   console.log("3");
// });

// console.log("4");

// **Your Prediction (order):**
// 1
// 4
// 3
// 2

// **Actual Output:**
// 1
// 4
// 3
// 2

// **Explanation:**
// - First all the synchronous code will execute and logs "1" and "4"
// - then code execution move to setTimeout and placed it into macrotask queue
// - while already resolved promise placed into microtask queue
// - now call stack is empty so event loop will executes microtask first and logs "3"
// - then event loop executes macrotasks and logs "2"

// Explain the execution order
// 1. call stack(synchronous code)
// 2. Microtask queue
// 3. Macrotask queue

// first call stack execute synchronous tasks
// Then event loop check call stack is empty, if yes then microtask queue executes
// Then event loop again check call is empty, if yes then macrotask queue executes

/* ---------------------------------------------------------------------------------- */
// ### Code Block 2: Nested Async

// console.log("Start");

// setTimeout(function () {
//   console.log("Timeout 1");
//   Promise.resolve().then(function () {
//     console.log("Promise 1");
//   });
// }, 0);

// Promise.resolve().then(function () {
//   console.log("Promise 2");
//   setTimeout(function () {
//     console.log("Timeout 2");
//   }, 0);
// });

// console.log("End");

// **Your Prediction (order):**
// Start
// End
// Promise 2
// Timeout 1
// Promise 1
// Timeout 2

// **Actual Output:**
// Start
// End
// Promise 2
// Timeout 1
// Promise 1
// Timeout 2

// **Explanation:**
// first of all the synchronous code will executes and log "Start" and "End"
// then first setTimeout placed into macrotask queue
// while already resolved promise placed into microtask queue
// then event loop check if call stack is empty then execute microtasks and logs "Promise 2"
// and during this setTimeout is placed into macrotask queue
// now event loop check if call stack is empty then executes macrotask queue in FIFO order and logs "Timeout 1"
// and another already resolved promise is placed into microtask queue
// now event loop check call is empty then execute microtask queue and log "Promisee 1"
// and now event loop check call is empty then execute macrotask queue and logs "Timeout 2"

/* ---------------------------------------------------------------------------------- */
// ### Code Block 3: Multiple Microtasks

// console.log("A");

// Promise.resolve().then(function () {
//   console.log("B");
//   Promise.resolve().then(function () {
//     console.log("C");
//   });
//   console.log("D");
// });

// Promise.resolve().then(function () {
//   console.log("E");
// });

// setTimeout(function () {
//   console.log("F");
// }, 0);

// console.log("G");

// **Your Prediction (order):**
// A
// G
// B
// D
// E
// C
// F

// **Actual Output:**
// A
// G
// B
// D
// E
// C
// F

// **Explanation:**
// first all the synchronous code will executes and logs "A" and "G"
// then first resolved promise will placed into microtask queue
// while second resolved promise is also placed into microtask queue
// then setTimeout is placed into macrotask queue
// then the event loop executes the first microtask, which logs ‘B’ and ‘D’ synchronously,
// and during this execution another promise is placed into new microtask queue
// then event loop execute microtask and logs "E"
// then the newly microtask executes and logs "C"
// once a microtask queue is empty event loop execute macrotask queue and logs "F"

/* ---------------------------------------------------------------------------------- */
// ### Code Block 4: Complex Async Chain

// console.log("1");

// setTimeout(function () {
//   console.log("2");
// }, 0);

// queueMicrotask(function () {
//   console.log("3");
// });

// Promise.resolve().then(function () {
//   console.log("4");
//   queueMicrotask(function () {
//     console.log("5");
//   });
// });

// setTimeout(function () {
//   console.log("6");
// }, 0);

// console.log("7");

// **Your Prediction (order):**
// 1
// 7
// 3
// 4
// 5
// 2
// 6

// **Actual Output:**
// 1
// 7
// 3
// 4
// 5
// 2
// 6

// **Explanation:**
// first all the synchronous code executes and logs "1" and "7"
// the first setTimeout callback is placed into the macrotask queue
// queueMicrotask placed into a microtask 
// Promise.then placed into another microtask 
// the second setTimeout callback is placed into the macrotask queue
// after the call stack is empty, the event loop executes microtasks in FIFO order
// the first microtask logs "3"
// the next microtask logs "4" and during its execution schedules another microtask to log "5"
// the newly microtask then logs "5"
// once the microtask queue is fully empty, the event loop executes macrotasks in FIFO order
// the first macrotask logs "2", followed by the second macrotask logging "6"

// Explain the execution order
// 1. call stack
// 2. microtask queue (promises, queueMicrotask(web API))
// 3. macrotask queue (setTimeouts)

/* ---------------------------------------------------------------------------------- */
// ### Code Block 5: Async/Await

console.log("Start");

async function asyncFunction() {
  console.log("Async 1");
  await Promise.resolve();
  console.log("Async 2");
}

asyncFunction();

Promise.resolve().then(function () {
  console.log("Promise 1");
});

setTimeout(function () {
  console.log("Timeout");
}, 0);

console.log("End");

// **Your Prediction (order):**
// Start
// Async 1
// End
// Async 2
// Promise 1
// Timeout

// **Actual Output:**
// Start
// Async 1
// End
// Async 2
// Promise 1
// Timeout

// **Explanation:**
// first all the synchronouse code will excute and log "Start"
// then asyncFunction() is called and logs "Async 1" and during this placed await promise into microtask queue
// then execution schedules another promise into microtask queue
// then setTimeout is placed into macrotask queue
// then execution comes to main thread and logs "End"
// once a call stack is empty, event loop executes microtask queue in FIFO order and logs "Async 2" and then logs "Promise 1"
// after microtask queue is empty then event loop executes macrotask queue and logs "Timeout"