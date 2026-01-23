/* Goal: Write a function isEqual(a, b) that compares two values. 

Requirements:
It should return true if they are structurally equal (same keys and values), even if they are different references.
It must support nested objects.
Assume inputs are JSON-compatible (no functions or circular refs for now). */

function isEqual(a, b) {
    if(a === b) return true;

    if(a === null || b === null) return false;
    if(typeof(a) !== "object" || typeof(b) !== "object") return false;

    const keyA = Object.keys(a);
    const keyB = Object.keys(b);

    if(keyA.length !== keyB.length) return false;

    for(const key of keyA){
        if(!keyB.includes(key)) return false;
        if(!isEqual(a[key], b[key])) return false;
    }
    return true;
}

const objA = { a: 1, b: { c: 2 } };
const objB = { a: 1, b: { c: 2 } };
const objC = { a: 1, b: { c: 3 } };
console.log(objA === objB);
console.log(isEqual(objA, objB)); 
console.log(isEqual(objA, objC)); 