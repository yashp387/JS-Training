// 1. Create a function activateUser that accepts only objects having isActive: boolean.
// 2. Create another function that requires both id and email.
// 3. Try passing invalid objects and observe TypeScript errors.


function activateUser<T extends { isActive: boolean; }>(user: T) {
   return user.isActive;  
}

console.log(activateUser({ isActive: false }));
console.log(activateUser({ isActive: true }));
console.log(activateUser({ name: "john" }));   // Missing isActive

function test<T extends { id: number, email: string }>(user: T) {
    return { id: user.id, email: user.email };
}

console.log(test({id: 101, email: "abc@google.com"}));
console.log(test({id: "asdf", email: "abc@google.com"}));  // wrong type of id
console.log(test({id: "asdf"}));  // wrong type of id and email is missing
console.log(test({email: "abc@google.com"}));  // id is missing