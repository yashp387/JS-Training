// Q1. Simple Object Context
const laptop = {
  brand: "Dell",
  getBrand: function () {
    return this.brand;
  },
};
const myBrand = laptop.getBrand();
console.log(myBrand);

// output: Dell

/* Reason: Because getBrand is normal function and this keyword in normal function reference is to the object that is why this.brand return Dell */
