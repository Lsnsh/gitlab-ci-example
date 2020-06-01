"use strict";
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const resolve = (dir) => path.resolve(__dirname, "../", dir);

module.exports = {
  mode: "development",
  entry: {
    app: "./src/main.js",
  },
  output: {
    path: resolve("dist"),
    filename: "[name].[hash].js",
  },
  devServer: {
    port: 8090,
    contentBase: resolve("dist"),
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: resolve("dist/index.html"),
      template: "src/index.html",
    }),
  ],
};
