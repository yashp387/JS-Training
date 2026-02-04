// 17. The "Finally" Gotcha

Promise.resolve("Done")
  .finally(() => {
    console.log("Cleanup");
    return "Modified?";
  })
  .then((res) => console.log(res));

// output: Cleanup, Done

/* Reason:  - Here Promise is already resolved and return "Done".
            - .finally() block always exeuctes but does not receive any resolved value so any value returned from finally() block will be ignored
            - That is why after logging "Cleanup" the resolved value "Done" will passed to then block and logs "Done"
 */
