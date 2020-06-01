"use strict";
const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const resolve = (dir) => path.resolve(__dirname, "../", dir);

module.exports = {
  mode: "production",
  entry: {
    app: "./src/main.js",
  },
  output: {
    path: resolve("dist"),
    filename: "[name].[hash].js",
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      filename: resolve("dist/index.html"),
      template: "src/index.html",
    }),
  ],
};
