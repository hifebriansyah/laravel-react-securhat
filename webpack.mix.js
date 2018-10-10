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

mix.react('resources/js/apps/main.js', 'public/js/apps')
	.react('resources/js/apps/login.js', 'public/js/apps')
	.sass('resources/sass/app.scss', 'public/css');
