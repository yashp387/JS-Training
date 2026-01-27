/* Goal: Build a caching wrapper function. 

Requirements:
Write a function memoize(fn).
It takes a function fn (which accepts one argument) and returns a new function.
If the new function is called with an argument it has seen before, return the cached result.
If new, run fn, cache the result, and return it.
*/

// Function to be memoized

const heavyCalc = (x) => {
  console.log("Calculating...");
  return x * 2;
};

function memoize(fn) {
  const cache = {};
  return function (arg) {
    if (arg in cache) {
      return cache[arg];
    }
    const result = fn(arg);
    cache[arg] = result;
    return result;
  };
}

const fastCalc = memoize(heavyCalc);
console.log(fastCalc(5));
console.log(fastCalc(5));
