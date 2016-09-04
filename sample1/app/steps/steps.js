/*
var stepDefSample = function (test) {
var step = {};
step['sample'] = function (o) {
var step = {};
test.wait(500);
test.setValue('#input', '123');
test.click('#button');
test.assert.visible('.button');
test.assert.notVisible('.button');
test.waitForElement('.button');
test.assert.doesntExist('.button');
test.assert.exists('.button');
test.sendKeys('.input');
test.toFrame('.myframe');
test.toParent();
test.execute(function () {
window.scrollTo(0, document.body.scrollHeight);
});
};
return step;
};
*/
var stepDef = function (test) {
	var step = {};
	step['get GetProducts'] = function (o) {
		test.open(o);
	};
	return step;
};
module.exports = stepDef;