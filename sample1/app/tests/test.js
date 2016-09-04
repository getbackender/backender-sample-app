var test = {};
var xtest = {};
test['it should get products'] = function (test) {
	test['get GetProducts']("http://localhost:8890/api/all/GetProducts1");
};
var builder = require('backender-testbuilder');
console.log(builder);
var steps = builder.steps('./app/steps');
console.log(steps);
module.exports = steps(test);
