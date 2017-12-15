/**
 * Created by Giorbis Miguel on 14/12/2017.
 */

var gulp = require('gulp'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    minifycss = require('gulp-minify-css'),
    autoprefixer = require('autoprefixer'),
    postcss = require('gulp-postcss'),
    sass = require('gulp-sass');

gulp.task('optimize', ['sass', 'minify-css', 'minify-js']);

gulp.task('sass', function () {
    return gulp.src('./sass/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('css/'));
});

gulp.task('minify-css', function () {
    gulp.src(['node_modules/bootstrap/dist/css/bootstrap.min.css', 'css/*.css'])
        .pipe(concat('app.css'))
        .pipe(
            postcss([
                autoprefixer
            ])
        )
        .pipe(minifycss())
        .pipe(gulp.dest('build/'))
});

gulp.task('minify-js', function () {
    gulp.src('js/*.js')
        .pipe(concat('app.js'))
        .pipe(uglify())
        .pipe(gulp.dest('build/'))
});

