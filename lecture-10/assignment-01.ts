// Assignment 1: Type Inference

// 1. Declare variables using let and const with initial values and observe inferred types
let a = "asdf";
const b = "asdf";

console.log(a);
console.log(b);

// here let have inferred type "string" becuase let variable can change later so typescript infers the broader type
// and const have infeered type "asdf"(literal type) not string becuase it cannot change

// 2. Try reassigning incompatible values and note the compiler errors
a = "asedf";
console.log(a);
b = "jkl";
console.log(b);

// let a can be re-assigned with another string value
// const b can not be re-assigned and it throws an error at compile time "Cannot assign to 'b' because it is a constant."

// 3. Write a function without a return type and inspect what TypeScript infers
function greet() {
  console.log("hii there");
}

// function without a return type, typescript infers to "void" type
