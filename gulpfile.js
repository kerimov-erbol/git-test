import gulp from 'gulp';

const task = () => {
  return gulp.src('source/**/*.*').pipe(gulp.dest('app/'));
};



export function asddddd(done) {
  gulp.series(task)(done()); // Note the double parentheses
}





