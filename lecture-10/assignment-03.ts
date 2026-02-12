// Assignment 3: Union Types

// 1.Add one more role (e.g.Guest) to the User union
// 2. Write a function that accepts User
// 3. Use the role field to safely narrow the type
// 4. Observe how TypeScript prevents invalid property access
type Admin = {
  role: "admin";
  name: string;
  permissions: string[];
};

type Customer = {
  role: "customer";
  name: string;
  purchaseHistory: number[];
};

type Guest = {
  role: "guest";
  name: string;
  visitReason: string;
};

type User = Admin | Customer | Guest;

function handleUser(user: User) {
  if (user.role === "admin") {
    console.log(user.permissions);
  } else if (user.role === "customer") {
    console.log(user.purchaseHistory);
  } else {
    console.log(user.visitReason);
  }
}

// function test(user: User) {
//     console.log(user.permissions);
//     //Property 'permissions' does not exist on type 'Customer' | "Guest".
// }

// 5. Create a union type for two different user roles using type
type RoleA = {
  role: "user";
  canUse: boolean;
};

type RoleB = {
  role: "manager";
  canManage: boolean;
};
type permission = RoleA | RoleB;

// 6. Create another union using two interfaces

interface Teacher {
  role: "teacher";
  subject: string;
}

interface Student {
  role: "student";
  marks: number;
}

type SchoolMember = Teacher | Student;

// 7. Write a function that accepts the union and narrows the type safely
function handleMember(member: SchoolMember) {
  if (member.role == "teacher") {
    console.log(member.subject);
  } else {
    console.log(member.marks);
  }
}
let memberUser: SchoolMember = {
  role: "student",
  marks: 100,
};

handleMember(memberUser);
