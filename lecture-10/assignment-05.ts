// Assignment 5: Type Aliases

// 1. Create reusable aliases for union and intersection types
type UserRole = "admin" | "manager" | "guest";

type Timestamped = {
  createdAt: Date;
  updatedAt: Date;
};

// 2. Refactor earlier assignments to use these aliases
type AppUserRole = "admin" | "student";

type BaseUser = {
  name: string;
  role: AppUserRole;
};

type Admin = BaseUser & {
  role: "admin";
  permission: string[];
};

type Student = BaseUser & {
  role: "student";
  marks: number;
};

type AppUser = Admin | Student;

// 3. Observe how readability improves:-
// Base properties defined once
// less duplication
// easies to extend late

// 4. Create a type alias for string | number:-
type StringOrNumber = string | number;

// 5. Use it in two variables:-
let val1: StringOrNumber = "hello world";
let val2: StringOrNumber = 45;

// 6. How does this improve readability?
// Instead of repeating: let val1: string | number; we can write let val1: StringOrNumber
// cleaner code, easier reafactoring and main reduces duplications
