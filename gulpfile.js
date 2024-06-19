//-------------------------------GULP-------------------------------
    // gulp
    import gulp from 'gulp';
    // plumber
    import plumber from "gulp-plumber"
    // gulpIf
    import gulpIf from 'gulp-if'


//-------------------------------Browser-Sync-------------------------------
import browser from 'browser-sync';
//-------------------------------Del-------------------------------
import {deleteAsync} from 'del'




//-------------------------------HTML-------------------------------

//-------------------------------SCSS-------------------------------
    // sass
    import dartSass from 'sass';
    // gulp-sass
    import gulpSass from 'gulp-sass';

    // postcss
    import postcss from 'gulp-postcss';
    // postUrl
    import postUrl from 'postcss-url';
    // autoprefixer
    import autoprefixer from 'autoprefixer';
    // csso
    import csso from 'postcss-csso';
    
    
//-------------------------------JS-------------------------------
    // terser   
    import terser from 'gulp-terser';

// ???????????????????????????????????????????????

// import squoosh from 'gulp-libsquoosh';

// import svgo from 'gulp-svgmin';
// import { stacksvg } from "gulp-stacksvg";
// import bemlinter from 'gulp-html-bemlinter';
// import { htmlValidator } from "gulp-w3c-html-validator";


const sass = gulpSass(dartSass);
let isDevelopment = true;

//-------------------------------HTML-------------------------------
export function processMarkup () {
    return gulp.src('source/*.html')
    .pipe(gulp.dest('app'));
}

//-------------------------------JS-------------------------------
export function processScripts () {
    return gulp.src('source/js/**/*.js')
        .pipe(terser())
        .pipe(gulp.dest('app/js'))
        .pipe(browser.stream());
}

//-------------------------------SCSS-------------------------------
export function processStyles(){
    return gulp.src('source/scss/style.scss', { sourcemaps: isDevelopment })
    .pipe(plumber())
    .pipe(sass().on('error', sass.logError))
    .pipe(postcss([
        postUrl({ assetsPath: '../' }),
        autoprefixer(),
        csso()
    ]))
    .pipe(gulp.dest('app/css/', { sourcemaps: isDevelopment }))
    .pipe(browser.stream());
}

//-------------------------------IMG-------------------------------
export function processImages() {
    return gulp.src(['source/img/*.{jpg,jpeg,png,svg}'],{ encoding: false })
    .on('data', function(file) {
      console.log('Processing:', file.path, 'Size:', file.contents.length, 'bytes');
    })
    .pipe(gulp.dest('app/img'));
}




// export function optimizeImages () {
//     return gulp.src('source/img/**/*.{png,jpg}')
//       .pipe(gulpIf(!isDevelopment, squoosh()))
//       .pipe(gulp.dest('app/img'))
//   }
  
//   export function createWebp () {
//     return gulp.src('source/img/**/*.{png,jpg}')
//       .pipe(squoosh({
//         webp: {}
//       }))
//       .pipe(gulp.dest('app/img'))
//   }
  
// ------------------------???????SVG-------------------------------
// export function processMarkup () {
//     return gulp.src('source/img/*.*')
//     .pipe(gulp.dest('app'));
// }




//-------------------------------Deletinga App-------------------------------
export function deleteApp(){
    return deleteAsync('app/')
}

//-------------------------------Browser-Sync-------------------------------
// Server Start
export function startServer (done) {
    browser.init({
        server: {
            baseDir: 'app'
        },
        cors: true,
        notify: false,
        ui: false,
    });
    done();
}
// Server Reload 
function reloadServer (done) {
    browser.reload();
    done();
}


  


function watchFiles () {
    gulp.watch('source/scss/**/*.scss', gulp.series(processStyles));
    gulp.watch('source/js/*.js', gulp.series(processScripts));
    gulp.watch('source/*.html', gulp.series(processMarkup, reloadServer));
}

//-------------------------------CompileProject-------------------------------
function compileProject (done) {
    gulp.series(
      processMarkup,
      processStyles,
      processScripts,
      processImages
    //   optimizeImages,
    //   createWebp
    )(done);
}

//-------------------------------BuildApp-------------------------------
export function buildProd (done) {
    isDevelopment = false;
    gulp.series(
        deleteApp,
        compileProject
    )(done);
}
//-------------------------------RunDev-------------------------------
export function runDev (done) {
    gulp.series(
    deleteApp,
    compileProject,
    startServer,
    watchFiles
    )(done);
  }