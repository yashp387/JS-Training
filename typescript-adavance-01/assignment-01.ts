// 1. Create a generic function called wrapInArray that accepts any value and returns it inside an
// array.
// 2. Create a generic interface PaginatedResponse<T> with properties:
// 3. items: T[]
// 4. total: number;

function wrapInArray<T>(value: T): T[] {
    return [value];
}

const numbers = wrapInArray(10);
console.log(numbers);
const names = wrapInArray("xyz");
console.log(names);
const user = wrapInArray({ id: 1, name: "abc"});
console.log(user);


interface PaginatedResponse<T> {
    items: T[];
    total: number;
}

const users: PaginatedResponse<string> = {
    items: ["abc", "xyz"],
    total: 2
}
console.log(users);
