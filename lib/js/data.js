const songs = {};

const addSong = (songData) => {
	songs[songData.id] = songData;
};

export {
	addSong,
	songs
};
