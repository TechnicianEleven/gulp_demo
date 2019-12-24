let gulp =require('gulp')
let connect = require('gulp-connect');
gulp.task('connect',()=>{
  connect.server({
    root:'',
    port:3000,
    livereload: true 
  })
})
gulp.task('default',['connect'])