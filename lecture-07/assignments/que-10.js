// Q10. Catch and Continue

Promise.reject("Fail")
  .catch((err) => {
    console.log(err);
    return "Recovered";
  })
  .then((res) => console.log(res));

// output: Fail, Recovered
/* Reason:  - First promise is rejected with Fail
            - so it directly goes into catch block and catch block print "Fail" and return "Recovered" to next then block with resolve promise
            - at last then block print "Recovered"
 */
