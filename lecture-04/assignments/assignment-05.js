// 5. Trace the execution of this class logic.
class Counter {
  static count = 0;
  count = 10;
  constructor() {
    Counter.count++;
  }
  getCount() {
    return this.count;
  }
  static getStaticCount() {
    return this.count;
  }
}
const c1 = new Counter();
const c2 = new Counter();

console.log(c1.getCount()); // 10 -> getCount() is an instance method, so "this" refers to c1. Since c1.count was initialized to 10, the method returns 10.

console.log(Counter.getStaticCount()); // 2 -> Because getStaticCount() is a static method, it is called on the Counter class. Inside a static method, "this" refers directly to the Counter class. And since two new objects were created, the constructor ran twice and incremented the static count to 2, so the method returns 2 as the output.

console.log(c1.getStaticCount()); // it will throw a TypeError because getStaticCount() is static method and its belongs to class not object so it does not accessed by objects
