// Problem 7: Role-Based Permission Checker
// Objective:-
// Implement a generic role-based access control utility.
// Input:-
// const roles = {
//   admin: ["READ", "WRITE", "DELETE"],
//   editor: ["READ", "WRITE"],
//   viewer: ["READ"]
// };

// Requirements
// Implement:
// canAccess(role, permission)
// Return true or false
// Handle invalid roles safely
// Avoid hard-coded conditions

// Expected Outcome:-
// canAccess("admin", "DELETE"); // true
// canAccess("viewer", "WRITE"); // false
// canAccess("unknown", "READ"); // false

const roles = {
  admin: ["READ", "WRITE", "DELETE"],
  editor: ["READ", "WRITE"],
  viewer: ["READ"],
  guest: [],
};

const canAccess = (role, permission) => {
  if (typeof role !== "string" || typeof permission !== "string") {
    console.warn("Invalid input types");
    return false;
  }

  const normalizedRole = role.toLowerCase();
  const normalizedPermission = permission.toUpperCase();

  const userPermission = roles[normalizedRole];

  if (!userPermission) {
    return false;
  }

  return userPermission.includes(normalizedPermission);
};

console.log(canAccess("admin", "DELETE")); //true
console.log(canAccess("viewer", "WRITE")); // false
console.log(canAccess("unknown", "READ")); // false
console.log(canAccess("Editor", "read")); // true
console.log(canAccess(null, "READ")); // false
