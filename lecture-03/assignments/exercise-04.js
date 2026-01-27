/* Exercise 4: The Clean-Up Crew
Scenario: You have a list of user ages. Some data is corrupted (negative numbers or zero).
Input: [25, -5, 18, 0, 40]
Task: Use .filter() to keep only valid ages (positive numbers > 0).
Expected Output: [25, 18, 40] */

const input = [25, -5, 18, 0, 40];

console.log(input.filter((i) => i > 0));