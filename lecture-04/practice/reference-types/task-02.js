/* Goal: Use Functional Programming (Reference creation) over Mutation. 
Requirements:
Convert an array of raw prices [10, 20, 30].
Return a new array of strings formatted as ["$10.00", "$20.00", "$30.00"].
The original array must stay numbers. */

const prices = [10, 20, 30];

const formattedPrices = prices.map(p => "$" + p.toFixed(2));
console.log(formattedPrices);