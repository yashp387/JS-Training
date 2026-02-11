var prices = [10, 20, 30, 40, 50];
function calculateTotal(arr) {
    return arr.reduce(function (acc, num) { return acc += num; }, 0);
}
console.log(calculateTotal(prices));
