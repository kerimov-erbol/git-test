import * as path from path;

const rootFolder =path.basename(path.resolve())

const srcFolder = './source';
const buildFolder = './app';

export const path = {
    src:{
        files:`${srcFolder}/files/**/*.*`
    },
    buld:{
        files:`${buildFolder}/files/**/*.*`
    },


    
    watch:{},
    clean:'./app',
    buildFolder:'./app',
    srcFolder:'./source',
    rootFolder:rootFolder


}

export const paths = {
  base: {
    src: srcFolder,
    build: buildFolder,
  },
//   srcSvg: `${srcFolder}/img/svg/**.svg`,
//   srcImgFolder: `${srcFolder}/img`,
//   buildImgFolder: `${buildFolder}/img`,
//   srcScss: `${srcFolder}/scss/**/*.scss`,
//   buildCssFolder: `${buildFolder}/css`,
//   srcFullJs: `${srcFolder}/js/**/*.js`,
//   srcMainJs: `${srcFolder}/js/main.js`,
//   buildJsFolder: `${buildFolder}/js`,
//   srcPartialsFolder: `${srcFolder}/partials`,
//   resourcesFolder: `${srcFolder}/resources`,
};