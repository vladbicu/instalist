const api = '//192.168.2.134:5454/api/';


const createFormData = (params) => {
	const formData = new FormData();
	for (var k in params) {
		if (params.hasOwnProperty(k)) {
			formData.append(k, params[k]);
		}
	}

	return formData;
};

const request = (url, params) => {
	return new Promise((resolve, reject) => {
		fetch(api + url, {
			method: 'POST',
			body: createFormData(params)
		}).then((resp) => {
			resp.json().then(resolve);
		}, reject);
	});
};


const userId = 'gigi';

const get = () => request('list/get', {userId});
const add = (id) => request('list/add', {userId, id});
const drop = (id) => request('list/drop', {userId, id});

export {
	add,
	drop,
	get
};
