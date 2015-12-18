

const play = () => {
	player.play();
};

const pause = () => {
	player.pause();
};

const next = () => {
	list.next();
};

const previous = () => {
	list.previous();
};

const loadSong = (songId) => {
	list.loadSong(songId);
};

const drawList = (listData) => {
	listData.forEach((listItem) => {
		// listItem.id
		createNewListElement(listItem).then(add to list element);
	});
}