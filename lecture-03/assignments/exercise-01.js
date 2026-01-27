// Exercise 1: The URL Slug Builder
// Scenario: You have a blog post title, and you need to generate a URL-friendly "slug" (lowercase, hyphen-separated).
// Input: "JavaScript For Beginners"
// Task:
// Convert the string to lowercase.
// Split the string into words.
// Join the words back together using hyphens (-).
// Expected Output: "javascript-for-beginners"

const input = "Javascript For Beginners"

const result = input.toLocaleLowerCase().split(" ").join("-");
console.log(result);