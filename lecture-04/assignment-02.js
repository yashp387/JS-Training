/* function Animal(name) {
  this.name = name;
}
Animal.prototype.eat = function () {
  console.log(`${this.name} is eating.`);
};
function Dog(name, breed) {
  Animal.call(this, name);
  this.breed = breed;
}
// Intent: Dog should inherit from Animal
Dog.prototype = Animal.prototype; 
Dog.prototype.bark = function () {
  console.log("Woof!");
};
const myDog = new Dog("Buddy", "Golden");
const genericAnimal = new Animal("Generic");
genericAnimal.bark(); // Why does this happen?
console.log(myDog.constructor.name); // Why is this 'Animal' and not 'Dog'?
*/

// Identify why the following code throws an error?
/*  ->  Above code throw an error because of this line "Dog.prototype = Animal.prototype;" because this
    line makes both constructor to share same prototype in memory.    
    -> "genericAnimal.bark();" this line is works because bark() is added to Animal.prototype and it is same as Dog.prototype so it works.
    -> Because we also override its constructor reference because of this line "Dog.prototype = Animal.prototype;" and that is why it give output as "Animal"
*/

// Fixed version
function Animal(name) {
    this.name = name;
} 

Animal.prototype.eat = function() {
    console.log(`${this.name} is eating`);
}

function Dog(name, breed) {
  Animal.call(this, name);
  this.breed = breed;
}

Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;

Dog.prototype.bark = function () {
  console.log("Woof!");
};

const myDog = new Dog("Buddy", "Golden");
const genericAnimal = new Animal("Generic");

genericAnimal.bark(); // this line gives an error that bark() is not function because Animal object do not have Dog.prototype in their prototype chain.
console.log(myDog.constructor.name);
myDog.bark();
myDog.eat();