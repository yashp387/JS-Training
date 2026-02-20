// TS Typed async function for fetching user names
// Description
// You are given an API that returns a list of users.
// GET /users
// Each user has the following shape:
// {id:number;name:string;
// }
// Implement the following function:
// The function should:
// asyncfunctiongetUserNames():Promise<string[]>
// Fetch users from 
// /users
// Return only the list of user names
// Constraints
// Use TypeScript
// Define a 
// User
//  type
// async / await
// Use 
// Untitled
// Do not use 
// any

type User = {
    id: number;
    name: string;
}

async function getUserName(): Promise<string[]> {
    const response = await fetch("/users");
    
    if(!response.ok) throw new Error("request failed to fetch data");

    const users:User[] = await response.json();

    return users.map((user: User) => user.name);
}