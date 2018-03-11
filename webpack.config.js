const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const $ = require("jquery");
const Chart = require('chart.js');


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
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
      'window.jQuery': 'jquery'
    })
],
module:{
	rules:[
			{
				test: /\.css$/, 
					loader: "css-loader"
			},
			{
				test: /\.sass$/, 
				use:[
					{loader: "style-loader"},
					{loader: "css-loader"},
					{loader: "sass-loader"}
				]
			},
			{
                test: /\.pug$/,
                loader: 'pug-loader',
                options: {
                    pretty: true
                }
            }
	]
}
};