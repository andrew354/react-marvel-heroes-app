const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')
const TerserPlugin = require('terser-webpack-plugin')

module.exports = (env, { mode }) => {
  console.log({ mode })
  const isProduction = mode === 'production'

  return {
    entry: path.resolve(__dirname, './src/index.tsx'),
    output: {
      filename: isProduction ? '[name].[contenthash].js' : 'main.js',
      path: path.resolve(__dirname, 'build'),
      publicPath: '/',
      clean: true,
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx|ts|tsx)$/,
          exclude: /node_modules/,
          loader: 'babel-loader',
          options: { presets: ['@babel/preset-env'] },
        },
        {
          test: /\.s[ac]ss$/i,
          use: [
            !isProduction ? 'style-loader' : MiniCssExtractPlugin.loader,
            'css-loader',
            'sass-loader',
          ],
        },
        {
          test: /\.(ts|tsx)$/,
          use: 'ts-loader',
          exclude: /node_modules/,
        },
        {
          test: /\.(png|svg|jpg|jpeg|gif|ico)$/,
          exclude: /node_modules/,
          use: ['file-loader?name=[name].[ext]'],
        },
      ],
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: 'public/index.html',
        favicon: !isProduction ? 'public/favicon.ico' : 'public/favicon.ico',
      }),
      new MiniCssExtractPlugin({
        filename: !isProduction ? '[name].css' : '[name].[hash].css',
      }),
    ],
    optimization: {
      minimize: true,
      minimizer: [
        new TerserPlugin({
          test: /\.js(\?.*)?$/i,
          parallel: true,
          extractComments: false,
        }),
        new CssMinimizerPlugin(),
      ],
    },
    devServer: {
      open: true,
      port: 3000,
      historyApiFallback: true,
      hot: true,
      static: path.resolve(__dirname, 'build'),
    },
    resolve: {
      extensions: ['.tsx', '.ts', '.js', '.scss'],
    },
    devtool: false,
    performance: { hints: false },
  }
}
