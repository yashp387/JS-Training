// object merging
function merge(arr) {
  const map = arr.reduce((acc, obj) => {
    const { id } = obj;

    if (!acc[id]) {
      acc[id] = {};
    }

    acc[id] = { ...acc[id], ...obj };
    return acc;
  }, {});

  return Object.values(map);
}

const arr = [
  { id: 1, name: "John", age: 25 },
  { id: 2, city: "Delhi" },
  { id: 1, city: "Mumbai" },
  { id: 2, age: 30 },
];
console.log(merge(arr));
