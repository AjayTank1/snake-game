const timer = setInterval(moveSnake, 300);

let lastDir = 2;
function moveSnake() {
	let trueIndex;
	if(dirIndex >= dirArr.length){
		trueIndex = dirArr.length - 1;
	} else {
		trueIndex = dirIndex;
		dirIndex++;
	}
	const currDir = dirArr[trueIndex];
	const next = getNextCell(headCell.cell, currDir, colSize, rowSize);
	if(next[0] == eatCell[0] && next[1] == eatCell[1]) {
		startEatingCell();
		addHead(next,lastDir,currDir);
		const rndCell = publishRandomCell();
		if(rndCell == -1) {
			clearInterval(timer);
			return;
		}
	} else {
		const cell = document.getElementById(zeroPad(next[0])+zeroPad(next[1]));
		removeTail();
		if(cell.innerHTML != '') {
			playLostAudio();
			alert("You lost!!");
			clearInterval(timer);
			return;
		}
		addHead(next,lastDir,currDir);
	}
	lastDir = currDir;
}

function addHead(head,lastDir,currDir) {
	newHead = {
		cell: head,
		next: null,
	}
	headCell.next = newHead;
	const prevHead = headCell.cell;
	headCell = newHead;
	markBlack(head, prevHead,lastDir,currDir);
	removeFromAvailableCell(head);
}

function removeTail() {
	const nextTail = tailCell.next;
	tailCell.next = null;
	unmarkBlack(tailCell.cell);
	addInAvailableCell(tailCell.cell);
	tailCell = nextTail;
}

function addInAvailableCell(cell) {
	availableCells.add(cell[0]*colSize + cell[1]);
}

function removeFromAvailableCell(cell) {
	availableCells.delete(cell[0]*colSize + cell[1]);
}

function startEatingCell() {
	playEatAudio();
	const cell = document.getElementById(zeroPad(eatCell[0])+zeroPad(eatCell[1]));
	cell.classList.remove("eatCell");
}



function navigationHandler(newDir){
	const diff = Math.abs(dirArr[dirArr.length -1]-newDir);
	if(diff == 2 || diff == 0) {
		return;
	}
	dirArr.push(newDir);
}
