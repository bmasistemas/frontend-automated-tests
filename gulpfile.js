var gulp   = require('gulp'),
    jshint = require('gulp-jshint'),
    Server = require('karma').Server;

// create a default task
gulp.task('default', ['watch','jshint', 'tests']);

// configure the jshint task
gulp.task('jshint', function() {
  return gulp.src(['source/javascript/controllers/*.js','source/javascript/tests/*.js'])
  .pipe(jshint())
  .pipe(jshint.reporter('jshint-stylish'));
});

// configure karma to run tests
gulp.task('tests', function (done) {
  new Server({
    configFile: __dirname + '/karma.conf.js',
    singleRun: true
  }, done).start();
});

// configure which files to watch and what tasks to use on file changes
gulp.task('watch', function() {
  gulp.watch('source/javascript/**/*.js', ['jshint', 'tests']);
});
