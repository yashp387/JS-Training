/* Goal: Create a function getType(value) that returns the true type of a value as a string.

Requirements:
It must distinguish between null, array, and standard objects.
Standard typeof returns 'object' for all three. Your function needs to be smarter. */

function getType(value) {
    if(Array.isArray(value)) return "array";
    if(value === null) return "null";
    return typeof value;
}

console.log(getType(null));   
console.log(getType([1, 2]));    
console.log(getType({a: 1}));    
console.log(getType(1));    
