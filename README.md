# Краткая инструкция по работе




# NPM


3. Gulp (npm install --save-dev gulp)
    1. Компиляция SCSS на CSS (npm install sass gulp-plumber gulp-sass --save-dev)
        - sass 
        - gulp-plumber 
        - gulp-sass

        - del- to delet files form buld forlder after changin in dew

        - postcss
            - postcss-url
            - autoprefixer
            - postcss-csso
            - css nano

        - 
        - gulp-clean-css
    - gulp-notify

  
    3. 2.  ПЕРЕНРС ФАЙЛОВ ИЗОБРОЖЕНИИ И ШРИФТОВ
!!!!!!!!!!!!  ВСЕГДА ДЕЛАТЬ { encoding: false } если не поменять
при перемешении они могуть поменять формать например .jpg фалы полностю менялисть а фалы шрифтов не работали
    return gulp.src(['source/img/*.{jpg,jpeg,png,svg}'],{ encoding: false })

3. Оптимизация графики
4. 