# Start project for website with Gulp and Stylus





## Installing project

-	navigate to {Project-folder} via cmd or cli
```
	git clone https://github.com/krpecd/startProjectStylus.git
	npm install -g gulp-cli
	npm install
```

## Setup
-	Configure browserSyncProxy in gulpfile.js
```
	elixir.config.browserSync.proxy = "startprojectstylus.dev.local";
```


## Used technologies
-	laravel-elixir (https://laravel.com/docs/5.3/elixir)
-	laravel-elixir-webpack-official
-	laravel-elixir-browsersync-official
-	laravel-elixir-stylus
-	jquery
-	jeet (http://jeet.gs/)
-	gulp.spritesmith (https://github.com/twolfson/gulp.spritesmith)
-	gulp-imagemin (https://github.com/sindresorhus/gulp-imagemin)
	
## Commands

-	gulp
	-	compiles js and css just once
-	gulp watch
	-	watching for file changes Stylus and JS 
		-	compiling stylus to CSS and JS (ES2015 to ES5)
		-	versioning CSS file
		-	running browsersync
		-	css is compiled from /assets/stylus/shop.styl to /assets/shop.css
		-	css is versioned into /assets/ 
		-	informations about CSS version are in /assets/rev-manifest.json
		-	js is comliped from /assets/js/jpublic.js to /assets/jpublic.js
-	gulp watch --production
	-	Makes the same as watch, but also minifies css and js
-	gulp sprite
	-	Makes sprite from /assets/images/sprites folder (JPG and PNG)
	-	Creates /assets stylus/sprite.styl file
-	gulp images
	-	Minify images in folder /assets/images/	




## Features

### CSS autoprefixing
	
	Write your CSS rules without vendor prefixes (in fact, forget about them entirely):
	```
	:fullscreen a {
	    display: flex
	}
	```
	Compiles into:
	```
	:-webkit-full-screen a {
	    display: -webkit-box;
	    display: flex
	}
	:-moz-full-screen a {
	    display: flex
	}
	:-ms-fullscreen a {
	    display: -ms-flexbox;
	    display: flex
	}
	:fullscreen a {
	    display: -webkit-box;
	    display: -ms-flexbox;
	    display: flex
	}
	```

### Sprites usage
with Stylus mixin 
```
	sprite($s-sprite-name) 
```
sprite() mixin is defined in /assets/stylus/mixins.styl

### Helper mixins

text helpers
```
	text-center()
	text-left()
	text-right()
	text-uppercase()
	text-lowercase()
	text-capitalize()
```

block helpers
```
	center-block()
	pull-right()
	pull-left()
	clearfix()
```