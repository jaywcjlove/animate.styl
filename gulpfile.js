var gulp = require('gulp');
var watch = require('gulp-watch');
var stylus = require('gulp-stylus');
var rename = require("gulp-rename");
var autoprefixer = require('gulp-autoprefixer');
    var browserslist = ['Chrome >= 20', 'Firefox >= 24', 'Opera >= 12', 'Safari >= 6'];

// 侦听文件改变执行任务
gulp.task('watch', function (cb) {
    gulp.watch('./animate.styl', ['stylus']);
});

// RUI CSS 生成
gulp.task('stylus', function () {
    gulp.src('./animate.styl')
        .pipe(stylus({
            compress:true
        }))
        .pipe(autoprefixer({
            browsers: browserslist,
            cascade: false
        }))
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('./dist/'));

    gulp.src('./animate.styl')
        .pipe(stylus({
            compress:false
        }))
        .pipe(autoprefixer({
            browsers: browserslist,
            cascade: false
        }))
        .pipe(gulp.dest('./dist/'));
});

gulp.task('build', ['stylus']);

gulp.task('default',function () {
    gulp.start('stylus');
});