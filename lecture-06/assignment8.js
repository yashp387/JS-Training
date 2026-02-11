Promise.resolve(5)
  .then((res) => res * 2)
  .then((res) => res + 20)
  .then((res) => console.log(res));

