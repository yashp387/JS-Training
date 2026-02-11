// Q15. Throwing Inside a Chain

Promise.resolve(1)
  .then((x) => {
    throw new Error("Invalid");
  })
  .catch((err) => {
    console.log("Caught Error");
    return 10;
  })
  .then((x) => console.log(x));

// output: Caught Error, 10

/* Reason:  - In this snippet Promise resolved and return value 1 to then block
            - then block throw error so it directly goes to catch block toi print the error
            - so catch block catch the error and log "Caught Error" and return value
*/