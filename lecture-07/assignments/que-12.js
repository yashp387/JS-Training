// Q12. Explicit Binding (Call/Apply)

const agent = {
  id: 101,
};

function showId() {
  console.log(this.id);
}

showId.call(agent);
showId.apply(null);

// output: 101, undefined

/*Reason:   - first of all showId.call(agent) will set agent objct as a this to showId function
            - Because call() function have fist argument as this and second as list of arguments with comma sepereated
            - so that showId function log 101
            - showId.apply(null) will set null as a this to showId function
            - Because apply() function also have first argument as this and second as an array of arguments
            - so this points to global object in non-strict mode and there is no id so it log undefined
 */