/* Goal: Identify data loss when using the JSON deep copy hack.
 
Requirements:
Create an object containing a Date object, a Function, and undefined.
Deep copy it using JSON.parse(JSON.stringify(obj)).
Log the copy. Notice what happened to the Date (became string), Function (vanished), and undefined (vanished).
*/

const complexObj = {
    date: new Date(),
    func: () => console.log("Hello"),
    val: undefined
}

console.log(JSON.parse(JSON.stringify(complexObj)));