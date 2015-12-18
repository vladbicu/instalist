// player

const play = () => {
	return new new Promise((resolve) => {
		ytPlayer.playVideo(); 
	});
}; // return promise

const pause = () => {
	return new new Promise((resolve) => {
		ytPlayer.pauseVideo();
	});
}; // return promise

const load = (songId) => {
	return new new Promise((resolve) => {
		ytPlayer.loadVideoById(songId);
	});
}; // return promise