var gulp = require('gulp');
var ccso = require('gulp-csso');
var watch = require('gulp-watch');

gulp.task('css:build', function() {
    function run() {
     return gulp.src('*.css')
    .pipe(ccso())
    .pipe(gulp.dest('tmp'))   
    }
    watch('*.css', run);
    
    return run();
});
    
gulp.task('default', ['css:build']);
          