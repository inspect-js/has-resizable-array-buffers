'use strict';

var GetIntrinsic = require('get-intrinsic');

/** @type {ArrayBufferConstructor | undefined} */
var $ArrayBuffer = GetIntrinsic('%ArrayBuffer%', true);

/** @type {import('.')} */
module.exports = typeof $ArrayBuffer === 'undefined'
	? function hasResizableArrayBuffers() {
		return false;
	}
	: function hasResizableArrayBuffers() {
		try {
			// eslint-disable-next-line no-new
			new /** @type {NonNullable<typeof $ArrayBuffer>} */ ($ArrayBuffer)(
				8,
				{ maxByteLength: 1 }
			);
			return false;
		} catch (e) {
			return true;
		}
	};
