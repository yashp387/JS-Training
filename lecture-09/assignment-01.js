const btnSave = document.querySelector("#save-btn");
const btnLoad = document.querySelector("#load-btn");
const inputField = document.querySelector(".field");
const saveName = document.getElementById("text1");
const loadName = document.getElementById("text2");


btnSave.addEventListener("click", () => {
    const inputValue = inputField.value;
    // console.log(inputValue);
    localStorage.setItem("name", inputValue);
    sessionStorage.setItem("name", inputValue);
    saveName.textContent = "Saved: " + inputField.value;
});

btnLoad.addEventListener("click", () => {
    const localValue = localStorage.getItem("name");
    const sessionValue = sessionStorage.getItem("name");
    // console.log(inputValue);
    saveName.textContent = "From LocalStorage: " + localValue;
    loadName.textContent = "From SessionStorage: " + sessionValue;
});
