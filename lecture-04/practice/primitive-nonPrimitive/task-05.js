/* Goal: Create a deep copy function that handles circular references without crashing. 

Requirements:
- Standard recursion crashes if Object A references Object B, and Object B references Object A.
- Implement deepClone(obj) using a WeakMap or Map to track visited objects. */

function deepClone(obj, visited = new WeakMap()) {
  if (obj === null || typeof obj !== "object") {
    return obj;
  }

  if (visited.has(obj)) {
    return visited.get(obj);
  }

  const cloned = Array.isArray(obj) ? [] : {};
  visited.set(obj, cloned);
  for (const key of Object.keys(obj)) {
    cloned[key] = deepClone(obj[key], visited);
  }
  return cloned;
}

const a = { name: "Alice" };
const b = { name: "Bob" };
a.friend = b;
b.friend = a;
const clone = deepClone(a);
console.log(clone.friend.friend.name === "Alice");