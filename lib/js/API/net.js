const createFormData = (params) => {
  var formData = new FormData();
	for (var k in params) {
		if (params.hasOwnProperty(k)) {
			formData.append(k, params[k]);
		}
	}

  return formData;
}

const get = (params, options, callback) => {
  const api = '//localhost:5454/api/';
  let url = api + 'list/get';
  return new Promise((resolve, reject) => {
    let formData = createFormData(params);

    options.method = "GET";
    options.body = formData;


    fetch(url, options).then(function(response){
      response.json().then(function(data){
        resolve(data);
      });
    }).catch(function(err) {
    	reject(err);
    });
  });
}

const post = (params, options, callback) => {
  const api = '//localhost:5454/api/';
  let url = api + 'list/add';
  return new Promise((resolve, reject) => {
      let formData = createFormData(params);

      options.method = "POST";
      options.body = formData;


      fetch(url, options).then(function(response){
        response.json().then(function(data){
          callback(data);
        }).catch(function(err) {
        	reject(err);
        });
      });
    });
}

const delete = (params, options, callback) => {
  const api = '//localhost:5454/api/';
  let url = api + 'list/drop';
  return new Promise((resolve, reject) => {

    let formData = createFormData(params);

    options.method = "DELETE";
    options.body = formData;

    fetch(url, options).then(function(response){
      response.json().then(function(data){
        callback(data);
      }).catch(function(err) {
      	reject(err);
      });
    });
  });
}

export {
  get,
  post,
  remove
}
/*
	var xhr = new XMLHttpRequest();

	xhr.open(options.method || 'POST', url, true);
	xhr.withCredentials = true;
	// xhr.send(JSON.stringify(params));


	var formData = new FormData();
	for (var k in params) {
		if (params.hasOwnProperty(k)) {
			formData.append(k, params[k]);
		}
	}

	xhr.send(formData);

	// cyn.Utils.objectForEach(params, function(_val, _var) {
	// 	if (_val instanceof Blob || _val instanceof File) {
	// 		formData.append(_var, _val, _var);
	// 	} else if (_val instanceof Array) {
	// 		_val.forEach(function(_arrayVal, _arrayVar) {
	// 			formData.append(_var + '[' + _arrayVar + ']', _arrayVal);
	// 		});
	// 	} else {
	// 		formData.append(_var, _val);
	// 	}
	// });

	xhr.addEventListener('load', function(e) {
		if (e.target.status !== 404) {
			try {
				var resp = JSON.parse(e.target.response);
			} catch(e) {
				var resp = e.target.response;
			}

			console.log('%c' + endpoint + ': %csuccess ' + e.target.status, 'color: blue', 'color: green', '|', resp);
			callback(null, resp);
		} else {
			console.log('%c' + endpoint + ': %cfail 404', 'color: blue', 'color: red');
			callback('404');
		}
	}, false);

	xhr.addEventListener('error', function(err) {
		callback(err);
	}, false);

	xhr.addEventListener('timeout', function(err) {
		callback(err);
	}, false);

	xhr.addEventListener('abort', function(err) {
		callback(err);
	}, false);
};

module.exports = netRequest;
*/
