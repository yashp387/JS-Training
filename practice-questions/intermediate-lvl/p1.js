// Problem 1: Variable Scope & Hoisting (var, let, const)
// Question
// Predict the output of the following code and explain why it behaves that way.
console.log(a);

var a = 10;

if (true) {
  let a = 20;
  console.log(a);
}

console.log(a);

// output:
// undefined
// 20
// 10

// Explanation
// first log will print "undefined" because var a is hoisted and initialized to undefined

// second log will print "20" becuase a declared with let and let is block-scoped and creates a new variable inside the block.

// third log will print "10" becuase var a is global scoped so that is why it logs "10"