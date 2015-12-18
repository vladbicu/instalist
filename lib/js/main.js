function search(){
	var request = gapi.client.youtube.search.list({
		q: document.querySelector('.search').value,
		part: 'snippet'
	});

	request.execute(function(response) {
		var str = response.result;
		for(r in str)
			console.log(r, str[r]);
	});
}


window.addEventListener('DOMContentLoaded', function(){
	var searchBtn = document.getElementById('searchButton');
	var inputSeach = document.getElementById('searchVideo');
	searchBtn.addEventListener('click', search);
	inputSeach.addEventListener('keyup', function(e){
		if (e.keyCode === 13) {
			search();
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
