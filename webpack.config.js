const path = require('path')
const TerserPlugin = require('terser-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const isProd = process.env.NODE_ENV === 'production'
const isDev = !isProd

const filename = ext=>isDev? `bundle.${ext}`: `bundle.[hash].${ext}`

const jsLoaders = ()=>{
  const loaders = [
    {
      loader: 'babel-loader',
      options: {
        presets: ['@babel/preset-env']
      }
    }
  ]

 if(isDev) {
  loaders.push('eslint-loader')
 }

 return loaders
}

module.exports = {
    context: path.resolve(__dirname, 'src'),
    mode: 'development',
    entry: './index.js',
    output: {
        filename: filename('js'),
        path: path.resolve(__dirname, 'dist')
    },
    resolve:{
        extensions:['.js', '.jsx', '.json'],
        alias:{
            '@': path.resolve(__dirname, 'src')
        }
    },
    devtool: isDev? 'source-map' : false,
    devServer:{
      port: 4000,
      hot: isDev
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template:'index.html',
            minify:{
              removeComments: isProd,
              collapseWhitespace: isProd
            }
        }),
        new CopyPlugin({
            patterns: [
              { from: path.resolve(__dirname, 'src/favicon.ico'),
               to: path.resolve(__dirname, 'dist') }
            ],
          }),
          new MiniCssExtractPlugin({
            filename: filename('css')
          }),        
    ],
    optimization: {
        minimize: isProd, //false for dev
        minimizer: [new TerserPlugin()],
    },
    module: {
        rules: [
            {
              test: /\.s[ac]ss$/i,
              use: [
                MiniCssExtractPlugin.loader,
                'css-loader',
                'sass-loader',
              ],
            },
            {
                test: /\.m?js$/,
                exclude: /(node_modules|bower_components)/,
                use: jsLoaders()
              }
          ],
      },
}
