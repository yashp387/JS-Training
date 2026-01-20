/*Scenario: You are building a small "Cart" library.

Task: Create an object called shoppingCart with the following:
- A property items (an array).
- A method add(item) that pushes an item to items.
- A method calculateTotal that uses this.items and reduce to return the sum.

The Challenge: Extract the calculateTotal method into a standalone variable. Then, use .call() or .apply() to execute that standalone function against a different object that looks like a cart but doesn't have the method. */

const shoppingCart = {
  items: [],
  add(item) {
    this.items.push(item);
    console.log(`${item.name} added`);
  },
  calculateTotal() {
    return this.items.reduce((total, item) => total + item.price, 0);
  },
};

shoppingCart.add({ name: "Keyboard", price: 500 });
shoppingCart.add({ name: "Mouse", price: 150 });
console.log("Cart total is:", shoppingCart.calculateTotal());


const standalone = shoppingCart.calculateTotal;
// console.log(standalone());  this wil not work because this refers to global scope so it shows error 

const cart = {
    items:[
        { name: "chaii", price: 10},
        { name: "coffee", price: 20}
    ]
}

const cartTotal = standalone.call(cart);
console.log("New cart total is:", cartTotal);