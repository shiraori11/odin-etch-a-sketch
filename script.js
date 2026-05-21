const sketchCanvasContainer = document.querySelector(".etch-a-sketch-container")

const generateCanvasRow = function(canvasSize) {
  const rowContainer = document.createElement("div");
  rowContainer.classList.add("row-canvas");
  for (let r = 0; r < canvasSize; r++) {
    const canvasBox = document.createElement("div");
    canvasBox.addEventListener("click", changeColorOnHover);
    canvasBox.classList.add("canvas");
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
  event.target.style.backgroundColor = "black";
}

const sketchCanvas = generateCanvasColumn(16);
console.log(sketchCanvas);
sketchCanvasContainer.appendChild(sketchCanvas);
