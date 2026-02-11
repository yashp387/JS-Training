// Q3. The Broken Chain

Promise.reject("Error Occurred")
  .then(() => console.log("Success"))
  .catch((err) => console.log(err));

// output = Error Occurred

/* Reason: Because promise is rejected and rejected promises directly goes into catch block not in then and the catch block print the error in the console.log(err) so the output is Error Occurred */
