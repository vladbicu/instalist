import * as player from './player';

let songs = [];

const currentSong = {
	'id': '',
	'index': ''
};

const next = () => {
	if (currentSong.index < songs.length - 1) {
		currentSong.index += 1;
		currentSong.id = songs[currentSong.index];
	} else {
		currentSong.index = 0;
		currentSong.id = songs[0];
	}
	player.load(currentSong.id);
};

const previous = () => {
	if (currentSong.index > 0) {
		currentSong.index -= 1;
	} else {
		currentSong.index = songs.length - 1;
	}
	currentSong.id = songs[currentSong.index];
	player.load(currentSong.id);
};

const loadSong = (id) => {
	if (songs.indexOf(id) > -1) {
		currentSong.id = id;
		currentSong.index = songs.indexOf(id);
	}
	player.load(currentSong.id);
};

const update = (newListData) => {
	return new Promise((resolve) => {
		songs = newListData;

		const currentSongInNewList = newListData.indexOf(currentSong.id);
		if (currentSongInNewList > -1) {
			// update current song index with the index from the new array
			currentSong.index = currentSongInNewList;
			// ui.updateCurrent(id)
		}

		console.log('update playlist', songs, newListData);

		resolve();
	});
};


export {
	next,
	previous,
	update,
	loadSong,
	songs
};
