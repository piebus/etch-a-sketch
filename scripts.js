const container = document.querySelector(".container");
const clearGridButton = document.querySelector(".clear-grid");

clearGridButton.addEventListener("click", () => resetSquares());

function calculatePixelWidth(numberOfSquares) {
    const CANVAS_DIMENSION = 960;
    const width = CANVAS_DIMENSION/numberOfSquares;
    return width;
}

function changeColour(square) {
    square.classList.remove("default-square-color");
    square.style.backgroundColor = "black";
}

function removeSquares() {
    const rows = document.querySelectorAll(".row");
    rows.forEach(row => {
        row.remove();
    });
}

// set the square colour to the default
function resetSquares() {
    const squares = document.querySelectorAll(".square");
    squares.forEach(square => {
        square.style.backgroundColor = "lightgrey";
    });
}

function setSquareSize(width) {
    const squares = document.querySelectorAll(".square");
    squares.forEach(square => {
        square.style.width = `${width}px`;
        square.style.height = `${width}px`;
    });
}

function makeGrid(numberOfSquares) {
    const squareWidth = calculatePixelWidth(numberOfSquares);
    removeSquares();
    makeGridSquares(numberOfSquares);
    setSquareSize(squareWidth);
    resetSquares();
}

// generate the grid of squares by making rows
function makeGridSquares(width) {
    for(var i = 0; i < width; i++) {
        const rowOfSqaures = document.createElement("div");
        rowOfSqaures.className = "row";
        for (var j = 0; j < width; j++) {
            const square = document.createElement("div");
            square.classList.add("square");
            square.addEventListener("mouseover", () => changeColour(square));
            rowOfSqaures.appendChild(square);
        }
        container.appendChild(rowOfSqaures);
    }
}

makeGrid(10);
resetSquares();