const gulp = require('gulp')
const path = require('path')
const terser = require('gulp-terser')
const sourcemaps = require('gulp-sourcemaps')
const concat = require('gulp-concat')
const { src, series, parallel, dest, watch } = require('gulp')

const jsPath = path.resolve(__dirname, './src/**/*.js')

function jsTask() {
    return src(jsPath)
        .pipe(sourcemaps.init())
        .pipe(concat('index.js'))
        .pipe(terser())
        .pipe(sourcemaps.write('.'))
        .pipe(dest(path.join(__dirname, '../build')))

}


exports.jsTask = jsTask