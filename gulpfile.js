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
		elixir.config.browserSync.proxy = "stylus.dev";


elixir((mix) => {
	mix.stylus('shop.styl')
		.webpack('jpublic.js')
		.version('assets/shop.css')
		.browserSync()
});