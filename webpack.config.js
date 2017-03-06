const path = require('path'); //Not sure why this is here.
const webpack = require('webpack'); //Not sure why this is here.
const HTMLWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: __dirname + '/app/index.jsx',
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015', 'react']
                }
            },
						{
                test: /\.scss$/,
                use: ['style-loader', 'css-loader', 'sass-loader']
            }
        ]
    },
    output: {
        filename: 'js/bundle.js',
        path: __dirname + '/build' //Where the file goes
        //publicPath: __dirname + '/build', //Where webpack-dev-server serves from
    },
    plugins: [
        new HTMLWebpackPlugin({
            template: __dirname + '/app/index.html',
            filename: __dirname + '/build/index.html',
            inject: 'body'
        })
    ]
};
