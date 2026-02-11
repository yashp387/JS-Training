// Q9. Chaining Returns

Promise.resolve(5)
  .then((val) => {
    console.log(val);
    return val + 5;
  })
  .then((val) => console.log(val));

// output: 5, 10

/* Reason:  - It a example of promise chaining and first promise os resolved with value 5.
            - value 5 pass to first then and it log 5 and return new promise with value 10 to next then because it's chaining
            - and last then log 10.
 */