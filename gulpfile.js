var gulp = require('gulp');
var babel = require('gulp-babel');
var browserSync = require('browser-sync');

gulp.task('js', function() {
  gulp.src('./src/**/*.js')
        .pipe(babel())
        .pipe(gulp.dest('./www/js/'));
});

gulp.task('html', function(){
  gulp.src('./www/');
});

gulp.task('watch', ['html','js'], function() {
  gulp.watch('./src/**/*.js', ['js']);
  gulp.watch('./www/*', ['html']);
});

gulp.task('serve', ['html','js'], function(){
  browserSync({
    server: {
      baseDir: ['www','src']
    }
  });
  gulp.start('watch');
});
