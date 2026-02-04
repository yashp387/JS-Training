// Q5. Math in Promises

Promise.resolve(10)
  .then((num) => num * 2)
  .then((result) => console.log(result));

// OUTPUT: 20

/* Reason: Because the promise is resolves so it goes to then block and then block take value 10 and pass to callback function and callback function executes return new promise and this promise goes to next then becuase it's promise chaining and last then log the result of before then which is 20 */