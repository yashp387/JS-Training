/* Problem :- Write a function toggleVisibility that selects an element by ID. If the element is currently visible (display is not "none"), hide it. If it is hidden, show it (set display to "block") */

const btn = document.querySelector("#btn-2");

function toggleVisibility(elementId) {
  const element = document.getElementById(elementId);
  // element.style.display = element.style.display === "none" ? "block" : "none";
  
  // 2nd way to solve this problem (efficient way)
  const isHidden = window.getComputedStyle(element).display === "none";
  element.style.display = isHidden ? "block" : "none";
}

btn.addEventListener("click", () => {
  toggleVisibility("box");
});

/* 1) element.style.display only sees inline styles,
   2) getComputedStyle() sees the actual final style applied to the element.
   3) Ternary conditions must be a boolean expression, not a value. 
*/