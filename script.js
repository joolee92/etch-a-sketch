const gridEditButton = document.querySelector("button");
gridEditButton.addEventListener("click", () => {
  let numSquares = prompt("Number of squares per side (100 max)", "16");
  if (numSquares != null && numSquares <= 100 && numSquares > 0) {
    generateGrid(numSquares);
  }
});

function generateGrid(numBoxes) {
  const container = document.querySelector(".container");
  container.innerHTML = "";
  for (let i = 0; i < numBoxes; i++) {
    const colDiv = document.createElement("div");
    colDiv.classList.add("col");
    container.appendChild(colDiv);

    for (let j = 0; j < numBoxes; j++) {
      const rowDiv = document.createElement("div");
      rowDiv.classList.add("row");
      rowDiv.addEventListener("mouseenter", colorBox);
      colDiv.appendChild(rowDiv);

    }
  }
}

function random(number) {
  return Math.floor(Math.random() * (number + 1));
}

function colorBox(e) {
  const randCol = `rgb(${random(255)} ${random(255)} ${random(255)})`;
  e.target.style.backgroundColor = randCol;
  e.target.style.opacity -= '-0.1';
}

window.addEventListener("load", () => {
  generateGrid(16);
});
