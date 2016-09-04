var gulp = require('gulp');
var backender_ = require('backender');
console.log(backender_);
backender=backender_.init();

gulp.task('test', function () {
    backender.  runTests();
});
gulp.task('server', function () {
    backender.  runServer();
});

gulp.task('default', ["server"]);