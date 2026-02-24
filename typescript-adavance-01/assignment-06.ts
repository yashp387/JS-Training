// 1. Create a type UserPublicProfile without Create a email and isActive .
// 2. Record that maps user IDs (string) to User objects.

interface User {
  id: string;
  name: string;
  email: string;
  role: "ADMIN" | "CUSTOMER";
  isActive: boolean;
}

type UserPublicProfile = Omit<User, "email"| "isActive">

const admins: UserPublicProfile = {
    id: "101",
    name: "abc",
    role: "ADMIN"
}
console.log(admins);

type UserRecord = Record<string, User>

const users: UserRecord = {
  "1": {
    id: "1",
    name: "John",
    email: "john@test.com",
    role: "ADMIN",
    isActive: true,
  },
};
console.log(users);