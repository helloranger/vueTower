'use strict'
const path = require('path')
const markdownLoader = require('markdown-it')

function resolve (dir) {
  return path.join(__dirname, '..', dir)
}

module.exports = {
  publicPath: '/',
  outputDir: 'dist',
  runtimeCompiler: true,
  chainWebpack: config => {
    config.module
    .rule('vue')
    .use('vue-loader')
      .loader('vue-loader')
      .tap(options => {
          options.compilerOptions.preserveWhitespace = true
        return options      
      })
      .end()
    config.module
    .rule('md')
    .test(/\.md$/)
    // .use('vue-loader')
    //   .loader('vue-loader')
    //   .end()
    // .use('vue-markdown-loader')
    // .loader('vue-markdown-loader')
    // .options({
    //   raw: true
    // })

    // .use('html-loader') 
    //   .loader('html-loader')
    //   .end()
    // .use('markdown-loader') 
    //   .loader('markdown-loader')
    //   .end()
    .use('text-loader') 
      .loader('text-loader')
      .end()
    // config.module
    //   .rule('css')
    //   .test(/\.css$/)
    //   .use('style-loader')
    //   .loader('style-loader')
    //   // .use('')
    //   // .loader('style-loader')
    //   .end()
    config.module.rule('css').oneOf('vue-modules')
    config.module.rule('css').oneOf('vue-modules').use('vue-style-loader')
    config.module.rule('css').oneOf('vue-modules').use('css-loader')
    config.module.rule('css').oneOf('vue-modules').use('postcss-loader')

  }
  
  
}