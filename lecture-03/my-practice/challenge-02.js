const transactions = [
  { id: 101, category: 'Food', amount: 50 },
  { id: 102, category: 'Transport', amount: 20 },
  { id: 103, category: 'Food', amount: 30 },
  { id: 104, category: 'Tech', amount: 1000 }
];

/* The Task: Use .reduce() to create an object where the keys are the categories and the values are the sum of all amounts in that category. */

const newTransactions = transactions.reduce((acc, { category, amount }) => {
  acc[category] = (acc[category] || 0) + amount;
  return acc;
}, {});

console.log(newTransactions);