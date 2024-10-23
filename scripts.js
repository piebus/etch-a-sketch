const container = document.querySelector(".container");
const clearGridButton = document.querySelector(".clear-grid");
const newGridButton = document.querySelector(".new-grid");

clearGridButton.addEventListener("click", () => resetSquares());
newGridButton.addEventListener("click", () => makeUserDefinedGrid());

// sets the number of squares to 100 if the user enters bad input
function getGridWidthFromUser() {
    var declaredWidth = prompt("Enter grid width, max of 100");
    if (Number.isNaN(Number(declaredWidth))) {declaredWidth = "100";}
    const width = Number(declaredWidth);
    if (width < 1 || width > 100) {return 100;}
    return width;
}

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

function makeUserDefinedGrid() {
    const numberOfSquares = getGridWidthFromUser();
    makeGrid(numberOfSquares);
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

makeGrid(20);
