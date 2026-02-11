// Q11. The Nested Timeout

console.log("A");

setTimeout(() => {
  console.log("B");
}, 0);

Promise.resolve().then(() => {
  console.log("C");
  Promise.resolve().then(() => console.log("D"));
});

console.log("E");

// output: A, E, C, D, B

/* Reason:  - first synchronous run first and log "A" and "E" 
            - After that setTimeout placed into macrotask queue
            - while Promise is placed into microtask queue
            - once a callstack is empty event loop executes microtask before macrotask queue
            - so "C" log then "D" becuase they are in microtask queue
            - at last "B" because it is in the macrotask queue
*/