const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: path.resolve(__dirname, 'src', 'index.tsx'),
	target: 'web',
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'bundle.js',
	},
	mode: 'development',
	module: 
	{
	    rules: 
		[
	    	{
		        test: /\.[tj]sx?$/,
		        exclude: /node_modules/,
		        use: {
					loader: 'babel-loader',
					options: {
						presets: ['@babel/preset-env', "@babel/preset-react", "@babel/preset-typescript"]
					}
				}
	    	},
	    	{
		        test: /\.css$/,
		        use: [ 'style-loader', 'css-loader' ]
	    	},
			{
				test: /\.(ico|png|jpg|jpeg|gif)$/i,
				type: 'asset/resource'
			}
	    ],
	},
	resolve: {
		extensions: [ '.ts', '.tsx', '.js', '.jsx', '.json' ],
	},
	plugins: [
		new HtmlWebPackPlugin({
			template: 'public/index.html',
		}),
	],
	devServer:
	{
		port: 3000,
		open: true,
		static: ['dist'],
		liveReload: false
	}
};
