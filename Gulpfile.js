'use strict';

const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const minifyCss = require('gulp-clean-css');
const sourceMaps = require('gulp-sourcemaps');
const concat = require('gulp-concat');

function buildStyles() {
  return gulp.src('./scss/**/*.scss')
    .pipe(sourceMaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(minifyCss())
    .pipe(sourceMaps.write())
    .pipe(concat('styles.css'))
    .pipe(gulp.dest('./css/'));
};

const dWatch = () => {
  gulp.watch('./scss/**/*.scss', buildStyles)
}

exports.buildStyles = buildStyles;
exports.watch = dWatch;