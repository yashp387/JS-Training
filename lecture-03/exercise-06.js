const input = [100, 200, 50];

const result = input.reduce((acc, sum) => {
  sum += acc;
  return sum;
}, 0);

console.log(result);
