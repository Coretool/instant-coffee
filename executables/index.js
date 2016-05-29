#! /usr/bin/env node
'use strict';

var _process = require('process');

var process = _interopRequireWildcard(_process);

var _childProcessPromise = require('child-process-promise');

var cpp = _interopRequireWildcard(_childProcessPromise);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

// This needs to be added to the script ! (Especially "(require)") `(function(require) {})`
// import * as vm from 'vm'


process.stdin.setEncoding('utf8');

var path = process.argv[2];

// TODO Use fs instead of coreutil's cat. (for cross-platform compatibility)
cpp.exec('cat ' + path + ' | coffee -sc').then(function (result) {
  if (result.stderr) throw result.stderr;
  if (result.stdout) console.log('1' + result.stdout);return result.stdout;
}).then(function (result) {
  var tmp = result.toString();
  return '(function(require) {\n' + tmp + '\n})';
}).then(function (result) {
  console.log(result);
});