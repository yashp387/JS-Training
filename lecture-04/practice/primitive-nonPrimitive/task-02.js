/* Goal: Predict and fix a side-effect bug where a function modifies the original array passed to it. Requirements:

Write a function addToCart that takes a cart array and a newItem object.
It should return a new array with the item added.
Constraint: The original cart array passed in must remain unchanged. */

const initialCart = [{ id: 1, name: "book" }];

function addToCart(cart, nameItem) {
    return [...cart, nameItem];
}

console.log(initialCart);
console.log(addToCart(initialCart, {price: 50}));
