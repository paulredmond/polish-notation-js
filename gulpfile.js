var gulp = require('gulp'),
    mocha = require('gulp-mocha');

gulp.task('test', function () {
    return gulp.src('tests/**/*.js', { read: false })
        .pipe(mocha())
});

gulp.task('default', ['test']);
