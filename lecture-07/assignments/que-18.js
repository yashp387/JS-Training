// Q18. Variable Hoisting & Promises

console.log(a);
var a = 5;

Promise.resolve().then(() => {
  console.log(a);
});

a = 10;

// output: undefined, 10

/* Reason:  - Here synchronously first logs "undefined" because a is hoisted and initialized to undefined
            - Then already resolved promise goes into microtask queue
            - while value of a is updated to 10
            - after that resolved promise pass to then block and logs 10 becuase value of a is re-assigned to 10
 */