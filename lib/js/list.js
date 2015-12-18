import * as player from './player';

let songsArray = [];

const currentSong = {
	'id': '',
	'index': ''
};

const next = () => {
	if (currentSong.index < songsArray.length - 1) {
		currentSong.index ++;
		currentSong.id = songsArray[currentSong.index];
	} else {
		currentSong.index = 0;
		currentSong.id = songsArray[0];
	}
	player.load(currentSong.id);
};

const previous = () => {
	if (currentSong.index < songsArray.length - 1) {
		currentSong.index --;
	} else {
		currentSong.index = songsArray.length - 1;
	}
	currentSong.id = songsArray[currentSong.index];
	player.load(currentSong.id);
};

const update = (newListData) => {
	// replace current list
	// better compare current list to new one and update index as well

	const tempSongsArray = [];
	for (let i = 0; i < newListData.length; i++) {
		tempSongsArray.push(newListData[i].id);
	}

	songsArray = tempSongsArray;

	const currentSongInNewList = tempSongsArray.indexOf(currentSong.id);
	if (currentSongInNewList > -1) {
		// update current song index with the index from the new array

		// ui.updateCurrent(id)
	}
};

const setCurrent = (id) => {
	const index = songsArray.indexOf(id);
	if (index > -1) {
		currentSong.id = id;
		currentSong.index = index;
	}

	player.load(currentSong.id);
};

export {
	next,
	previous,
	update,
	setCurrent
};
