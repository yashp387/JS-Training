// const user = {
//     name: "Alex",
//     greet: () => {
//         console.log("Hello, " + this.name);
//     }
// };

// 1. Explanation why it fails:-
//  Above code is failed due to Arrow function. Because arrow function does not bind their own "this", so "this" does not refer to the user object. It refers to outer object which is global scope which is why this.name is undefined


// fixed code
const user = {
    name: "Alex",
    greet: function() {
        console.log("Hello, " + this.name);
    }
};

user.greet();