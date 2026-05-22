const generateCanvasRow = function(canvasSize) {
  const rowContainer = document.createElement("div");
  rowContainer.classList.add("row-canvas");
  for (let r = 0; r < canvasSize; r++) {
    const canvasBox = document.createElement("div");
    canvasBox.classList.add("canvas");
    canvasBox.addEventListener("mouseover", changeColorOnHover);
    rowContainer.append(canvasBox);
  }
  return rowContainer;
}

const generateCanvasColumn = function(canvasSize) {
  const columnContainer = document.createElement("div");
  columnContainer.classList.add("column-canvas");
  for (let c = 0; c < canvasSize; c++) {
    const column = generateCanvasRow(canvasSize);
    columnContainer.append(column);
  }

  return columnContainer;
}

const changeColorOnHover = function(event) {

  const currentBgColor = event.target.style.backgroundColor

  const randomBgColor = generateRandomColor();

  if (currentBgColor === "") {
    event.target.style.backgroundColor = randomBgColor;
  }
  
  const addOpacity = parseFloat(event.target.style.opacity) + 0.10
  
  if (isNaN(addOpacity)) {
    event.target.style.opacity = 0.10;
  } else {
    event.target.style.opacity = addOpacity;
  }
  
  console.log(addOpacity);
}

const generateRandomColor = function() {
  let randomColor = "";

  const r = Math.floor(Math.random() * 255);
  const g = Math.floor(Math.random() * 255);
  const b = Math.floor(Math.random() * 255);

  randomColor = `rgb(${r}, ${g}, ${b})`;

  return randomColor;
}

const changeCanvasSize = function() {
  let canvasSize = prompt("Canvas Size 1 - 64");

  sketchCanvasContainer.innerHTML = "";

  resizedCanvasSize = generateCanvasColumn(canvasSize);

  sketchCanvasContainer.append(resizedCanvasSize)
}


const sketchCanvasContainer = document.querySelector(".etch-a-sketch-container");
const sketchCanvas = generateCanvasColumn(16);

sketchCanvasContainer.append(sketchCanvas);

const canvasSizeButton = document.querySelector(".canvas-button");

canvasSizeButton.addEventListener("click", changeCanvasSize);
