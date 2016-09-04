var backender = require('backender.js').init();

gulp.task('test', ["server"], function () {
    backender.  runTests();
});
gulp.task('server', function () {
    backender.  runServer();
});

gulp.task('default', ["server"]);