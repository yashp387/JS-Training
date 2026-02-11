// Q6. The "Lost" Context 
 
const user = { 
    name: "Alex", 
    printName() { 
        console.log(this.name); 
    } 
}; 
 
const print = user.printName; 
print(); 

// output: undefined

/* Reason: Because printname function is assigned to a variable called print and when we called print() so it is a alone function and this is not points to printName method of user object so it log undefined */