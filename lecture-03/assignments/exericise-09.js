/* Exercise 9
Combine everything you learned into one function.
Scenario: You have an inventory list.
Filter out items that are out of stock (stock: 0).
Map the remaining items to calculate their total value (price * stock).
Reduce to find the total value of the entire inventory.
Data:
JavaScript
const inventory = [
    { name: "Laptop", price: 1000, stock: 5 },
    { name: "Phone", price: 500, stock: 0 },
    { name: "Mouse", price: 50, stock: 10 }
];
Expected Output: 5500 */

const inventory = [
  { name: "Laptop", price: 1000, stock: 5 },
  { name: "Phone", price: 500, stock: 0 },
  { name: "Mouse", price: 50, stock: 10 },
];

const result = inventory
  .filter((i) => i.stock > 0)
  .map((i) => i.price * i.stock)
  .reduce((acc, total) => {
    total += acc;
    return total;
  }, 0);

console.log(result);
