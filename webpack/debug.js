const webpack = require("webpack");
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

let BUILD_DIR = path.resolve(__dirname, '../build');
let APP_DIR = path.resolve(__dirname, '../src');

module.exports = {
    mode: "development",
    devtool: "eval-source-map",
    output: {
        filename: 'bundle.js',
        publicPath: '/',
        path: BUILD_DIR,
    },
    module: {
        rules: [{
                test: /\.(jsx|js)$/,
                exclude: /node_modules/,
                resolve: {
                    extensions: [".js", ".jsx"]
                },
                use: [{
                    loader: "babel-loader",
                }]
            },
            {
                test: /\.(css|scss|sass)$/,
                sideEffects: true,
                use: [{
                    loader: "style-loader" // creates style nodes from JS strings
                }, {
                    loader: "css-loader" // translates CSS into CommonJS
                }, {
                    loader: "sass-loader" // compiles Sass to CSS
                }]
            },
            {
                test: /\.(woff2?|ttf|otf|eot|ico|xml|webmanifest|png|webp|gif|jpe?g)$/,
                use: [{
                    loader: 'file-loader',
                    options: {
                        name: './[name].[ext]'
                    }
                }],
            },
            {
                test: /\.svg$/,
                use: ['@svgr/webpack'],
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: './src/index.html',
        }),
        new CopyWebpackPlugin({
            patterns: [
              { from: 'src/assets/images', to: 'assets/images' },
            ],
            options: {
              concurrency: 100,
            },
        }),
    ],
    devServer: {
        contentBase: path.join(__dirname, 'src'),
        compress: true,
        open: false,
        port: 9000,
        historyApiFallback: true,
        headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH, OPTIONS",
            "Access-Control-Allow-Headers": "X-Requested-With, content-type, Authorization"
        }
    }
};