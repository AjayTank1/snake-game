const zeroPad = (num) => String(num).padStart(2, '0')

function markBlack(head, prevHead, lastDir, currDir) {
	const cell = document.getElementById(zeroPad(head[0])+zeroPad(head[1]));
	const img = document.createElement('img');
	img.src="h"+currDir+".png";
	img.width="40";
	img.height="40";
	cell.innerHTML = '';
	cell.appendChild(img);

	const prevCell = document.getElementById(zeroPad(prevHead[0])+zeroPad(prevHead[1]));
	const prevImg = document.createElement('img');
	const imgName = getImageName(lastDir, currDir);
	prevImg.src=imgName;
	prevImg.width="40";
	prevImg.height="40";
	prevCell.innerHTML = '';
	prevCell.appendChild(prevImg);
}

function getImageName(lastDir, currDir) {
	return lastDir+''+currDir+'.png';
}

function unmarkBlack(head) {
	const cell = document.getElementById(zeroPad(head[0])+zeroPad(head[1]));
	cell.innerHTML = '';
}

function playEatAudio(){
	const audio = new Audio('eat.mp3');
	audio.play();
}

function playWinAudio(){
	const audio = new Audio('win.mp3');
	audio.play();
}

function playLostAudio(){
	const audio = new Audio('');
	audio.play();
}

function getNextCell(head, dir, colSize, rowSize) {
	if(dir == 0) {
		if(head[1] - 1 < 0) {
			return [head[0], colSize-1];
		}
		return [head[0], head[1] - 1];
	} else if(dir == 2) {
		if(head[1] + 1 >= colSize) {
			return [head[0], 0];
		}
		return [head[0], head[1] + 1];
	} else if(dir == 1) {
		if(head[0] - 1 < 0) {
			return [rowSize-1, head[1]];
		}
		return [head[0] -1, head[1]];
	} else if(dir == 3) {
		if(head[0] + 1 >= rowSize) {
			return [0, head[1]];
		}
		return [head[0] + 1, head[1]];
	}
}