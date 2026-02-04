// Q2. Basic Promise Flow
console.log(1);
Promise.resolve().then(() => {
  console.log(2);
});
console.log(3);

// output= 1, 3, 2

/* Reason: When code start execution first console.log(1) goes into call stack and execute, after that execution come to Promise it goes into microtask queue and then execution directly goes to last console.log(3) and this line prints 3 in the output till the time promise is resolved and after that event loop checks call stack is empty or not and it empty so resolved promise goes into call stack execute console.log(2) like that output is 1, 3, 2 */
