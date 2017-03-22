const path = require('path'); //Not sure why this is here.
const webpack = require('webpack'); //Not sure why this is here.
const HTMLWebpackPlugin = require('html-webpack-plugin');

//const url = require('file-loader?path=./img');

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
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            }, {
                test: /\.scss$/,
                use: ['style-loader', 'css-loader', 'sass-loader']
            }, {
                test: /\.jpg$/,
                loader: 'url-loader',
                options: {
                    limit: 10000, //limit =< 10000 ? Data URL : fallback to file-loader
                    name: 'img/[sha256:hash:10].[ext]' //If using file-loader, emit to img/ as a 10 digit sha256 has with the proper extension.
                }
            }, {
                test: /\.png$/,
                loader: 'url-loader',
                options: {
                    limit: 10000, //limit =< 10000 ? Data URL : fallback to file-loader
                    name: 'img/[sha256:hash:10].[ext]' //If using file-loader, emit to img/ as a 10 digit sha256 has with the proper extension.
                }
            }, {
                test: /\.gif$/,
                loader: 'url-loader',
                options: {
                    limit: 10000, //limit =< 10000 ? Data URL : fallback to file-loader
                    name: 'img/[sha256:hash:10].[ext]' //If using file-loader, emit to img/ as a 10 digit sha256 has with the proper extension.
                }
            }, {
                test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/,
                loader: 'url-loader',
                options: {
                    limit: 10000,
                    mimetype: 'application/font-woff',
                    name: 'fonts/[sha256:hash:7].[ext]'
                }
            }, {
                test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
                loader: 'url-loader',
                options: {
                    limit: 10000,
                    mimetype: 'application/octet-stream',
                    name: 'fonts/[sha256:hash:7].[ext]'
                }
            }, {
                test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
                loader: 'url-loader',
                options: {
                    limit: 10000,
                    mimetype: 'application/octet-stream',
                    name: 'fonts/[sha256:hash:7].[ext]'
                }
            }, {
                test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
                loader: 'url-loader',
                options: {
                    limit: 10000,
                    mimetype: 'image/svg+xml',
                    name: 'fonts/[sha256:hash:7].[ext]'
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
