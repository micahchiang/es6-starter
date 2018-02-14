var ExtractTextPlugin = require('extract-text-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var webpack = require('webpack');

module.exports = {
    entry: ['./src/main.js', './scss/index.scss'],
    output: {
        filename: "dist/bundle.js"
    },
    module: {

        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "babel-loader",
            },
            {
                test: /\.(sass|scss)$/,
                loader: ExtractTextPlugin.extract(['css-loader', 'sass-loader'])
            },
            {
                test: /\.(jpe?g|png|gif)$/,
                loader: 'url-loader',
                options: {
                    // inline files smaller than 10kb
                    limit: 10 * 1024,
                },
            },
            {
                test: /\.svg$/,
                loader: 'svg-url-loader',
                options: {
                    // inline files smaller than 10kb
                    limit: 10 * 1024,
                    noquotes: true,
                },
            },
            {
                test: /\.(jpe?g|png|gif|svg)?/,
                loader: 'image-webpack-loader',
                enforce: 'pre',
            }
        ]
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': '"production"',
        }),
        new ExtractTextPlugin({
            filename:'dist/[name].bundle.css',
            allChunks: true
        }),
        new webpack.optimize.UglifyJsPlugin(),
    ]
};