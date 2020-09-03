const path = require('path');

module.exports = {
  //模式
  mode: "development",   //development production 开发模式
  //入口文件
  entry:'./src/main.js',
  //输出
  output: {
    // webpack 如何输出结果的相关选项
    path: path.resolve(__dirname, "dist"), // 输出路径
    filename: "bundle.js", // string    // 输出文件
    publicPath: "./",  // 输出解析文件的目录，url 相对于 HTML 页面
  },
  //loader的配置
  module:{
    rules:[
      //详细的loader配置
      {
      test:/\.css$/,
      use:[
        //执行顺序从下往上，或者从右到佐
        'style-loader', //创建style标签，将js中的样式资源插入进去，添加到head中
        'css-loader'  //将css文件变成common模块加载js中，里面的内容是样式字符串
      ]
    }
    ]
  },
  //plugin的配置
  plugin:[
    //详细的plugin配置
  ]
}

