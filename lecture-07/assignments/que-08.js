// Q8. Arrow Function Pitfall

const group = {
  title: "Developers",
  getTitle: () => {
    console.log(this.title);
  },
};

group.getTitle();

// output = undefined

/* Reason:  - getTitle is an arrow function and arrow function does not have their own this they inherit 
            from lexical scope and here is global object
            - so this does not point to title key of group object 
            - and it logs undefined
*/
