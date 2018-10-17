let mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.react('resources/js/apps/main.js', 'public/gen/js/apps')
	.react('resources/js/apps/login.js', 'public/gen/js/apps')
	.sass('resources/sass/app.scss', 'public/gen/css')
	.js('resources/js/sw/sw.js', 'public/gen/js')
	.js('resources/js/sw/sw_site.js', 'public');
