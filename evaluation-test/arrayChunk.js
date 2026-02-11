// ## **JS: Chunk an Array**

// Write a function `chunkArray(arr, size)` that:

// * Splits an array into **smaller arrays (chunks)** of a given size
// * Returns a new array containing these chunks
// * Uses **reduce**
// * Uses **slice OR index-based logic**
// * Does **not use loops** (`for`, `while`)

// ---

// ### **Example:**

// **Input:** `([1, 2, 3, 4, 5], 2)`
// **Output:** `[[1, 2], [3, 4], [5]]`

// ---

// ### **Constraints:**

// * `size` will always be greater than 0
// * Original array should not be mutated

function chunkArray(arr, size) {
  return arr.reduce((acc, curr, index) => {
    if (index % size === 0) {
      acc.push([curr]);
    } else {
      acc[acc.length - 1].push(curr);
    }
    return acc;
  }, []);
}
console.log(chunkArray([1, 2, 3, 4, 5], 2));