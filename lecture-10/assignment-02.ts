// Assignment 2: any vs unknown

// 1. Create a function that accepts any and performs operations without checks

function sum1(a: any, b: any): any {
  console.log(a + b);
}
sum1("asdf", 3);

// 2. Create the same function using unknown and add proper type guards
function sum2(a: unknown, b: unknown): unknown {
  if (typeof a === "number" && typeof b === "number") {
    return a + b;
  }
  return "Invalid input";
}

console.log(sum2(4, 4));

// 3. Compare the compiler behavior and runtime safety:-
// function sum1 with type "any" will compile and run but there is "no type safety" and "can cause runtime errors"
// and function sum2 with type "unknown" will requires type checks before use, prevents unsafe operations, and improves runtime safety.

//4. Create one variable using any
let a: any = "asdf";

// 5. create another variable using unknown
let b: unknown = "asdf";

// 6> Try calling methods directly on both
console.log(a.toUpperCase());
console.log(b.toUpperCase());

// 7. Which one forces you to write safer code?
// type unknown forces me to write safer code
