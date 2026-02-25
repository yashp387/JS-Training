// 1. Create overloads for a function format that:
// 2. Accepts number → returns string 
// 3. Accepts Date → returns string 

function format(value: number): string;
function format(value: Date): string;
function format(value: number | Date): string {
    if(typeof value === "number") {
        return value.toFixed(2);
    }

    if(value instanceof Date) {
        return value.toDateString();
    }

    throw new Error("Invalid type");
}

const a = format(123.123);
const b = format(new Date());
console.log(a);
console.log(b);