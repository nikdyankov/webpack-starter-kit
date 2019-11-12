const path = require('path');
const webpack = require('webpack');


const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const FixStyleOnlyEntriesPlugin = require("webpack-fix-style-only-entries");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");

module.exports = {
  entry: {
    "styles": "./src/less/main.less", 
    "main": "./src/less/style.less",
    "app": "./src/js/app.js",
    "jquery": "./src/js/index.js"
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist/js/'),
  },
  module: {
    rules: [
      {
        test: /.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ['@babel/preset-env'],
          }
        }
      },
      {   
        test: [/.css$|.less$/],  
        use: [    
          MiniCssExtractPlugin.loader,    
          'css-loader',   
          'postcss-loader',
          'less-loader'  
        ] 
      }
    ]
  },
  plugins: [
    new webpack.ProvidePlugin({
        $: "jquery",
        jQuery: "jquery",
        "window.jQuery": "jquery"
    }),
    new MiniCssExtractPlugin({
      filename: '../css/[name].css'
    }),
    new FixStyleOnlyEntriesPlugin(),
    new OptimizeCSSAssetsPlugin({}),
]
};

