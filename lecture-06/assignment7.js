function tossCoin() {
  return new Promise((resolve, reject) => {
    const result = Math.random();

    if (result < 0.5) {
      resolve("Heads");
    } else {
      reject("Tails");
    }
  });
}

tossCoin()
  .then((result) => console.log(result))
  .catch((reject) => console.log(reject));
