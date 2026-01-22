/* 4. Write a function called masterClone(obj) that performs a 
deep copy without using JSON.stringify or structuredClone. 
Requirements: 
● It must handle nested objects. 
● It must handle nested arrays. 
● It must not copy functions by reference (they can remain shared, but the 
object structure must be unique). 
*/

function masterClone(value) {
  if (!value || typeof value !== "object") {
    return value;
  }

  if (Array.isArray(value)) {
    return value.map((item) => masterClone(item));
  }

  const same = {};

  for(const key in value) {
    if(Object.prototype.hasOwnProperty.call(value, key)) {
        same[key] = masterClone(value[key]);
    }
  }
  return same;
}

const original = {
  name: "Yash",
  skills: ["JS", "React"],
  info: { age: 21 },
  greet() { "asd" }
};

const copy = masterClone(original);

original.skills.push("Node");
original.info.age = 30;

console.log(copy.skills);
console.log(copy.info.age); 
console.log(original.greet());

