var React = require('react');
var Key = require('./key');
var ToneConstants = require('../constants/tones');
var Recorder = require('./recorder');

var Organ = React.createClass({

	render: function () {
		var keys = Object.keys(ToneConstants).map(function (key) {
			return (
				<Key key={key} noteName={key} />
			);
		});

		return (
			<div>
				{keys}
				<Recorder />
			</div>
		);
	}
});

module.exports = Organ;
