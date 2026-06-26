'use strict';

var test = require('tape');
var semver = require('semver');

var hasResizableArrayBuffers = require('../');

test('hasResizableArrayBuffers', function (t) {
	var actual = hasResizableArrayBuffers();

	t.equal(typeof actual, 'boolean', 'returns a boolean');

	t.test('node version expectations', { skip: typeof process === 'undefined' || !(process.versions && process.versions.node) }, function (st) {
		var expected = semver.satisfies(process.version, '>= 20');
		st.equal(
			actual,
			expected,
			'node ' + (expected ? '>=' : '<') + ' 20 ' + (expected ? 'supports' : 'does not support') + ' resizable `ArrayBuffer`s'
		);

		st.end();
	});

	t.equal(
		typeof ArrayBuffer !== 'undefined' && 'resizable' in ArrayBuffer.prototype,
		actual,
		'ArrayBuffer.prototype.resizable is' + (actual ? '' : ' not') + ' present'
	);

	t.end();
});
