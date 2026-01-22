const registry = {
  active: [{ id: 1, name: "Alpha" }],
  archived: [],
};
function cloneAndModify(data) {
  // Goal: Create a copy so the original registry isn't changed
  const copy = { ...data };
  copy.active.push({ id: 2, name: "Beta" });
  copy.active[0].name = "Gamma";
  copy.version = 2.0;
  return copy;
}
const newRegistry = cloneAndModify(registry);
console.log(registry.active.length); // 2
console.log(registry.active[0].name); // "Gamma"
console.log(registry.version); // undefined because version exist in copy not in registry

// Memory state
/* First of all there are two types of memory state:
 1) Stack memory (static memory):- It stores primitive values and references to objects. 
 2) Heap memory (dynamic memory):- It stores Non-primitive values like object or Arrays.

 The final memmory state of above given code is:
 registry:
 {
  active: [
    { id: 1, name: "Gamma" },
    { id: 2, name: "Beta" }
  ],
  archived: []
}

newRegistry:
{
  active: [
    { id: 1, name: "Gamma" },
    { id: 2, name: "Beta" }
  ],
  archived: [],
  version: 2
}

*/
