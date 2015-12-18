/* eslint-disable camelcase */

// The client ID is obtained from the Google Developers Console
// at https://console.developers.google.com/.
// If you run this code from a server other than http://localhost,
// you need to register your own client ID.
const OAUTH2_CLIENT_ID = '1264342165-utlnratrqsu0930dfa4gkh8c7fvmvuud.apps.googleusercontent.com';
const OAUTH2_SCOPES = [
	'https://www.googleapis.com/auth/youtube'
];

export const search = gapi.client.youtube.search.list({
	q: document.querySelector('.search').value,
	part: 'snippet'
});

// Handle the result of a gapi.auth.authorize() call.
const handleAuthResult = (authResult) => {
	if (authResult && !authResult.error) {
		// Authorization was successful. Hide authorization prompts and show
		// content that should be visible after authorization succeeds.
		console.log();
	} else {
		// Make the #login-link clickable. Attempt a non-immediate OAuth 2.0
		// client flow. The current function is called when that flow completes.
		gapi.auth.authorize({
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
const checkAuth = () => {
	gapi.auth.authorize({
		client_id: OAUTH2_CLIENT_ID,
		scope: OAUTH2_SCOPES,
		immediate: true
	}, handleAuthResult);
};

// Upon loading, the Google APIs JS client automatically invokes this callback.
export const googleApiClientReady = () => {
	gapi.auth.init(() => {
		window.setTimeout(checkAuth, 1);
	});
};
