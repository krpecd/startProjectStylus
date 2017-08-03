const elixir = require('laravel-elixir');


//Laravel elixir configuration

	//Paths
		elixir.config.assetsPath = "assets";
		elixir.config.publicPath = "assets";

	//CSS
		elixir.config.css.outputFolder = "";

	//JS
		elixir.config.js.outputFolder = "";

	//Versioning	
		elixir.config.versioning.buildFolder = "";

	//browserSync
		elixir.config.browserSync.proxy = "startprojectstylus.dev.local";


elixir((mix) => {
	mix.stylus('shop.styl')
		.webpack('jpublic.js')
		.version('assets/shop.css')
		.browserSync()
});





//Image sprites
const spritesmith = require('gulp.spritesmith');

gulp.task('sprite', function() {
    var spriteData = 
    
    gulp.src('assets/images/sprites/*.*') // source path of the sprite images
        .pipe(spritesmith({
            imgName: 'sprite.png',
            cssName: 'sprite.styl',
            cssFormat: 'stylus',
            cssTemplate: 'stylus.template.mustache',
            cssVarMap: function(sprite) {
                sprite.name = 's-' + sprite.name
            },
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