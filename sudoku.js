let button = document.querySelector("button");
let cells = document.querySelectorAll("input");
let num = [];

cells.addEventListener("onkeypress", () => {
  alert(1);
});

button.addEventListener("click", () => {
  for (let i = 0; i < cells.length; i += 1) {
    console.log(cells[i].value);
  }
});