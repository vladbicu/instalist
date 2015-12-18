const _ = require('lodash');

export const domMaker = (props, parentNode) => {
	const args = {
		type: props.type || null,
		attributes: props.attributes || {},
		events: props.events || {}
	};

	if (props.content) {
		if (_.isArray(props.content)) {
			args.content = props.content;
		} else {
			args.content = [props.content];
		}
	} else {
		args.content = [];
	}

	const domElem = document.createElement(args.type);

	_.each(args.attributes, (v, k) => {
		domElem.setAttribute(k, v);
	});

	_.each(args.events, (v, e) => {
		domElem.addEventListener(e, v);
	});

	const container = document.createDocumentFragment();
	for (let i = 0, n = args.content.length; i < n; i += 1) {
		if (args.content[i]) {
			let child = null;
			if (['string', 'number'].indexOf(typeof args.content[i]) > -1) {
				child = document.createTextNode(args.content[i]);
			} else {
				child = args.content[i];
			}
			container.appendChild(child);
		}
	}
	domElem.appendChild(container);

	if (parentNode) {
		parentNode.appendChild(domElem);
	}

	return domElem;
};
