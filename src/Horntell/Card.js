'use strict';

var Request = require('./Http/Request');

function Card(horntell) {
	this._request = Request(horntell);
}

Card.prototype = {

	DEFAULTS: {
		CANVAS: 'default'
	},

	/**
	 * Creates card for single profile
	 *
	 * @param  string uid
	 * @param  object card
	 * @param  function callback
	 */

	toProfile: function(uid, card, callback) {

		if(card.canvas === undefined) card.canvas = this.DEFAULTS.CANVAS;
		
		return this._request.send('POST', '/profiles/' + uid + '/cards', card, callback);
	},

	/**
	 * Creates card for multiple profiles
	 *
	 * @param  array profiles
	 * @param  object card
	 * @param  function callback
	 */

	toProfiles: function(profiles, card, callback) {
		
		card.profile_uids = profiles;

		if(card.canvas === undefined) card.canvas = this.DEFAULTS.CANVAS;

		return this._request.send('POST', '/profiles/cards', card, callback);
	},

	/**
	 * Creates card for single channel
	 *
	 * @param  string uid
	 * @param  object card
	 * @param  function callback
	 */

	toChannel: function(uid, card, callback) {

		if(card.canvas === undefined) card.canvas = this.DEFAULTS.CANVAS;
		
		return this._request.send('POST', '/channels/' + uid + '/cards', card, callback);
	},

	/**
	 * Creates card for multiple channels
	 *
	 * @param  array channels
	 * @param  object card
	 * @param  function callback
	 */

	toChannels: function(channels, card, callback) {
		
		card.channel_uids = channels;

		if(card.canvas === undefined) card.canvas = this.DEFAULTS.CANVAS;

		return this._request.send('POST', '/channels/cards', card, callback);
	}
}

module.exports = Card;
