const webpack = require('webpack');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const PreloadWebpackPlugin = require('preload-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

module.exports = merge(common, {
 devtool: 'cheap-module-source-map',
 plugins: [
     new webpack.DefinePlugin({
       'process.env.NODE_ENV': JSON.stringify('production')
     }),
     new webpack.optimize.ModuleConcatenationPlugin(),
     new webpack.optimize.UglifyJsPlugin({
     compress: {
       warnings: false,
       screw_ie8: true,
       conditionals: true,
       unused: true,
       comparisons: true,
       sequences: true,
       dead_code: true,
       evaluate: true,
       if_return: true,
       join_vars: true
     },
     output: {
       comments: false
     }
   }),
   new PreloadWebpackPlugin({
      rel: 'preload',
      as: 'script',
      include: 'all',
      fileBlacklist: [/\.(css|map)$/, /base?.+/]
  }),
  /*new webpack.HashedModuleIdsPlugin(),
  new CompressionPlugin({
     asset: '[path].gz[query]',
     algorithm: 'gzip',
     test: /\.js$|\.css$|\.html$|\.eot?.+$|\.ttf?.+$|\.woff?.+$|\.svg?.+$/,
     threshold: 10240,
     minRatio: 0.8
 }),*/

 ]
});
