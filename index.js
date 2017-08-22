/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Den Sumbaev @sumbad
*/
module.exports = function(template) {
	return 'module.exports=function(scope, callbackTag){ if(callbackTag) {return callbackTag`' + template + '`} else {return `' + template + '`}};';	
};
