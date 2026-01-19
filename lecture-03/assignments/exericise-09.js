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
