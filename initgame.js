const matrix = new Array(rowSize).fill(0).map(() => new Array(colSize).fill(0));

let headCell = {
	cell: [0,2],
	next: null,
}

let middleCell = {
	cell: [0,1],
	next: headCell
}

let tailCell = {
	cell: [0,0],
	next: middleCell
}

function markBlackInternal(head) {
	const cell = document.getElementById(zeroPad(head[0])+zeroPad(head[1]));
	const img = document.createElement('img');
	img.src="22.png";
	img.width="40";
	img.height="40";
	cell.innerHTML = '';
	cell.appendChild(img);
}

markBlackInternal([0,0]);
markBlackInternal([0,1]);
markBlackInternal([0,2]);

const dirArr = [2];
let dirIndex = 0;

const availableCells = new Set();
for(let j=0;j<rowSize;j++) {
	for(let i=0;i<colSize;i++) {
		availableCells.add(j*colSize + i);
	}
}
availableCells.delete(0);
availableCells.delete(1);
availableCells.delete(2);

let eatCell = [0,0];
publishRandomCell();

function publishRandomCell() {
	const rnd = generateRandomCell();
	if(rnd == -1) {
		return -1;
	}
	const cell = document.getElementById(zeroPad(rnd[0])+zeroPad(rnd[1]));
	cell.classList.add("eatCell");
	eatCell = rnd;
}

function generateRandomCell() {
	const size = availableCells.size;
	if(size == 0) {
		playWinAudio();
		alert("You have won!!");
		return -1;
	}
	const rnd = Math.floor(Math.random()*size);
	const rndCell = Array.from(availableCells)[rnd];
	return [Math.floor(rndCell/colSize), rndCell%colSize];
}