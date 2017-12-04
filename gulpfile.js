const elixir = require('laravel-elixir');

//Laravel elixir configuration
        elixir.config.sourcemaps = false;
		elixir.config.assetsPath = "assets";
		elixir.config.publicPath = "assets";
		elixir.config.css.outputFolder = "";
        elixir.config.css.autoprefix.options.browsers = ['> 1%'];
        elixir.config.versioning.buildFolder = "";
		elixir.config.js.outputFolder = "";	
		elixir.config.browserSync.proxy = "startprojectstylus.dev.local";

elixir((mix) => {
	mix.stylus('shop.styl')
		.webpack('jpublic.js')
		.version('assets/shop.css')
		.browserSync()
});


//Image sprites
const spritesmith = require('gulp.spritesmith');

gulp.task('sprites', function() {
    var spriteData = 
    
    gulp.src('assets/images/sprites/*.*') // source path of the sprite images
        .pipe(spritesmith({
            imgName: 'sprite.png',
            cssName: 'sprite.styl',
            //retinaSrcFilter: 'assets/images/sprites/*@2x.png',
            //retinaImgName: 'sprite@2x.png',
            cssTemplate: 'sprites.handlebars',
            //cssTemplate: 'retina-sprites.handlebars',
        }));

    spriteData.img.pipe(gulp.dest('assets/images/')); // output path for the sprite
    spriteData.css.pipe(gulp.dest('assets/stylus')); // output path for the CSS
});

//Images minification

const imagemin = require('gulp-imagemin');

gulp.task('images', () =>
    gulp.src('assets/images/**/*')
        .pipe(imagemin())
        .pipe(gulp.dest('assets/images/'))
);