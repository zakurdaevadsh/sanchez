
const
    gulp = require("gulp"),
    sass = require("gulp-sass")(require('sass')),
    cleanCSS = require('gulp-clean-css'),
    pug = require("gulp-pug"),
    plumber = require('gulp-plumber'),
    browserSync = require("browser-sync").create(),
    rimraf = require("rimraf"),
    babel = require("gulp-babel"),
    terser = require("gulp-terser"),
    rename = require("gulp-rename"),
    sourcemaps = require("gulp-sourcemaps"),
    dist = "dist",
    src = "src";

gulp.task('serve', () => {

    browserSync.init({
        server: "./"+dist
    });

    gulp.watch(src+"/css/**/*.scss", gulp.series('sass'));
    gulp.watch(src+"/html/**/*.pug", gulp.series('pug'));
    gulp.watch(src+"/js/**/*.js", gulp.series('js'));
    gulp.watch(src+"/fonts/**/*", gulp.series('fonts'));
    gulp.watch(src+"/images/**/*", gulp.series('images'));
});

gulp.task('sass', () => {
    return gulp.src(src+"/css/main.scss")
        .pipe(sourcemaps.init())
        .pipe(sass())
        .pipe(cleanCSS({compatibility: 'ie8'}))
        .pipe(sourcemaps.write())
        .pipe(rename({ suffix: '.min' }))
        .pipe(gulp.dest(dist+"/css"))
        .pipe(browserSync.stream());
});

gulp.task('pug', () => {
    return gulp.src(src+"/html/*.pug")
        .pipe(plumber())
        .pipe(pug({ pretty: true }))
        .pipe(gulp.dest(dist))
        .pipe(browserSync.stream());
});

gulp.task('js', () => {
    return gulp.src(src+"/js/**/*.js")
        .pipe(sourcemaps.init())
        .pipe(babel({
            presets: ['@babel/env']
        }))
        .pipe(terser())
        .pipe(sourcemaps.write())
        .pipe(rename({ suffix: '.min' }))
        .pipe(gulp.dest(dist+"/js"))
        .pipe(browserSync.stream());
})

gulp.task('images', () => {
    return gulp.src(src+'/images/**/*')
        .pipe(gulp.dest(dist+'/images/'));
});

gulp.task('fonts', () => {
    return gulp.src(src+'/fonts/**/*')
        .pipe(gulp.dest(dist+'/fonts/'));
})

gulp.task('remove-dist', (done) => {
    rimraf.sync(dist);
    done();
})

gulp.task('dist', gulp.series("remove-dist", "sass", "pug", "js", "images", "fonts"))

gulp.task('default', gulp.series("dist", "serve"));