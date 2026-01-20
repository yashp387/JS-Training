const raw = "react-node";
// 1. String to Array (Explode)
const words = raw.split("-"); // ["react", "node"]
// 2. Array to String (Glue)
const slug = words.join("-"); // "react-node"

console.log(words);

const names = "yash Test ABCD XYZ";

console.log(names.split(" "));

const rawTags = "react,javascript,frontend,css";

// Step 1: Split into an array
const tagList = rawTags.split(",");

const numbers = [2, 5, 8];

// "Take every number (n) and return n * 10"
const multiplied = numbers.map((n) => n * 10);

console.log(multiplied);

const scores = [2, 5, 8, 10];

// "Is the score > 5? Yes or No?"
const highScores = scores.filter((score) => score > 5);

console.log(highScores);

const products = [
  { id: 1, name: "Laptop", stock: 5 },
  { id: 2, name: "Phone", stock: 0 },
  { id: 3, name: "Mouse", stock: 10 },
];

const result = products
  .filter((p) => p.stock > 0)
  .map((p) => `${p.name} is available`);

console.log(result);

const totalSum = scores.reduce((acc, total) => {
  total = total + acc;

  return total;
}, 0);

console.log(totalSum);

const votes = ["Yes", "No", "Yes", "Maybe", "Yes"];

const count = votes.reduce(
  (acc, vote) => {
    if (acc[vote]) {
      acc[vote] += 1;
    }
    return acc;
  },
  {
    Yes: 0,
    No: 0,
  },
);

const product = {
  name: "Laptop",
  price: 200,
};

const car = {
  brand: "Tesla",
  start: function () {
    // 'this' points to 'car' because we call car.start()
    console.log("Starting " + this.brand);
  },
  stop() {
    console.log("Stopping " + this.brand);
  },
};

car.start();
car.stop();

const x = car.start();
console.log(x);

const user1 = { name: "John" };
const user2 = { ...user1, name: "Doe" };

console.log(user2.name, user1.name);

// The Task:
// Create a user object with name, email, and settings: { theme: 'light' }.
// Create a method inside it called printInfo that logs "User [name] uses [theme] theme" using this.
// Create a copy of the user (called updatedUser) using the spread operator.
// Change the updatedUser's name to "Admin".
// Verify that the original user is unchanged.

const user = {
  name: "yash",
  email: "yash.prajapati@bacancy.com",
  settings: {
    theme: "light",
  },
  printInfo: function () {
    console.log(`User ${this.name} uses ${this.settings.theme} theme`);
  },
};

const updatedUser = { ...user, name: "Admn" };

user.printInfo();
updatedUser.printInfo();

// for my practice purpose
const users = [
  { firstName: "Akshay", lastName: "Saini", age: 26 },
  { firstName: "Donald", lastName: "Trump", age: 70 },
  { firstName: "Elon", lastName: "Musk", age: 50 },
  { firstName: "Deepika", lastName: "Padukone", age: 30 },
];

// Map
const fullName = users.map((user) => user.firstName + " " + user.lastName);
console.log(fullName);

// chaining using filter and map
const output = users.filter((x) => x.age < 30).map((x) => x.firstName);
console.log(output);

// reduce
const output2 = users.reduce((acc, fullName) => {
  if (fullName.age < acc) {
    console.log(
      `${fullName.firstName} ${fullName.lastName} age is less than 30`,
    );
  }
}, 30);
