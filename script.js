
const myButton = document.getElementById("myButton");
const outputArea = document.getElementById("outputArea");


function handleClick() {
  outputArea.textContent = "Button clicked!";
  console.log("Button clicked!");
}


myButton.addEventListener("click", handleClick);
