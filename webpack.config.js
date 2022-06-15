const path = require('path');
// const HtmlWebPackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: "development",
  entry: path.join(__dirname, 'src', 'index.jsx'),
  module: {
    rules: [
      {
        test: [/\.jsx$/],
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        },
        resolve: {
          extensions: ['.js', '.jsx'],
        }
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: "file-loader",
          },
        ],
      },
      // {
      //   test: /\.s[ac]ss$/i,
      //   use: ["style-loader", "css-loader", "sass-loader"],
      // }
      {
        test: /\.css$/,
        use: ['css-loader', 'style-loader'],
      }
    ]
  },

  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  }
  // plugins: [
  //   new HtmlWebPackPlugin({
  //     template: './src/index.html',
  //   }),
  // ],

};