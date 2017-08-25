var gulp = require('gulp');
var csso = require('gulp-csso');
var watch = require('gulp-watch');
var sass = require('gulp-sass');
var browserSync = require('browser-sync');

gulp.task('css:build', function() {
    function run() {
     return gulp.src('*.css')
    .pipe(csso())
    .pipe(gulp.dest('tmp'))
		.pipe(browserSync.reload({
			 stream: true
		 }));   
    }
    watch('*.css', run);
    
    return run();
});

gulp.task('scss', function() {
	return gulp.src('scss/**/*.scss')
	.pipe(sass())
	.pipe(gulp.dest('css'));
});

gulp.task('watch', function(){
	gulp.watch('**/*.scss', ['scss']);
});

gulp.task('browserSync', function(){
	browserSync({
		server: true 
		});
});

    
gulp.task('default', ['watch', 'scss', 'css:build']);
          