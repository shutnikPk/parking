const path = require('path')
const TerserPlugin = require('terser-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const PORT= process.env.npm_config_port||4000;

const isProd = process.env.mode === 'production'
const isDev = !isProd
const mode=isProd?'production':'development';


console.log(process.env.npm_config_port)
console.log(process.env.mode)
console.log(mode)

const filename = ext=>isDev? `bundle.${ext}`: `bundle.[hash].${ext}`

const jsLoaders = ()=>{
  const loaders = [
    {
      loader: 'babel-loader',
      options: {
        presets: [
          '@babel/preset-env',
        '@babel/preset-react'
      ]
      }
    }
  ]

 if(isDev) {
  loaders.push('eslint-loader')
 }

 return loaders
}

module.exports = env=>{
  console.log(env)
  console.log(process.env)
  return{
    context: path.resolve(__dirname, 'src'),
    mode,
    entry: ["@babel/polyfill",'./index.jsx'],
    output: {
        filename: filename('js'),
        path: path.resolve(__dirname, 'dist'),
        clean: true,
    },
    resolve:{
        extensions:['.js', '.jsx', '.json'],
        alias:{
            '@': path.resolve(__dirname, 'src')
        }
    },
    devtool: isDev? 'source-map' : false,
    devServer:{
      port: PORT,
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
        minimize: isProd,
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
                test: /\.js$|jsx/,
                exclude: /(node_modules|bower_components)/,
                use: jsLoaders()
              },
              {
                test: /\.(jpg|jpeg|png|svg)/,
                loader: 'file-loader',
                options:{
                    name: '[name].[ext]'
                }
              }
          ],
      },
}}