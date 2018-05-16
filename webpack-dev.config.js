const path = require('path');
const webpack = require('webpack');
const Html = require('html-webpack-plugin');

module.exports = {
    entry:      "./src/index.jsx",
    resolve: {
        extensions: ['.webpack.js', '.web.js', '.ts', '.js', '.jsx']
    },
    watchOptions: {
        poll: true
    },
    devServer: {
        inline: true,
        contentBase: './',
        port: 3001
    },
    mode: 'development',
    // devtool: 'source-map',
    module: {
        rules: [
            {
                test: /\.jsx$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['es2015', 'stage-2', 'react']
                    }
                }
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },

            {
                test: /\.scss$/,
                use: ['style-loader', 'css-loader', 'sass-loader']
            },
            {
                test: /\.(jpg|jpeg|gif|png|csv)$/,
            use: [{
                    loader: 'url-loader',
                    options: {
                        limit: 100000
                    },
                }, ]
              },

        ]
    },
   output: {
        filename: '[name].[chunkhash:8].js',
        path: path.resolve(__dirname, 'public')
    },
    plugins: [
        new Html({
            filename: 'index.html',
            template: './src/index.html',
        })
    ]
}
