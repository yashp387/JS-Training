/* Problem :- Implement liveFilter. You have an input field and a <ul> list of items. As the user types, loop through the list items. If an item's text does not include the typed text (case-insensitive), hide it (display: none). If it does match, show it (display: block or empty string). */

function liveFilter(inputId, listId) {
  const input = document.getElementById(inputId);
  const list = document.getElementById(listId);
  const items = list.querySelectorAll("li");

  input.addEventListener("input", (e) => {
    const text = e.target.value.toLowerCase();

    Array.from(items).forEach((item) => {
      const itemText = item.textContent.toLowerCase();

      if (itemText.includes(text)) {
        item.style.display = "";
      } else {
        item.style.display = "none";
      }
    });
  });
}

liveFilter("search", "list");
