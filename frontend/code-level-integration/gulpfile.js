const gulp = require('gulp'),
  concat = require('gulp-concat');

function defaultTask(cb) {
  return gulp
    .src('./microfrontends/**/*.js')
    .pipe(concat('code-level-integration.js'))
    .pipe(gulp.dest('./../../public'));
  cb();
}

exports.default = defaultTask;
