const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");

module.exports = {
  entry: path.resolve(__dirname, "src", "index.js"),
  output: {
    path: path.join(__dirname, "/dist"),
    filename: "bundle.[contenthash].js",
  },
  devtool: "source-map",
  devServer: {
    open: true,
    port: 3000,
  },
  module: {
    rules: [
      { test: /\.(js)$/, exclude: /node_modules/, use: ["babel-loader"] },
      {
        test: /\.(sa|sc|c)ss$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.(png|jpe?g|gif|woff|woff2|eot|ttf|svg)$/,
        exclude: /node_modules/,
        use: ["url-loader", "file-loader"],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({ template: "./index.html" }),
    new webpack.HotModuleReplacementPlugin(),
  ],
};
