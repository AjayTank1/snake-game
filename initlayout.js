const rowSize = 8;
const colSize = 5;

const board = document.getElementById('board');

for(let j=0;j<rowSize;j++) {
	let row = document.createElement('div');
	row.id = zeroPad(j);
	row.classList.add("row");
	for(let i=0;i<colSize;i++) {
		let cell = document.createElement('div');
		cell.id = zeroPad(j)+zeroPad(i);
		cell.classList.add("cell");
		row.appendChild(cell);
	}
	board.appendChild(row);
}