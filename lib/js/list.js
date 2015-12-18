import * as player from './player';

let songsArray = [];

const currentSong = {
	'id': '',
	'index': ''
};

const next = () => {
	if (currentSong.index < songsArray.length - 1) {
		currentSong.index += 1;
		currentSong.id = songsArray[currentSong.index];
	} else {
		currentSong.index = 0;
		currentSong.id = songsArray[0];
	}
	player.load(currentSong.id);
};

const previous = () => {
	if (currentSong.index < songsArray.length - 1) {
		currentSong.index -= 1;
	} else {
		currentSong.index = songsArray.length - 1;
	}
	currentSong.id = songsArray[currentSong.index];
	player.load(currentSong.id);
};

const loadSong = (id) => {
	if (songsArray.indexOf(id) > -1) {
		currentSong.id = id;
		currentSong.index = songsArray.indexOf(id);
	}
};

const update = (newListData) => {

	const tempSongsArray = [];
	for (let i = 0; i < newListData.length; i += 1) {
		tempSongsArray.push(newListData[i].id);
	}

	songsArray = tempSongsArray;

	const currentSongInNewList = tempSongsArray.indexOf(currentSong.id);
	if (currentSongInNewList > -1) {
		// update current song index with the index from the new array
		currentSong.index = currentSongInNewList;
		// ui.updateCurrent(id)
	}
};


export {
	next,
	previous,
	update,
	loadSong
};
