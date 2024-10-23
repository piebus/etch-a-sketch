const container = document.querySelector(".container");

function resetSquares() {
    const squares = document.querySelectorAll(".square")
    squares.forEach(square => {
        square.classList.add("default-square-color");
    });
}

function generateGrid(width) {
    for(var i = 0; i < width; i++) {
        const rowOfSqaures = document.createElement("div");
        rowOfSqaures.className = "row";
        for (var j = 0; j < width; j++) {
            const square = document.createElement("div");
            square.classList.add("square");
            rowOfSqaures.appendChild(square);
        }
        container.appendChild(rowOfSqaures);
    }
    resetSquares();
}

generateGrid(30);
resetSquares();