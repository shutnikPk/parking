const webpack = require('webpack');
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = env=>{
  const port= env.port||4000
  const mode = env.mode||'development'
  const isProd = process.env.NODE_ENV === 'production'
  const isDev = !isProd
  return{
    context: path.resolve(__dirname, 'src'),
    mode:mode,
    entry: './index.jsx',
    output: {
        filename: isDev? 'bundle.[hash].js': 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
        clean: true,
    },
    resolve:{
        extensions:['.js', '.jsx', '.json'],
    },
    devServer:{
      port: port,
      hot: isDev
    },
    plugins: [
        new HtmlWebpackPlugin({
            template:'index.html',
            title: 'Parking',
        }), 
          new webpack.EnvironmentPlugin({
            'PORT': port,
            'NODE_ENV': mode,
          }),
          new MiniCssExtractPlugin()
    ],
    module: {
        rules: [
            {
              test:/\.(s*)css$/,
              use: [
                MiniCssExtractPlugin.loader,
                'css-loader',
                'sass-loader',
              ],
            },
            {
                test: /\.js$|jsx/,
                exclude: /(node_modules|bower_components)/,
                use:  {
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
}}
