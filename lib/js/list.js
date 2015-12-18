const next = () => {
	// increment index if possible

	player.load(currentSong.id);
};

const previous = () => {
	// decrement index if possible

	player.load(currentSong.id);
};

const loadSong = (songId) => {
	// update current index
	player.load(currentSong.id);
};

const update = (newListData) => {
	// replace current list
	// better compare current list to new one and update index as well
};