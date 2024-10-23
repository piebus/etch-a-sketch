const container = document.querySelector(".container");

function generateGrid(width) {
    for(var i = 0; i < width; i++) {
        const rowOfSqaures = document.createElement("div");
        rowOfSqaures.className = "row";
        for (var j = 0; j < width; j++) {
            const square = document.createElement("div");
            square.className = "square";
            rowOfSqaures.appendChild(square);
        }
        container.appendChild(rowOfSqaures);
    }
}

generateGrid(16);