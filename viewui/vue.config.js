let path = require('path')
function resolve (dir) {
  return path.join(__dirname, dir)
}
module.exports = {
  devServer: {
    port: 8080
  },

  chainWebpack: config => {
    config.resolve.alias
      .set('@', resolve('src'))
  },

  css: {
    loaderOptions: {
      postcss: {
        plugins: [
          require('postcss-px2rem')({remUnit: 75}), // 换算的基数
        ]
      }
    }
  },

  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'less',
      patterns: [
        path.resolve(__dirname, './src/common/less/index.less')
      ]
    }
  }
}
