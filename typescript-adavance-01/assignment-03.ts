// 1. Create a function updateField that takes:
// 2. object
// 3. key
// 4. value
// 5. Ensure the value type matches the key type.
// 6. Try assigning wrong type and observe the error.

function updateField<T, K extends keyof T>(obj: T, key: K, value: T[K]): T[K] {
  return obj[key];
}

const user = {
    id: 101,
    name: "john",
    isActive: true,
}

updateField(user, "name", "alice");
updateField(user, "name", 123);  //Argument of type 'number' is not assignable to parameter of type 'string'.
updateField(user, "age", "john"); // Argument of type '"age"' is not assignable to parameter of type '"name" | "id" | "isActive".
updateField(user, "id", 1);
updateField(user, "id", "asd"); // Argument of type 'string' is not assignable to parameter of type 'number'.