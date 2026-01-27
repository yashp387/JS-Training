/* Exercise 6: The Shopping Cart
Scenario: Calculate the total cost of the items in a cart.
Input: [100, 200, 50]
Task: Use .reduce() to sum the values starting from 0.
Expected Output: 350 */

const input = [100, 200, 50];

const result = input.reduce((acc, sum) => {
  sum += acc;
  return sum;
}, 0);

console.log(result);
