import 'babel-polyfill';

import * as player from './player.js';
// import * as auth from './auth';
player.getSDK()
	.then(() => {
		player.play();
	});

// window.addEventListener('DOMContentLoaded', () => {
// 	// auth.googleApiClientReady();
// 	const searchBtn = document.getElementById('searchButton');
// 	const inputSeach = document.getElementById('searchVideo');
// 	searchBtn.addEventListener('click', auth.search());
// 	inputSeach.addEventListener('keyup', (e) => {
// 		if (e.keyCode === 13) {
// 			auth.search();
// 		}
// 	});
// });


// player interface Rudolf

/*

player.load(songId)
	.then(player.play)
	.then();
player.play()
	.then( // update ui // );
player.pause()
	.then( // update ui // );

*/

// sdk interface


// youTube.search(searchQuery).then(/* display list / update ui */);


// playlist interface

// list.next().then( update ui );
// list.previous().then( update ui );
// list.update( newListData ).then( update ui );

// ui stuff

/*

UI > list > player > UI
   > player > UI
   > net > UI

*/

// netRequest('list/get', {}, {'method':'get'})

const dummy = [{
	id: 1,
	title: 'colind',
	artist: 'Hrusca',
	img: 'imgurl'
}, {
	id: 2,
	title: 'manea',
	artist: 'Guta',
	img: 'imgurl'
}, {
	id: 3,
	title: 'yo yo',
	artist: 'XXL',
	img: 'imgurl'
}];


import * as list from './list';

list.update(dummy);

import * as net from './API/net';

net.add('dummyId').then((g) => {
	console.log('added', g);

	net.get().then((a) => {
		console.log('gotted', a);

		net.drop('dummyId').then((b) => {
			console.log('dropped', b);
		});
	});
});

