/* Goal: Remove a specific item from an array in a React-friendly way (Immutability). 

Requirements:
Write a function removeItem(items, idToRemove).
It must return a new array excluding the item with that id.
Do not use .splice() (which mutates). Use .filter(). */

const cart = [ { id: 1, item: "Book" }, { id: 2, item: "Pen" } ];

function removeItem(item, id) {
    return item.filter(i => i.id != id);
}

console.log(removeItem(cart, 1));
console.log(cart);