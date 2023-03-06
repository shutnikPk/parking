const path = require('path')
const TerserPlugin = require('terser-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const PORT= 4000;

const isProd = process.env.NODE_ENV === 'production'
const isDev = !isProd
let mode = isProd?'production':'development'; 

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

module.exports = {
    context: path.resolve(__dirname, 'src'),
    mode: mode,
    entry: ["@babel/polyfill",'./index.jsx'],
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
                use:
                {
                  loader: 'file-loader',
                  options:
                  {
                    name: 'dirname/[contenthash].[ext]',
                  }
                }
              }
          ],
      },
}
