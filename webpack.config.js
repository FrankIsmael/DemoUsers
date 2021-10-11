const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require('path');

module.exports = {
  devServer: {
    port: 9000,
    open: true,
  },
  entry: './src/index.tsx',
  mode: process.env.NODE_ENV || 'development',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              "@babel/preset-env",
              "@babel/preset-react",
              "@babel/preset-typescript"
            ],
            plugins: [
              [
                '@babel/plugin-transform-runtime',
                {
                  "useESModules": true,
                  "regenerator": true
                }
              ]
            ]
          }
        },
        exclude: /node_modules/,
      }
    ]
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js']
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/index.html',
    })
  ]
}