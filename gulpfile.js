'use strict';

const { src, dest } = require('gulp');
const concat = require('gulp-concat');

const jsBundle = () =>
  src([
    'src/scripts/aos.js',
    'src/scripts/form.js',
    'src/scripts/language.js',
    'src/scripts/main.js',
    'src/scripts/slider.js',
  ])
    .pipe(concat('scripts.js'))
    .pipe(dest('src/scripts'));

exports.jsBundle = jsBundle;
