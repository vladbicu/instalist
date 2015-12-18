/* eslint-disable no-var */
/* eslint-disable prefer-arrow-callback */

var gulp = require('gulp');
var eslint = require('gulp-eslint');
var less = require('gulp-less');
var autoprefixer = require('gulp-autoprefixer');
var lessReporter = require('gulp-less-reporter');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');


var browserify = require('browserify');
var watchify = require('watchify');
var LessPluginCleanCSS = require('less-plugin-clean-css');
var sequence = require('run-sequence');

var cleancss = new LessPluginCleanCSS({'advanced': true});

var handleCompileError = function compileError(err) {
	console.log('\n\tComplile failed due to browserify error:\n\t' + err.message + '\n');
	/* eslint-disable no-invalid-this */
	this.emit('end');
	/* eslint-enable no-invalid-this */
};

var watchBundlerTask = function watchBundlerTask(filep, filen) {
	// Enable source maps that allow you to debug your files separately.
	var args = Object.assign({}, {
		entries: [filep],
		cache: {},
		packageCache: {},
		plugin: [watchify],
		debug: true
	});

	var watchBundler = browserify(args);

	return watchBundler
			.bundle()
			.on('error', handleCompileError)
			.pipe(source(filen))
			.pipe(buffer())
			.pipe(gulp.dest('./bin/js'));
};


gulp.task('less', function compileLess() {
	return gulp.src('./lib/css/style.less')
		.pipe(less({'plugins': [cleancss]}).on('error', lessReporter))
		.pipe(autoprefixer())
		.pipe(gulp.dest('bin/css/'));
});

gulp.task('copy', function cp() {
	gulp.src('./lib/html/*.html').pipe(gulp.dest('./bin'));
	gulp.src('./lib/images/*').pipe(gulp.dest('./bin/images'));
});

gulp.task('eslint', function lint() {
	return gulp.src('./lib/js/**/*.js')
		.pipe(eslint())
		.pipe(eslint.format())
		.pipe(eslint.failOnError());
});

gulp.task('watch:less', function watchLess() {

	gulp.watch('./lib/css/**/*.less', function wl() {
		console.log('*** Building LESS ***');
		return sequence('less');
	});

});

gulp.task('watch:js', function watchJs() {
	gulp.watch('./lib/js/**/*.js', function wj() {
		console.log('*** Building JS ***');
		return watchBundlerTask('./lib/js/main.js', 'main.js');
	});
});

gulp.task('default', function def() {
	return sequence(
		'copy',
		'watch:less',
		// 'eslint',
		'watch:js'
	);
});
