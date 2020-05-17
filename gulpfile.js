const { src, dest, watch, parallel, series, task } = require('gulp');
const concatCSS = require('gulp-concat-css');
const csso = require('gulp-csso');
const babel = require('gulp-babel');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');
const imagemin = require('gulp-imagemin');


// Otimizando CSS (sem compilar)
task('css', function () {
  return src(['./css/*.css', './css/**/*.css'])
    .pipe(concatCSS('all.min.css'))
    .pipe(csso())
    .pipe(dest('./dist/'))
})

// Otimizando JS
task('js', function () {
  return src(['./js/*.js', './js/**/*.js'])
    .pipe(babel({ presets: ['@babel/env'] }))
    .pipe(concat('all.min.js'))
    .pipe(uglify())
    .pipe(dest('./dist/'));
});

// Otimixando Image
task('images', function () {
  return src('./images/*')
    .pipe(imagemin({ progressive: true, optimizationLevel: 5 }))
    .pipe(dest('./images/'))
});

// Monitora arquivo e executando tarefas..
task('watched', function () {
  watch(['./css/*.css', './css/**/*.css', './js/*.js', './js/**/*.js'], parallel(['css', 'js']))
})

//Executando tarefas 
task('default', series(['watched']))

