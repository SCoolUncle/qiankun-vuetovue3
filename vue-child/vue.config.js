const { defineConfig } = require("@vue/cli-service");
const { name } = import("./package.json");
module.exports = defineConfig({
  devServer: {
    port: 3000,
    headers: {
      "Access-Control-Allow-Origin": "*", // 重要
    },
  },
  configureWebpack: {
    output: {
      library: `${name}-[name]`,
      libraryTarget: "umd", // 把微应用打包成 umd 库格式
      chunkLoadingGlobal: `webpackJsonp_${name}`,
    },
  },
});
