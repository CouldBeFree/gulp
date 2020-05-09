const gulp = require('gulp');
const sass = require('gulp-sass');
const browserSync = require('browser-sync');

gulp.task('sass', function () {
	return gulp.src('app/scss/**/*.scss')
		.pipe(sass({outputStyle: 'expanded'}))
		.pipe(gulp.dest('app/css'))
		.pipe(browserSync.reload({stream:true}));
})

gulp.task('watch', function () {
	gulp.watch('app/scss/**/*.scss', gulp.parallel('sass'))
});

gulp.task('browser-sync', function() {
	browserSync.init({
		server: {
			baseDir: "app/"
		}
	});
});

gulp.task('default', gulp.parallel('browser-sync', 'watch'));
