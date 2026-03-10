/* Problem :-
Write a function generateTable that efficiently renders a table from an array of objects.
1. Use DocumentFragment to batch the updates (avoid reflows).
2. The first object's keys should be the table headers (<th>).
3. The values should be the table rows (<td>).
4. Append the result to a container ID.
*/

const btn5 = document.getElementById("btn-5");

function generateTable(data, containerId) {
  if (data?.length === 0) return;

  const container = document.getElementById(containerId);
  const table = document.createElement("table");
  const fragment = document.createDocumentFragment();

  // header
  const thead = document.createElement("thead");
  const headerRow = document.createElement("tr");

  Object.keys(data[0]).forEach((key) => {
    const th = document.createElement("th");
    th.textContent = key;
    headerRow.appendChild(th);
  });

  thead.appendChild(headerRow);
  table.appendChild(thead);

  // body
  const tbody = document.createElement("tbody");

  data.forEach((obj) => {
    const row = document.createElement("tr");

    Object.values(obj).forEach((value) => {
      const td = document.createElement("td");
      td.textContent = value;
      row.append(td);
    });
    tbody.appendChild(row);
  });

  table.appendChild(tbody);
  fragment.appendChild(table);

  container.appendChild(fragment);
}

btn5.addEventListener("click", () => {
  generateTable(
    [
      { name: "Alice", age: 25, city: "Gandhinagar" },
      { name: "Bob", age: 30, city: "Ahmedabad" },
    ],
    "table-container",
  );
});
