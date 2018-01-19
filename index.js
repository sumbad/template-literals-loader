/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Den Sumbaev @sumbad
*/
var compile = require("es6-templates").compile;
var loaderUtils = require('loader-utils');


module.exports = function(template) {
  var content = compile('tag`' + template + '`').code;
  return `module.exports = require(${loaderUtils.stringifyRequest(this, require.resolve("./loader"))})(${JSON.stringify(content.toString())});`
};