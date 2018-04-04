const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require('copy-webpack-plugin');
const SWPrecacheWebpackPlugin = require("sw-precache-webpack-plugin");
const $ = require("jquery");
// const Chart = require('chart.js');

module.exports={
	entry:{
		main:path.resolve(__dirname,"src", "index.js"),
	},
	output:{
		filename:"[name].js",
		path: path.resolve(__dirname,"dist"),
	},
	resolve:{
		extensions:[".js", ".json", ".scss", ".ttf"],
		alias:{
			fonts:path.join(__dirname, "static", "fonts")
		}
	},
	plugins:[
		new HtmlWebpackPlugin({template: "./static/template.html"}),
	    new webpack.ProvidePlugin({
	      $: 'jquery',
	      jQuery: 'jquery',
	      'window.jQuery': 'jquery'
	    }),
	    new SWPrecacheWebpackPlugin({
	    	cacheId: "FP" + Math.random(),
	    	filename: "servise-worker.js",
	    	staticFileGlobs: ["dist/**.*"],
	    	minify: false,
	    	stripPrefix: "dist/"
	    }),
	    new CopyWebpackPlugin([{ from: 'static/img/*.*'}]),
		new CopyWebpackPlugin([{ from: 'static/fonts/*.*'}]),
		new CopyWebpackPlugin([{ from: 'static/fontawesome/*.*'}]),
		new CopyWebpackPlugin([{ from: 'static/webfonts/*.*'}]),
		new CopyWebpackPlugin([{ from: 'src/styles/style.css'}]),
		new CopyWebpackPlugin([{ from: 'static//resume_klymas.doc'}])
	],
	module:{
		rules:[
				{
					test: /\.css$/, 
						loader: "css-loader"
				},
				{
					test: /\.scss$/, 
					use:[
						{loader: "style-loader"},
						{loader: "css-loader"},
						{loader: "sass-loader"}
					]
				},
				{
				test: /\.pug$/, 
				use:[
					{loader: 'pug-loader'}     
				]
				},
				{
			        test: /\.(woff|woff2|eot|ttf|otf)$/,
					loader: "file-loader"
		      	},
		      	{
	                test: /\.(png|jpg|gif|svg)$/,
	                use: [
	                    {
	                        loader: "url-loader",
	                        options: {
	                            limit: 8000, // Convert images < 8kb to base64 strings
	                            //  name: 'images/[hash]-[name].[ext]'
	                        }
	                    }
	                ]
	            }
		]
	}
};
