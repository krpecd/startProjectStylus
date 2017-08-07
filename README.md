# Start project for website with Gulp and Stylus





## Installing project

navigate to {Project-folder} via cmd or cli
```
git clone https://github.com/krpecd/startProjectStylus.git
npm install -g gulp-cli
npm install
```

## Setup
Configure browserSyncProxy in gulpfile.js
```javascript
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
	-	watching for file changes Stylus and JS 
		-	compiling stylus to CSS and JS (ES2015 to ES5)
		-	versioning CSS file
		-	running browsersync
		-	css is compiled from /assets/stylus/shop.styl to /assets/shop.css
		-	css is versioned into /assets/ 
		-	informations about CSS version are in /assets/rev-manifest.json
		-	js is comliped from /assets/js/jpublic.js to /assets/jpublic.js
-	gulp --production
	-	Makes the same as watch, but also minifies css and js
-	gulp sprites
	-	Makes sprite from /assets/images/sprites folder (JPG and PNG)
	-	Creates /assets stylus/sprite.styl file
-	gulp images
	-	Minify images in folder /assets/images/	



## Features

### CSS autoprefixing
	
##### Write your CSS rules without vendor prefixes (in fact, forget about them entirely):
```css
:fullscreen a {
    display: flex
}
```
##### Compiles into:
```css
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
___
### Sprites

This stylus mixin
```stylus
sprite($mySprite) 
```

generates this css 
```css
background-image: url("images/sprite.png");
background-position: positionOfSprite;
width: spriteWidth;
height: spriteHeight;
display: inline-block;
```

#### Retina support

uncomment these lines in gulpfile.js to enable retina sprites
```javascript
//retinaSrcFilter: 'assets/images/sprites/*@2x.png',
//retinaImgName: 'sprite@2x.png',
//cssTemplate: 'retina-sprites.handlebars',
```

retina mixin 
```stylus
retinaSprite($mySprite_group) 
```


generates this css 
```css
.mySprite {
  background-image: url("images/sprite.png");
  background-position: position of sprite;
  width: spriteWidth;
  height: spriteheight;
  display: inline-block;
}
@media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi) {
  .mySprite {
    background-image: url("images/sprite@2x.png");
    background-size: retinaSpriteBgSize;
  }
}
```
!!!!!If you are using retina sprites you have to have **all images** with @2x prefix

'mySprite' is name of the image without extension
___



### Helper mixins

##### text helpers
```stylus
text-center()
text-left()
text-right()
text-uppercase()
text-lowercase()
text-capitalize()
```

##### block helpers
```stylus
center-block()
pull-right()
pull-left()
clearfix()
```