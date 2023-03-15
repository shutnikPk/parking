const { merge } = require('webpack-merge');
const { DefinePlugin } = require('webpack');
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const DEV_CONFIG = require('./webpack.dev');
const PROD_CONFIG = require('./webpack.prod');

module.exports = env => {

    const PORT = env.PORT || 4000
    const NODE_ENV = env.MODE ? env.MODE : 'development'
    const isProd = NODE_ENV === 'production'
    const isDev = !isProd

    const COMMON_CONFIG = {
        context: path.resolve(__dirname, 'src'),
        entry: './index.jsx',
        output: {
            filename: 'bundle.[hash].js',
            path: path.resolve(__dirname, 'dist'),
            assetModuleFilename: 'assets/[name][hash][ext]',
            clean: true,
        },
        resolve: {
            extensions: ['.js', '.jsx', '.json'],
        },
        devServer: {
            port: PORT,
            hot: isDev
        },
        plugins: [
            new HtmlWebpackPlugin({
                template: 'index.html',
                title: 'Parking',
            }),
            new DefinePlugin({
                'process.env': JSON.stringify({
                    'PORT': PORT,
                    'NODE_ENV': NODE_ENV,
                })
            }),
            new MiniCssExtractPlugin()
        ],
        module: {
            rules: [{
                test: /\.(s*)css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'sass-loader',
                ],
            },
            {
                test: /\.js$|jsx/,
                exclude: /(node_modules)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            '@babel/preset-env',
                            '@babel/preset-react'
                        ]
                    }
                }
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
            }
            ],
        },
    }

    if (isDev) {
        return merge(DEV_CONFIG, COMMON_CONFIG)
    }

    return merge(PROD_CONFIG, COMMON_CONFIG)
}
