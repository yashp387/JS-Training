const prices: number[] = [10, 20, 30, 40, 50];
function calculateTotal(arr:number[]): number{
     return arr.reduce((acc, num) => acc += num, 0);
}
console.log(calculateTotal(prices));

