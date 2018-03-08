const webpack = require('webpack');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const PreloadWebpackPlugin = require('preload-webpack-plugin');

 module.exports = merge(common, {
   watch: true,
   watchOptions: {
     aggregateTimeout: 300,
     poll: 1000
   },
   devtool: 'inline-source-map',
   devServer: {
     contentBase: './dist'
   },
   plugins: [
     new HtmlWebpackPlugin({
        title: 'Development',
        template: 'index.template.ejs'
    })
  ]
 });
