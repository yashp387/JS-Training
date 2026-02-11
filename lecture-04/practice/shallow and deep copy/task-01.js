/* Goal: Demonstrate that a shallow copy shares nested references. 

Requirements:
Create an object original with a nested object inside it.
Create copy using the spread operator ....
Change a value inside the nested object of copy.
Log original.nested.value to prove it changed.

*/
const original = { name: "Test", config: { active: true } };

const copy = { ...original };

copy.name = "Test2";
copy.config.active = false;
console.log(copy.name);
console.log(copy.config.active);
