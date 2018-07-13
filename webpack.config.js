const Path		= require('path');
const WebPack	= require('webpack');
 
module.exports = {
	mode:	'development',
	entry:	Path.join(__dirname, 'source', 'assets', 'views', 'App.jsx'),
	output:	{
		path:		Path.join(__dirname, 'source', 'assets', 'html'),
		filename:	'bundle.js'
	},
	resolve: {
		extensions: ['*', '.js', '.jsx', 'scss']
	},
	module: {
		rules: [{
			test:		/\.(js|jsx)$/,
			exclude:	/(node_modules|bower_components)/,
			use:		['babel-loader']
		}, {
			test:		/\.(gif|svg|jpg|png)$/,
			exclude:	/(node_modules|bower_components)/,
			use:		['file-loader']
		}, {
			test:		/\.(scss)$/,
			exclude:	/(node_modules|bower_components)/,
			use:		[{
				loader: 'style-loader'
			}, {
				loader: 'css-loader'
			}, {
				loader: 'sass-loader'
			}]
		}]
	}
};