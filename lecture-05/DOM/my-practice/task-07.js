/* Problem:- Create a function setupMirror that connects an input field to a paragraph. Whenever the user types into the input field, the paragraph's text should update in real-time to match what is typed 
*/

function setupMirror(inputId, outputId) {
    const input = document.getElementById(inputId);
    const output = document.getElementById(outputId);

    input.addEventListener("input", () => {
        output.textContent = input.value;
    })
}

setupMirror("textArea", "para");