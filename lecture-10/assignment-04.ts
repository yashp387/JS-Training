// Assignment 4: Intersection Types

// 1. Create an Order using intersection (&):-

// type Customer =  {
//     name: string;
//     email: string;
// }

// type Product  = {
//     prodcutId: number;
//     price: number;
// }

// type Order = Customer & Product;

// const order1: Order = {
//     name:"Yash",
//     email: "yash@example.com",
//     prodcutId: 101,
//     price: 500,
// }

// 2. Create the same model using interfaces and extends:-

interface Customer {
  name: string;
  email: string;
}

interface Product {
  prodcutId: number;
  price: number;
}

interface Order extends Customer, Product {}

const order1: Order = {
  name: "Yash",
  email: "yash@example.com",
  prodcutId: 101,
  price: 500,
};

// 3. Remove one required property and observe the compiler error:-
const order2: Order = {
  name: "Yash",
  email: "yash@example.com",
  prodcutId: 101,
  // missing 'price'
};
// it will throw an error ar compile time that price is misstion in type

// 4. Decide which approach feels clearer and why:-
// Interface approach feels clearer when working wiht real-world relationships and for large applications
// '&' feels clearee for quick type compositions

// 5. Create two small object types and combine them using intersection (&):-
// type Address = {
//     city: string;
// }

// type Contact = {
//     phone: number;
// }

// type Person = Address & Contact;

// const p1: Person = {
//     city: "Gandhinagar",
//     phone: 1234567890,
// }

// 6. Create the same structure using interfaces and extends
interface Address {
  city: string;
}

interface Contact {
  phone: number;
}

interface Person extends Address, Contact {}

const p1: Person = {
  city: "Gandhinagar",
  phone: 1234567890,
};

// 7. Try removing a required property and observe the compiler error
const p2: Person = {
  city: "Gandhinagar",
  // property "phone" is missing
};
// throw a compiler error "Property 'phone' is missing in type '{ city: string; }' but required in type 'Person'"

// 8. Identify when intersection is better than union:-
// intersection types are better than union types when you need to combine multiple object types into a single, comprehensive type that has all the properties of the original types
