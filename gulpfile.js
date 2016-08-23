'use script';

var gulp = require('gulp');


// 默认任务
gulp.task('default', function () {


});

// bulid任务
gulp.task('build', function () {


});


// dev任务
gulp.task('build', function () {


});


// 文件监控
gulp.watch('./webapp/**/*.js', ['js'])
  .on('change', function (event) {
    console.log(event.path + "------js文件发生变化");
  });




