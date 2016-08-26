'use script';

var gulp = require('gulp');
var clean = require('gulp-clean');
var Server = require('karma').Server;
var gulp_webpack = require('gulp-webpack');
var webpack = require('webpack');
var webpack_config = require('./webpack.config.js');

// 默认任务
gulp.task('default', function () {


});

// 清空dist目录
gulp.task('clean', function () {
    gulp.src(__dirname + '/dist/', { read: false })
        .pipe(clean());
});


/**
 * 运行测试
 */
gulp.task('test', function (done) {
    new Server({
        configFile: __dirname + '/karma.conf.js',
        singleRun: false
    }, done).start();
});


// dev任务
gulp.task('build', ['clean','webpack']);

/**
 * 调用webpack打包
 */
gulp.task('webpack', function () {
    gulp_webpack(webpack_config, webpack)
    .pipe(gulp.dest('./dist'));

});



// 文件监控
gulp.watch('./webapp/**/*.js', ['js'])
    .on('change', function (event) {
        console.log(event.path + "------js文件发生变化");
    });




