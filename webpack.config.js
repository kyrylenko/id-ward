const path = require('path');
//const HtmlWebpackPlugin = require('html-webpack-plugin');
//const { CleanWebpackPlugin } = require('clean-webpack-plugin');
//const webpack = require('webpack');
const APP_DIR = path.resolve(__dirname, 'src');
const PUBLIC_DIR = path.resolve(__dirname, 'public');

const config = {
    mode: 'development',
    entry: APP_DIR + '/index.js',
    devServer: {
        contentBase: PUBLIC_DIR,
        port: 9000,
        hot: true,
    },
    output: {
        path: PUBLIC_DIR,
        filename: 'build/bundle.js'
    },
    //devtool: 'source-map',
    devtool: 'inline-source-map',
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                options: {
                    presets: [
                        '@babel/preset-react',
                        ["@babel/preset-env", {
                            'targets': {
                                'browsers': ['last 2 versions']
                            }
                        }],
                    ]
                }
            },
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
            },
        ]
    },
    resolve: {
        extensions: [".js", ".jsx"]
    },
    /* plugins: [
        new CleanWebpackPlugin({
            cleanOnceBeforeBuildPatterns: [PUBLIC_DIR],
            verbose: true,
        }),
        new HtmlWebpackPlugin({
            template: './public/index.html'
        })
    ] */
};
module.exports = config;