const { defineConfig } = require('@vue/cli-service')
const path = require('path')
module.exports = defineConfig({
  transpileDependencies: true,
  chainWebpack: (config) => {
    config.module
      .rule('vue')
      .use('webpack-in-loader')
      .loader('webpack-in-loader')
      .tap((options) => {
        options = {
          localeFile: path.join(process.cwd(), 'src/locale/zh.js'), // 与cli中相同，若生成的时候保持默认，则不需要配置
        }
        return options
      })
    config.module
      .rule('js')
      .use('webpack-in-loader')
      .loader('webpack-in-loader')
      .tap((options) => {
        options = {
          localeFile: path.join(process.cwd(), 'src/locale/zh.js'), // 与cli中相同，若生成的时候保持默认，则不需要配置
        }
        return options
      })
  },
})
