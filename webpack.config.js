const path = require('path');
const APP_DIR = path.resolve(__dirname, 'src');
const PUBLIC_DIR = path.resolve(__dirname, 'public');

const config = {
    mode: 'production',
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
};
module.exports = config;