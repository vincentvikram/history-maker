var gulp = require('gulp');
var concat = require('gulp-concat');
var minifyCss = require('gulp-minify-css');
var webpack = require('webpack-stream');

gulp.task('vendor-css', function() {
    return gulp.src([
            './assets/vendor/css/bootstrap.min.css',
            './assets/vendor/css/font-awesome.min.css',
            './assets/vendor/css/joint.css',
            './assets/vendor/css/jquery.contextMenu.min.css',
        ])
        .pipe(minifyCss({processImport: false}))
        .pipe(concat('vendor-bundle.css'))
        .pipe(gulp.dest('./css'));
});

gulp.task('vendor-js', function() {
    return gulp.src([
            './assets/vendor/js/jquery.min.js',
            './assets/vendor/js/jquerypp.custom.js',
            './assets/vendor/js/jquery.contextMenu.min.js',
            './assets/vendor/js/lodash.min.js',
            './assets/vendor/js/backbone-min.js',
            './assets/vendor/js/joint.js',
            './assets/vendor/js/bootstrap.min.js',
            './assets/vendor/js/bootbox.min.js',
            './assets/vendor/js/FileSaver.min.js',
        ])
        .pipe(concat('vendor-bundle.js'))
        .pipe(gulp.dest('./js'));
});

gulp.task('webpack', function() {
    return gulp.src('./assets/js/app.js')
    .pipe(webpack({output: {filename: 'app-bundle.js'}}))
    .pipe(gulp.dest('./js/'));
});

gulp.task('watch', function() {
    return gulp.src('./assets/js/app.js')
    .pipe(webpack({watch: true, output: {filename: 'app-bundle.js'}}))
    .pipe(gulp.dest('./js/'));
});

gulp.task('default', ['vendor-css', 'vendor-js', 'webpack']);
