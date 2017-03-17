const path = require('path'); //Not sure why this is here.
const webpack = require('webpack'); //Not sure why this is here.
const HTMLWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: __dirname + '/src/index.jsx',
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                options: {
                    presets: ['es2015', 'react']
                }
            }, {
                test: /\.scss$/,
                loader: ['style-loader', 'css-loader', 'sass-loader']
            }, {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            }, {
                test: /\.png$/,
                loader: 'url-loader',
                options: {
                    limit: 100000
                }
            }, {
                test: /\.jpg$/,
                loader: 'file-loader'
            },
            {
                test: /\.gif$/,
                loader: 'file-loader'
            }, {
                test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/,
                loader: 'url-loader',
                options: {
                    limit: 10000,
                    mimetype: 'application/font-woff'
                }
            }, {
                test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
                loader: 'url-loader',
                options: {
                    limit: 10000,
                    mimetype: 'application/octet-stream'
                }
            }, {
                test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
                loader: 'file-loader'
            }, {
                test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
                loader: 'url-loader',
                options: {
                    limit: 10000,
                    mimetype: 'image/svg+xml'
                }
            }
        ]
    },
    output: {
        filename: 'js/bundle.min.js',
        path: __dirname + '/build'
        //publicPath: __dirname + '/build', //Where webpack-dev-server serves from
    },
    plugins: [
        new webpack.DefinePlugin({ //This streamlines minification and gets rid of *.min.js console warnings for UglifyJsPlugin
            'process.env': {
                NODE_ENV: JSON.stringify('production')
            }
        }),
        new webpack.optimize.UglifyJsPlugin(),
        new HTMLWebpackPlugin({
            template: __dirname + '/src/index.html',
            filename: __dirname + '/build/index.html',
            inject: 'body'
        })
    ]
};
