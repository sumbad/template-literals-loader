/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Den Sumbaev @sumbad
*/
var compile = require("es6-templates").compile;


module.exports = function(template) {
  var exportsString = "module.exports = ";
  var content = compile('tag`' + template + '`').code;

  var f = `function(config) {
    function normal (template, ...expressions) {
      return template.reduce((accumulator, part, i) => {
        return accumulator + expressions[i - 1] + part
      })
    }
    var config = config || {};
    var scope = config.scope || {};
    var tag = config.tag || normal;
    var keys = Object.keys(scope).join(',');
    var tagFunc = new Function('tag,'+keys, 'return ' + ${JSON.stringify(content.toString())});
	  return  config.scope ? tagFunc(tag, ...Object.values(scope)) : tagFunc.apply(this, [tag]);
  }`;
  return exportsString + f;
};
