var gulp = require('gulp');

var babel = require('gulp-babel');
var rename = require('gulp-rename');
var webserver = require('gulp-webserver');


gulp.task('build', function () {
    return gulp.src('./src/**/*.es6')
        .pipe(babel())
        .pipe(rename(function (path) {
        	path.extname = ".js"
    	}))
        .pipe(gulp.dest('./dist'));
});


gulp.task('webserver', function () {
	return gulp.src('./dist/')
		.pipe(webserver({
			host: '0.0.0.0',
			livereload: true,
			port: 8000,
			directoryListing: true
		}));
});


gulp.task('watch', ['build'], function() {
    gulp.watch('./src/**/*', ['build']);
});


gulp.task('default', ['build']);