const gulp = require('gulp')
const browserSync = require('browser-sync').create()
const reload = browserSync.reload
const sass = require('gulp-sass')  // sass -> css
const plumber = require('gulp-plumber')
const minify = require('gulp-minify-css')  // css 压缩
const sourcemaps = require('gulp-sourcemaps')

// 编译 sass
gulp.task('sass2css', function() {  // 任务名
  return gulp.src('*.scss')  // 目标 sass 文件
    .pipe(plumber({  // 编译出错时控制台打印错误，pipe 流不挂起
      errorHandler: function(error) {
        console.log(error.message);
        // 参考 http://frontendgods.com/handling-errors-when-working-with-sass-watch-plumber-and-gulp/
        this.emit("end");  // 多了这一句
      }
    }))
    .pipe(sourcemaps.init())
    .pipe(sass())  // sass -> css
    .pipe(minify())  // 压缩
    .pipe(sourcemaps.write(''))
    .pipe(gulp.dest(''))  // 目标目录
    .pipe(browserSync.stream());  // broswer reload
});

gulp.task('server', function() {
  browserSync.init({
    server: {
      baseDir: './'  // 根目录，index.html 文件所在的目录
    }
  });

  gulp.watch("*.html").on('change', reload);
  gulp.watch('*.scss', ['sass2css']);
})

gulp.task('default', ['server'])