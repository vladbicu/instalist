import 'babel-polyfill';
import * as list from './list';
import * as net from './API/net';
import * as ui from './ui';
import * as youTube from './yt';

net.get().then((a) => {
	console.log('gotted', a);
	list.update(a.list);

	a.list.forEach((songId) => youTube.getData(songId).then(() => {
		// update data
		ui.update();
	}));
});
