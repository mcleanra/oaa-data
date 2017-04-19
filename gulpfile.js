'use strict';

var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');

gulp.task('pack-js', function () {	
	return gulp.src(['src/**/*.js'])
		.pipe(concat('oaa-data.js'))
		.pipe(gulp.dest('dist'))
		.pipe(uglify())
		.pipe(concat('oaa-data.min.js'))
		.pipe(gulp.dest('dist'));
});

gulp.task('default', function () {
  gulp.start('pack-js');
});
