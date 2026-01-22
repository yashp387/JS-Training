function SmartPhone(brand) {
  this.brand = brand;
  return {
    brand: "Generic",
    os: "Android",
  };
}
SmartPhone.prototype.getBrand = function () {
  return this.brand;
};
const myPhone = new SmartPhone("Apple");
console.log(myPhone.brand); // "Generic" -> because it's manually return brand:"Generic"

console.log(myPhone.getBrand); // undefined -> because getBrand() function does not exist in myPhone.  
