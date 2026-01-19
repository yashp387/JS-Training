// Scenario: You have an array of product objects. You need to generate a report.

/* Task: 1. Use filter to find all products in the "Electronics" category. 
2. Use reduce to calculate the total cost of those electronics. 
3. Create a new array of products where each product has an added property inStock: true using the spread operator, without mutating the original array.
*/

const products = [
  { id: 1, name: "Laptop", price: 1000, category: "Electronics" },
  { id: 2, name: "Shirt", price: 20, category: "Apparel" },
  { id: 3, name: "Phone", price: 500, category: "Electronics" }
];

const electronics = products.filter((i) => i.category == "Electronics");
console.log(electronics);

const totalCost = electronics.reduce((sum, p) => sum + p.price, 0);
console.log(totalCost);

const newProducts = products.map(p => ({
    ...p,
    inStock: true,
}));
console.log(newProducts);
console.log(products[0].inStocks);