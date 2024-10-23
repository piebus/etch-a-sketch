const container = document.querySelector(".container");

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
        square.classList.add("default-square-color");
    });
}

// generate the grid of squares by making rows
function generateGrid(width) {
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
    resetSquares();
}

generateGrid(100);
resetSquares();