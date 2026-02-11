// Q16. Async Function Order 
 
async function foo() { 
    console.log("A"); 
    await Promise.resolve(); 
    console.log("B"); 
} 
 
console.log("C"); 
foo(); 
console.log("D"); 

// output:  C, A, D, B

/* Reason:  - first of all synchronous code will execute, so "C" is executes
            - Then foo() function is called and "A" is logged synchronously
            - Then await Promise.resolve() will run and remaining code will schedule as a microtask
            - Then control return to main and "D" logged synchronously
            - And when callstack become empty microtasks will run and logs "B"
 */