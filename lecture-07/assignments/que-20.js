// Q20. Object Method Assigned to Class

class Manager {
  constructor(name) {
    this.name = name;
  }

  print = () => {
    console.log(this.name);
  };
}

const m = new Manager("Sarah");
const p = m.print;
p();

// output: "Sarah"
/* Reason: - The output is "Sarah" because print() is an arrow function which permanently binds it
            to manager at the time of instance creation.
            - so calling it later still this refers to the same object
 */