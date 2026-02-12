// Assignment 6: Interfaces

// 1. Create Admin and Customer interfaces using a common base
// 2. Extend the base interface to add role-specific properties
type AppUserRole = "admin" | "Customer";

interface CommonBase {
  name: string;
  id: number;
}

interface Admin extends CommonBase {
  role: "admin";
  permissions: string[];
}

interface Customer extends CommonBase {
  role: "customer";
  totalAmount: number;
}

// 3. Write a function that accepts BaseUser
function printUser(user: CommonBase) {
  console.log(`User: ${user.name} and ID: ${user.id}`);
}

let testUser = {
  name: "yash",
  id: 101,
};

printUser(testUser);

// 4. Pass both Admin and Customer objects to the function:-
const admin: Admin = {
  id: 102,
  name: "Harvery",
  role: "admin",
  permissions: ["Laptop"],
};

const customer: Customer = {
  id: 103,
  name: "Mike",
  role: "customer",
  totalAmount: 5000,
};

// Works because both extend BaseUser.
printUser(admin);
printUser(customer);

// 5. Design an interface for an API response object:-
interface ApiResponse<T> {
  success: boolean;
  data: T;
  message: string;
}

// 6. Create a function that accepts this interface as a parameter:-
function handleApi<T>(response: ApiResponse<T>) {
  if (response.success) {
    console.log(response.data);
  } else {
    console.log(response.message);
  }
}

interface User {
  id: number;
  name: string;
}

const userResponse: ApiResponse<User> = {
  success: true,
  data: { id: 1, name: "Yash" },
  message: "Success",
};

handleApi(userResponse);

// 7. Extend the interface and reuse it
interface extendedApiResponse<T> extends ApiResponse<T> {
  totalCount: number;
  pages: number;
}

// 8. Create an interface for a Product
interface Product {
  id: number;
  name: string;
  price: number;
}

// 9. Create a variable that follows this interface
const product: Product = {
  id: 1,
  name: "Laptop",
  price: 10000,
};

// 10. Why are interfaces preferred in large projects?
// Because they provide clear object structure
// interface easily extends
// help to write cleaner and readable code
