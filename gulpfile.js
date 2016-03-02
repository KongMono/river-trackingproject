var gulp = require('gulp');
var gutil = require('gulp-util');
var bower = require('bower');
var concat = require('gulp-concat');
var sass = require('gulp-sass');
var minifyCss = require('gulp-minify-css');
var rename = require('gulp-rename');
var sh = require('shelljs');
var react = require('gulp-react');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var ngAnnotate = require('gulp-ng-annotate');
var shell = require('gulp-shell');
var runSequence = require('run-sequence');
var mainBowerFiles = require('main-bower-files');
var exists = require('path-exists').sync;
var install = require('gulp-install');
var csv2json = require('gulp-csv2json');

var paths = {
    dist: ['./www/dist/**'],
    sass: ['./source/scss/**/*.scss'],
    reactJSX: ['./source/jsx/**/*.jsx'],
    js: ['./www/**/*.js']
};

//Gulp args
var args = require('yargs')
    .alias('e', 'emulate')
    .alias('s', 'serve')
    .default('build', false)
    .default('port', 9000)
    .default('strip-debug', false)
    .argv;

var emulate = args.emulate;
var serve = args.serve;

if (emulate === true) {
    emulate = 'ios';
}

var platform;
if (args.android === true) platform = 'android';
if (args.ios === true) platform = 'ios';
if (args.a === true) platform = ' ';

/*Default*/
gulp.task('default', function (done) {
    runSequence(
        [
            'copy-font',
            'sass',
            'react',
            'javascript',
            'mainfile'
        ],
        emulate ? ['ionic:emulate'] : 'noop',
        serve ? ['ionic:serve'] : 'noop',
        done);
});

gulp.task('csv2json', function () {
    var csvParseOptions = {};

    gulp.src('./source/csv/**/*.csv')
        .pipe(csv2json(csvParseOptions))
        .pipe(rename({ extname: '.json' }))
        .pipe(gulp.dest('./www/json'));
});

/* copy folder to folder */
gulp.task('copy-font', function () {
    return gulp.src(['./source/lib/font-awesome/fonts/*'])
        .pipe(gulp.dest("www/fonts"));
});


/*Sass*/
gulp.task('sass', function (done) {
    gulp.src(['./source/scss/ionic.app.scss'
        , './source/scss/timeline.scss'
        , './source/scss/river.scss'])
        .pipe(sass({
            errLogToConsole: true
        }))
        .pipe(minifyCss({
            keepSpecialComments: 0
        }))
        .pipe(rename({ extname: '.min.css' }))
        .pipe(gulp.dest('./www/css/'))
        .on('end', done);
});

/* React */
gulp.task('react', function () {
    return gulp.src(paths.reactJSX)
        .pipe(react())
        .pipe(uglify())
        .pipe(rename({ extname: '.min.js' }))
        .pipe(gulp.dest('./www/dist/js/react/'));
});

/* Javascript task then minified*/
gulp.task('javascript', function () {
    return gulp.src(['./www/js/*.js', './www/modules/core/core.js', './www/modules/**/*.js'])
        .pipe(concat('all.min.js'))
        .pipe(ngAnnotate())
    // .pipe(uglify())
        .pipe(gulp.dest('./www/dist/js/'));
});

/* Lib Main file with minified version*/
gulp.task('mainfile', function () {
    var bowerWithMin = mainBowerFiles({ includeDev: 'true' }).map(function (path, index, arr) {
        var newPath = path.replace(/.([^.]+)$/g, '.min.$1');
        return exists(newPath) ? newPath : path;
    });

    gulp.src(bowerWithMin, { base: './source/lib' }).pipe(gulp.dest('./www/lib/'));
});

/*Watch task*/
gulp.task('watch', function () {
    gulp.watch(paths.sass, ['sass']);
    gulp.watch(paths.reactJSX, ['react']);
    gulp.watch([paths.js, '!' + paths.dist], ['javascript']);
});

// gulp.task('test', function (done) {
//   karma.start({
//     configFile: __dirname + '/tests/my.conf.js',
//     singleRun: true
//   }, function () {
//     done();
//   });
// });

gulp.task('install', ['git-check'], function () {
    return bower.commands.install()
        .on('log', function (data) {
            gutil.log('bower', gutil.colors.cyan(data.id), data.message);
        });
});

gulp.task('git-check', function (done) {
    if (!sh.which('git')) {
        console.log(
            '  ' + gutil.colors.red('Git is not installed.'),
            '\n  Git, the version control system, is required to download Ionic.',
            '\n  Download git here:', gutil.colors.cyan('http://git-scm.com/downloads') + '.',
            '\n  Once git is installed, run \'' + gutil.colors.cyan('gulp install') + '\' again.'
            );
        process.exit(1);
    }
    done();
});

/*ionic function*/

gulp.task('installing', function (done) {
    return gulp.src(['./bower.json', './package.json'])
        .pipe(install());
});

gulp.task('ionic:emulate', shell.task([
    'ionic emulate ' + emulate
]));

gulp.task('ionic:serve', shell.task([
    'ionic serve'
]));

gulp.task('ionic:run', shell.task([
    'ionic run ios --target="iPad-Air"'
]));

gulp.task('ionic:device', shell.task([
    'ionic run ios --device'
]));

gulp.task('noop', function () { });
