window.onload = () => {
    const container = document.getElementById("container");
    createGrid(16, 16);
    const button = document.getElementById("changeGrid");
    button.addEventListener('click', () => {
        let height = prompt("Height of the new grid (under 100): ", 16);
        let width = prompt("Width of the new grid (under 100): ", 16);
        if (height > 100 || width > 100 || height < 0 || width < 0) {
            height = 16;
            width = 16;
        }
        deleteGrid();
        createGrid(height, width);
    })
}

function createGrid(gridHeight, gridWidth) {
    for (i = 0; i < gridHeight; i++) {
        const row = document.createElement('div');
        row.classList.add('row');
        container.appendChild(row);
        for (j = 0; j < gridWidth; j++) {
            const cell = document.createElement('div');
            cell.classList.add('cell');
            row.appendChild(cell);
            cell.addEventListener("mouseover", () => {
                cell.style.backgroundColor = "violet";
            })
        }
    }
}

function deleteGrid() {
    container.innerHTML = '';
}