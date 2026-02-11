// Q13. Promise.all Failure

Promise.all([
  Promise.resolve("Success 1"),
  Promise.reject("Error 1"),
  Promise.resolve("Success 2"),
])
  .then((res) => console.log("Result:", res))
  .catch((err) => console.log("Caught:", err));

  
// output: Error 1

/* Reason:  - In Promise.all will return result if all promise resolved but if one promise will reject
            then it reject immediately and directly goes to catch block and print the error
            - so here first promise is resolved but second promise is rejected so it goes to catch block
            - and log Error 1 in console.
 */