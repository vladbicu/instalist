/* eslint-disable camelcase */

// The client ID is obtained from the Google Developers Console
// at https://console.developers.google.com/.
// If you run this code from a server other than http://localhost,
// you need to register your own client ID.
const OAUTH2_CLIENT_ID = '1264342165-utlnratrqsu0930dfa4gkh8c7fvmvuud.apps.googleusercontent.com';
const OAUTH2_SCOPES = [
	'https://www.googleapis.com/auth/youtube'
];
const API_KEY = 'AIzaSyCrZsKKPjHQX0pDQgO6aJGRp1FlZn0Yp-s';

const searchBtn = document.getElementById('searchButton');
const inputSearch = document.getElementById('searchVideo');

export const search = () => {
	if (window.gapi) {
		window.gapi.client.youtube.search.list({
			q: document.querySelector('.search').value,
			part: 'snippet'
		});
	}
};

// Handle the result of a gapi.auth.authorize() call.
const handleAuthResult = (authResult) => {
	console.log(authResult);
	if (authResult && !authResult.error) {
		// Authorization was successful. Hide authorization prompts and show
		// content that should be visible after authorization succeeds.
		console.log(authResult);
	} else {
		console.log('unauthorized');
		// Make the #login-link clickable. Attempt a non-immediate OAuth 2.0
		// client flow. The current function is called when that flow completes.
		window.gapi.auth.authorize({
			client_id: OAUTH2_CLIENT_ID,
			scope: OAUTH2_SCOPES,
			immediate: false
		}, handleAuthResult);
	}
};

// Attempt the immediate OAuth 2.0 client flow as soon as the page loads.
// If the currently logged-in Google Account has previously authorized
// the client specified as the OAUTH2_CLIENT_ID, then the authorization
// succeeds with no user intervention. Otherwise, it fails and the
// user interface that prompts for authorization needs to display.
// const checkAuth = () => {
// 	window.gapi.auth.authorize({
// 		client_id: OAUTH2_CLIENT_ID,
// 		scope: OAUTH2_SCOPES,
// 		immediate: true
// 	}, handleAuthResult);
// };
const makeReq = () => {
	return new Promise((resolve, reject) => {
		window.gapi.client.youtube.search.list({
			part: 'snippet',
			maxResults: 10,
			type: 'video',
			q: inputSearch.value
		})
		.then((res) => {
			if (res) {
				console.log(res);
			} else {
				reject('rejected');
			}
		}, reject);

	});

	// window.gapi.youtube.search.list({
	// 	part: 'snippet',
	// 	maxResults: 10,
	// 	type: 'video',
	// 	q: inputSearch.value
	// }).then((response) => {
	// 	console.log(response);
	// });
};


window.googleApiClientReady = () => {

	if (window.gapi) {
		window.gapi.client.setApiKey(API_KEY);
		// window.setTimeout(checkAuth, 1);
		window.gapi.client.load('youtube', 'v3')
		.then(() => {
			console.log('ytapi', window.gapi.client.youtube);
			searchBtn.addEventListener('click', () => {
				makeReq();
			});
			inputSearch.addEventListener('keyup', (e) => {
				if (e.keyCode === 13) {
					makeReq();
				}
			});
		});
	}
};

// Upon loading, the Google APIs JS client automatically invokes this callback.
// export const googleApiClientReady = () => {
// 	console.log('gapi', gapi, window.gapi);
// 	if (window.gapi) {
// 		window.gapi.auth.init(() => {
// 			window.setTimeout(checkAuth, 1);
// 		});
// 	}
// };
