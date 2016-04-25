var qs = require('querystring');

function Event() {
	if ( ! (this instanceof Event)) {
		return new Event();
	}
}

Event.prototype = {

	fromWebhook: function(request, callback) {
		if(request.method === 'POST') {
			var body = '';
			request.on('data', function(chunk) {
				body += chunk;
			});

			request.on('end', function() {
				var data = qs.parse(body);
				callback.call(this, JSON.parse(data['horntell_event']));
			});

		}		
	}
}

module.exports = Event;
