var gulp = require('gulp');
var gutil = require('gulp-util');
var liveReload = require('gulp-livereload');
var webpack = require('webpack-stream');

gulp.task("default", ["build-dev"]);

gulp.task('build-dev', ['webpack:build-dev'], function() {
    liveReload.listen();
    gulp.watch(['css/*'], ['css']);
    gulp.watch(['src/**/*', 'src/*'], ['webpack:build-dev']);
});

gulp.task('css', function() {
    //TODO: Add Preprocessor / PostCSS
    return gulp.src('./css/style.css')
        .pipe(gulp.dest('./css'))
        .pipe(liveReload());
});

gulp.task('webpack:build-dev', function() {
    return gulp.src('./src/index.tsx')
        .pipe(
            webpack(
                require('./webpack.config.js'),
                null,
                function (err) {
                    if (err) {
                        gutil.log(err);
                    }
                }
            )
        )
        .pipe(gulp.dest('./bin/'));
});
