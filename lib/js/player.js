// player
var ytPlayer;
var tag = document.createElement('script');

console.log('test');
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

const  onYouTubeIframeAPIReady = () => {
	ytPlayer = new YT.Player('player', {
		height: '390',
		width: '640',
		videoId: 'M7lc1UVf-VE',
		events: {
		'onReady': onPlayerReady,
		'onStateChange': onPlayerStateChange
		}
	});
}


const onPlayerReady = (event) => {
	// nothing to do yet
	}

const onPlayerStateChange = (event) => {
	if (event.data == YT.PlayerState.PLAYING) {
		console.log('Playing');
	} else if (event.data == YT.PlayerState.ENDED) {
		console.log('Ended');
	} else if (event.data == YT.PlayerState.PAUSED) {
		console.log('Paused');
	}
}

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

export play;
export pause;
export load;
export ytPlayer;