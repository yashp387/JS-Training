// Problem 6: Inventory Management System
// Objective:-
// Create an inventory system for managing products.
// Product Structure
// { id, name, price, quantity }

// Requirements
// Functions to:
// Add a product
// Update quantity by product ID
// Remove out-of-stock products
// Calculate total inventory value

// Avoid unnecessary object mutation


// Expected Outcome:-
// Inventory updates correctly
// Accurate total value calculation
// Clean, immutable updates

// Initial State
const initialInventory = [
  { id: 1, name: "Laptop", price: 999.99, quantity: 5 },
  { id: 2, name: "Mouse", price: 25.00, quantity: 0 },
  { id: 3, name: "Keyboard", price: 75.50, quantity: 2 }
];

// Add product
const addProduct = (inventory, newProduct) => {
    const exist = inventory.find(item => item.id === newProduct.id);

    if(exist) {
        // If ID exists, map through and update only that specific item
        return inventory.map(item => 
            item.id === newProduct.id ? { ...item, quantity: item.quantity + newProduct.quantity} : item
        );
    }

    // If new, spread old inventory and append new item
    return [...inventory, { ...newProduct }];
}

// Requirement: Update quantity by ID
const updateQuantity = (inventory, id, newQuantity) => {
    return inventory.map(item => {
        if(item.id === id) {
            return {...item, quantity: Math.max(0, newQuantity)};
        }
        return item;
    })
}

// Requirement: Remove out-of-stock products
const removeOutOfStock = (inventory) => {
    return inventory.filter(item => item.quantity > 0);
}

// Requirement: Calculate total inventory value
const calculateTotalValue = (inventory) => {
    const total = inventory.reduce((acc, item) => {
        return acc + (item.price * item.quantity);
    }, 0);

    return Number(total.toFixed(2));
}

// usage
let currentInventory = addProduct(initialInventory,  { id: 4, name: "Monitor", price: 150.00, quantity: 2 });

currentInventory = updateQuantity(currentInventory, 2, 10);
currentInventory = updateQuantity(currentInventory, 1, 0);

const cleanInventory = removeOutOfStock(currentInventory);
const totalValue = calculateTotalValue(currentInventory);

console.log("Final inventory: ", cleanInventory);
console.log("Total value: ", totalValue);