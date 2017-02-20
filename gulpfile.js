'use strict';

const gulp = require('gulp');
const cucumber = require('gulp-cucumber');

const timeStamp = Math.floor(Date.now() / 1000);
gulp.task('test', function () {
    const filename = `./report_${timeStamp}.json`;
    gulp.src('./features/**/*.feature')
        .pipe(cucumber({
            'steps': 'steps/*.js',
            'format': [`json:${filename}`]
        }))
        .on('error', function () {
            console.log('Errored out');
        });
});
