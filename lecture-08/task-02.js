// ## Task 2: setTimeout Examples

// ### Objective
// Complete and understand various setTimeout scenarios.

// ### Exercise 1: Basic setTimeout

// **Task:** Create a function that logs numbers 1 to 5, with a 1-second delay between each number.

// TODO: Implement countWithDelay function
// function countWithDelay() {
//  // Your code here
//  for(let c = 1; c < 6; c++) {
//     setTimeout(() => {
//         console.log(c);
//     }, c*1000);
//  }
//  // Should output: 1 (after 1s), 2 (after 2s), 3 (after 3s), 4 (after 4s), 5 (after 5s)
// }

// countWithDelay();

// explanation:
// The countWithDelay function contains a for loop with setTimeout, which is used to print numbers from 1 to 5,the delay is calculated as c * 1000 milliseconds, which ensures that the numbers are logged one by one at one-second intervals (1 after 1 second, 2 after 2 seconds, and so on up to 5 after 5 seconds).

/* --------------------------------------------------------------------------------------- */
// ### Exercise 2: setTimeout in Loop (Fix the Bug)

// **Task:** Fix the following code so it logs 0, 1, 2 instead of 3, 3, 3.

// BUGGY CODE - Fix this
// for (var i = 0; i < 3; i++) {
//  setTimeout(function() {
//    console.log(i); // Currently logs: 3, 3, 3
//  }, 1000);
// }

// TODO: Fix the code above to log 0, 1, 2
// for(let i = 0; i < 3; i++) {
//     setTimeout(() => {
//         console.log(i);
//     }, 1000);
// }

// Explanation:
// var is changed to let so the loop logs 0 1 2, if we use var it will log 3 3 3, this is due to closures. var is function-scoped, not block-scoped and setTimeout is asynchronous so the Value of i when callbacks run is 3, 3, 3.

/* --------------------------------------------------------------------------------------- */
// ### Exercise 3: setTimeout with Clear

// **Task:** Create a countdown timer that counts from 10 to 0, then stops.

// TODO: Implement countdown function
function countdown(start) {
  [...Array(start + 1)].forEach((_, index) => {
    const value = start - index;

    setTimeout(() => {
      console.log(value);
    }, index * 1000);
  });

  // Should log numbers from start to 0, with 1 second between each
  // Should stop at 0
}

countdown(10);

// Explanation:
// This countdown function prints numbers from 10 down to 0 with a one-second delay between each number. The for loop decreases the value of i on each iteration, and setTimeout delays printing based on the current value of i. The delay calculation ensures each number appears one second after the previous one, and using let keeps the correct value of i for each delayed execution.
