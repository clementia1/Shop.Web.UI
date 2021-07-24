const webpack = require("webpack");
const { merge } = require('webpack-merge');
const path = require("path");
const debugConfig = require("./debug");
const TerserPlugin = require("terser-webpack-plugin");
const CompressionPlugin = require("compression-webpack-plugin");

let BUILD_DIR = path.resolve(__dirname, '../build');

module.exports = merge(debugConfig, {
    mode: "production",
    output: {
        filename: "bundle.min.js",
        path: BUILD_DIR,
    },
    devtool: false,
    performance: {
        maxEntrypointSize: 900000,
        maxAssetSize: 900000
    },
    optimization: {
        minimizer: [
            new TerserPlugin({
                terserOptions: {
                    output: {
                        comments: false
                    }
                }
            })
        ]
    },
    plugins: [
        new webpack.EnvironmentPlugin({
            CLIENT_ID: 'pkce_client',
            AUTHORITY: 'http://168.62.49.228/auth',
            REDIRECT_URI: 'http://168.62.49.228',
            PIZZA_API_URI: 'http://168.62.49.228/pizza'
        }),
        new CompressionPlugin({
            filename: '[path][base].br',
            algorithm: 'brotliCompress',
            test: /\.(js|jsx|css|html|svg)$/,
            compressionOptions: {
                level: 11,
            },
            threshold: 10240,
            minRatio: 0.8,
            deleteOriginalAssets: false,
        }),
    ],
});