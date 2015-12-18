import 'babel-polyfill';

import * as auth from './auth';

window.addEventListener('DOMContentLoaded', () => {
	auth.googleApiClientReady();
	const searchBtn = document.getElementById('searchButton');
	const inputSeach = document.getElementById('searchVideo');
	searchBtn.addEventListener('click', auth.search());
	inputSeach.addEventListener('keyup', (e) => {
		if (e.keyCode === 13) {
			auth.search();
		}
	});
});



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