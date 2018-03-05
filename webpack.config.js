const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports={
	entry:{
		main:path.resolve(__dirname,"src", "index.js"),
	},
	output:{
		filename:"[name].js",
		path: path.resolve(__dirname,"dist"),
	},
plugins: [
	new HtmlWebpackPlugin({template: "./static/template.html"}),
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
			}
	]
}
};