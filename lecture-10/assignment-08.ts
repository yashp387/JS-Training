// Assignment 8: Typed Functions

// 1. Write a function with required and optional parameters
// 2. Define return types explicitly
function greet(name: string, age?: number): string {
  if (age != undefined) {
    return `Hi ${name} your are ${age} years old.`;
  } else {
    return `Hi ${name}`;
  }
}

// 3. Create a small utility function that would exist in a real project
function authenticareUser(price: number, discount: number): number {
  return price - (price * discount) / 100;
}

// 4. Write a function with one required and one optional parameter
function formatCurrency(amount: number, currency?: string): string {
  if (currency) {
    return `${currency} ${amount}`;
  } else {
    return `₹ ${amount}`;
  }
}

// 5. Call it with and without the optional argument
console.log(formatCurrency(1236, "$"));
console.log(formatCurrency(5000));

// 6. How does TypeScript enforce correctness here?
// ensure only required parameters are always passed
// preventing from wrong data types
// checking return type matches declared type
