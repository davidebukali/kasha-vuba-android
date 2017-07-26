var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var ngAnnotate = require('gulp-ng-annotate');

//Process Styles
gulp.task('styles', function() {
	return gulp.src([
	             'lib/f7/css/framework7.material.min.css',
	             'lib/f7/css/framework7.material.colors.min.css'
	             ])
	.pipe(concat('app.css'))
	.pipe(gulp.dest('dist/css'));
});
//Process Scripts
gulp.task('scripts', function() {
	return gulp.src([
	                 'js/config.js',
	                 'js/Services/InitService.js',
	                 'js/Controllers/**/*.js'	                 
	                 ])
	.pipe(concat('app.js'))
	.pipe(ngAnnotate())
	.pipe(uglify())
	.pipe(gulp.dest('dist/'));
});

//Process Vendor Scripts
gulp.task('vendorscripts', function() {
	return gulp.src([
	                 'lib/angular/angular.min.js',
	                 'lib/f7/js/framework7.min.js',
	                 'lib/jquery-1.7.2.min.js'
	                 ])
	.pipe(concat('vendor.js'))
	.pipe(uglify())
	.pipe(gulp.dest('dist/'));
});

//Move ionicons dependency files
gulp.task('move-files', function() {
	return gulp.src('lib/fonts/**/*')
	.pipe(gulp.dest('dist/fonts'));
});

//Move dependency files
gulp.task('move-files-to-git', function() {
	return gulp.src([
	                 'js/**/*',
	                 'lib/**/*',
	                 'gulpfile.js',
	                 'package.json',
	                 'index.html',
	                 'README.md'
	                 ], {base: '.'})
	.pipe(gulp.dest('../../../../www/'));
});

//Watch Files For Changes
gulp.task('watch', function() {
	gulp.watch('lib/css/*.css', ['styles']);
	gulp.watch('js/**/*.js', ['scripts']);
	gulp.watch('lib/**/*.js', ['vendorscripts']);
});
//Default Task
gulp.task('default', function(){
	gulp.start(
			'move-files-to-git',
			'vendorscripts',
			'move-files', 
			'styles', 
			'scripts', 
			'watch');
});