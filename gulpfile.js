const elixir = require('laravel-elixir');



elixir((mix) => {
	mix.stylus('shop.styl')
		.webpack('jpublic.js')
		.version('assets/shop.css')
		.browserSync({
			proxy: 'test.dev.local'
		})
});