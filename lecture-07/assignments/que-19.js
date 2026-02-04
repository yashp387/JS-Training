// Q19. Microtask vs Macrotask Interleaving

setTimeout(() => console.log("T1"), 0);

Promise.resolve().then(() => {
  console.log("P1");
  setTimeout(() => console.log("T2"), 0);
});

Promise.resolve().then(() => console.log("P2"));

console.log("End");

// output: "End", "P1", "P2", "T1", "T2"

/* Reason:  - First of all "End" is logged synchronously
            - Then first setTimeout place into macrotask queue
            - Then already resolved promises goes into microtask queue.
            - After call stack is empty, then event loop executes microtask first and logging "P1" and "P2"
            - During "P1" execution another macrotask is placed
            - Once all microtasks executes then event loop execute macrotasks in FIFO order and logs "T1" and "T2" 
 */