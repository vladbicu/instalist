// player
var ytPlayer;
var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

const getSDK = () => {
	
	return new Promise((resolve) => {
		const onPlayerReady = (event) => {
				console.log('Player SDK');
				resolve();
		}
		window.onYouTubeIframeAPIReady = () => {
			ytPlayer = new YT.Player('ytplayer', {
				height: '390',
				width: '640',
				videoId: '2XXd_KPShjE',
				events: {
				'onReady': onPlayerReady,
				'onError': onPlayerError,
				'onStateChange': onPlayerStateChange
				}
			});
		};
	});
};




const onPlayerError = (event) => {
	console.log('event:', event);
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

export {
	play,
	pause,
	load,
	getSDK,
	ytPlayer
};