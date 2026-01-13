
// Shadowing happens when a variable declared in an inner scope has the same name as a variable in an outer scope.
// The inner variable shadows (hides) the outer one within that scope.

let y = 5;

function shadow() {
    let y = 10;
    console.log(y);
}

shadow();
console.log(y);


// An Execution Context is the environment where JavaScript code is evaluated and executed.

// Types of Execution Context
// Global Execution Context (GEC)
// Function Execution Context (FEC)
// Eval Execution Context (rarely used)

var x = 1;

function context() {
  var y = 2;
  console.log(x + y);
}

context();

// (1) Global Context Created
        // x → undefined
        // context → function

// (2) Execution Phase (Global)
        // x = 1
        // context() called

// (3) Function Context Created
        // y → undefined

// (4) Execution Phase (Function)
        // y = 2
        // console.log(3)