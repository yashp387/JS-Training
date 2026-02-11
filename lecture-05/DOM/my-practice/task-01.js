/* Problem : Write a function changeText that selects an HTML element by its ID and updates its text content to a specific value. */

function changeText (elementId, newText) {
    const element = document.getElementById(elementId);
    element.textContent = newText;
}
changeText("message", "New");
changeText("header", "Welcome");
changeText("status", "Online");