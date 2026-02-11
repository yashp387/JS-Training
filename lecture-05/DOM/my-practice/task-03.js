/* Problem :- Write a function createList that takes an array of strings and an ID of an existing <ul> or <ol>. It should clear any existing content in that list and create a new <li> for every string in the array, appending them to the list. */

const btn3 = document.querySelector("#btn");

function createList(items, listId) {
  const list = document.getElementById(listId);

  list.innerHTML = "";

  items.forEach((item) => {
    const li = document.createElement("li");
    li.textContent = item;
    list.appendChild(li);
  });
}

// Event listeners need a FUNCTION reference, not a function call
btn3.addEventListener("click", () => {
  createList(["Mango", "Graps", "Organge", "Guava"], "fruits");
});
