// Q7. Event Loop Basic Race

console.log("Start");

setTimeout(() => console.log("Timeout"), 0);

Promise.resolve().then(() => console.log("Promise"));

console.log("End");

// output: Start, End, Promise, Timeout

/* Reason:  - so the synchronous code executes first and log "Start" and "End"
            - After the setTimeout it goes into macrotask queue
            - while promise goes into microtask queue
            - After callstack is empty, event loop executes microtask queue before macrotask queue
            - so "Promise" log before "Timeout"
*/
