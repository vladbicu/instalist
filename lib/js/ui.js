import {domMaker} from './utils';

import * as list from './list';
import * as data from './data';

// const play = () => {
// 	player.play();
// };
//
// const pause = () => {
// 	player.pause();
// };
//
// const next = () => {
// 	list.next();
// };
//
// const previous = () => {
// 	list.previous();
// };
//
// const loadSong = (songId) => {
// 	list.loadSong(songId);
// };
/*
'playControl': dom({
		'type': 'div',
		'attributes': {
			'class': 'control control--play'
		},
		'events': {
			'click': () => controls.play('play/pause button')
		}
	}),
*/

const createNewListElement = (item) => {
	console.log(item);
	return new Promise((res) => {
		const playBtn = domMaker({
			'type': 'div',
			'attributes': {
				'class': 'item__play'
			},
			'events': {
				// 'click': () => player.play('ceva')
			}
		});

		const videoTitle = domMaker({
			'type': 'div',
			'attributes': {
				'class': 'item__title'
			},
			'content': item.cineva.nume
		});

		const addBtn = domMaker({
			'type': 'div',
			'attributes': {
				'class': 'item__add'
			},
			'events': {
				// 'click': () => player.play('ceva')
			}
		});

		const domItem = domMaker({
			'type': 'div',
			'attributes': {
				'class': 'item'
			},
			'content': [
				playBtn,
				videoTitle,
				addBtn
			],
			'events': {
				'dblclick': () => {
					console.log('dblclick');
				}
			}
		});

		res(domItem);
	});
};

const drawList = (listData) => {
	const itemsList = document.getElementById('itemsList');
	console.log(itemsList);
	listData.forEach((listItem) => {
		// listItem.id
		console.log(listItem);
		createNewListElement(listItem).then((val) => {
			itemsList.appendChild(val);
		});
	});
};

let listData = [];
const update = () => {
	listData = [];
	list.songs.forEach((songId) => {
		listData.push(data[songId]);
	});

	drawList(listData);
};

export {update,
	drawList};
