# has-resizable-array-buffers <sup>[![Version Badge][npm-version-svg]][package-url]</sup>

[![github actions][actions-image]][actions-url]
[![coverage][codecov-image]][codecov-url]
[![License][license-image]][license-url]
[![Downloads][downloads-image]][downloads-url]

[![npm badge][npm-badge-png]][package-url]

Does the current environment have support for resizable `ArrayBuffer`s?

## Example

```js
var hasResizableArrayBuffers = require('has-resizable-array-buffers');

hasResizableArrayBuffers() === true; // if the environment has native resizable `ArrayBuffer` support.
```

## Tests
Simply clone the repo, `npm install`, and run `npm test`

[package-url]: https://npmjs.org/package/has-resizable-array-buffers
[npm-version-svg]: https://versionbadg.es/inspect-js/has-resizable-array-buffers.svg
[npm-badge-png]: https://nodei.co/npm/has-resizable-array-buffers.png?downloads=true&stars=true
[license-image]: https://img.shields.io/npm/l/has-resizable-array-buffers.svg
[license-url]: LICENSE
[downloads-image]: https://img.shields.io/npm/dm/has-resizable-array-buffers.svg
[downloads-url]: https://npm-stat.com/charts.html?package=has-resizable-array-buffers
[codecov-image]: https://codecov.io/gh/inspect-js/has-resizable-array-buffers/branch/main/graphs/badge.svg
[codecov-url]: https://app.codecov.io/gh/inspect-js/has-resizable-array-buffers/
[actions-image]: https://img.shields.io/endpoint?url=https://github-actions-badge-u3jn4tfpocch.runkit.sh/inspect-js/has-resizable-array-buffers
[actions-url]: https://github.com/inspect-js/has-resizable-array-buffers/actions
