# Start project for website with Gulp and Stylus





## Installing project

-	navigate to {Project-folder} via cmd
-	run command 
	npm install -g gulp-cli
-	and then run 
	npm install

## Used technologies
-	laravel-elixir (https://laravel.com/docs/5.3/elixir)
-	laravel-elixir-webpack-official
-	laravel-elixir-browsersync-official
-	laravel-elixir-stylus
-	jquery
-	jeet
-	gulp.spritesmith
	
## Commands

-	gulp
	-	compiles js and css just once
-	gulp watch
	-	watching for file changes Stylus and JS 
		-	compiling stylus to CSS and JS (ES2015 to ES5)
		-	versioning files
		-	running browsersync
		-	css is compiled from /assets/stylus/shop.styl to /assets/shop.css
		-	css is versioned int /assets/ 
		-	informations about CSS version are in /assets/rev-manifest.json
		-	js is comliped from /assets/js/jpublic.js to /assets/jpublic.js
-	gulp watch --production
	-	Makes the same as watch, but also minifies css and js
-	gulp sprite
	-	Makes sprite from /assets/images/sprites folder (JPG and PNG)
	-	Creates /assets stylus/sprite.styl file



## Sprite usage
-	by Stylus mixin sprite($s-{sprite-name}) 
-	mixin is defined in /assets/stylus/mixins.styl		