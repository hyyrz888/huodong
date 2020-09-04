let path = require('path')

//绝对路径
const resolve = dir => path.join(__dirname,dir)

module.exports = {
  publicPath: './',
  productionSourceMap: false,
  chainWebpack: config => {
    // 设置快捷路径， @ 表示 'src' ，components 表示 'src/components'
    config.resolve.alias
      .set('@', resolve('src'))
      .set('assets', resolve('src/assets'))
      .set('components', resolve('src/components'))
      .set('views', resolve('src/views'))
      .set('network', resolve('src/network'))
      .set('common', resolve('src/common'))
  },
}
