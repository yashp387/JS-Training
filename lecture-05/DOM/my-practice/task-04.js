/* Problem :- Implement setupDeleteButtons. You have a container (ID: container) with several buttons inside it. Instead of adding a listener to every button, add one listener to the container (Event Delegation). When a user clicks a specific button with the class delete-btn, remove that button's parent element from the DOM. */

function setupDeleteButtons(containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;
  container.addEventListener("click", (e) => {
    if (e.target.classList.contains("delete-btn")) {
      e.target.parentElement.remove();
    }
  });
}

setupDeleteButtons("container");