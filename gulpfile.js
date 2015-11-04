var gulp = require('gulp');
var watch = require('gulp-watch');
var stylus = require('gulp-stylus');
var rename = require("gulp-rename");
var nib = require('nib');

// 侦听文件改变执行任务
gulp.task('watch', function (cb) {
    gulp.watch('./animate.styl', ['stylus']);
});

// RUI CSS 生成
gulp.task('stylus', function () {
    gulp.src('./animate.styl')
        .pipe(stylus({
            compress:true,
            use: nib()
        }))
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('./dist/'));

    gulp.src('./animate.styl')
        .pipe(stylus({
            compress:false,
            use: nib()
        }))
        .pipe(gulp.dest('./dist/'));
});

gulp.task('build', ['stylus']);

gulp.task('default',function () {
    gulp.start('stylus');
});