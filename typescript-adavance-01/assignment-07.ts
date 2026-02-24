// 1. Create a custom utility ReadonlyByKeys<T, K> that makes selected keys readonly.
// 2. Create a utility NonNullableFields<T> that removes null and undefined from all properties.
// 3. Apply both to User and test different scenarios.

type ReadonlyByKeys<T, K extends keyof T> = Omit<T, K> & { readonly [P in K]: T[P]}

interface User {
    id: string;
    name: string;
    email: string;
    isActive: boolean;
}

type Test = ReadonlyByKeys<User, "id" | "email">

const testing: Test = {
    id: "abc",
    name: "testUser",
    email: "abc@test.com",
    isActive: true,
}
console.log(testing);


type NonNullableFields<T> = {
    [K in keyof T]: NonNullable<T[K]>
}

type CleanAdmin = NonNullableFields<User>;

const user: CleanAdmin = {
    id: "abc",
    name: "yash",
    email: "yash@test.com",
    isActive: true
}
console.log(user);

type SafeUser = ReadonlyByKeys<NonNullableFields<User>, "id">