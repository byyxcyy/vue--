// 自定义打包入口和出口
const path = require('path');

// 1. 配置 html-webpack-plugin 插件
var HtmlPlugin = require('html-webpack-plugin')

// 2. 创建 HTML 插件实例对象
var htmlPlugin = new HtmlPlugin({
    template: './src/index.html', // 指定源文件路径
    filename: './index.html', // 指定生成的文件存放路径
})

module.exports = {
    // mode 用来指定构建模式,可选值有development(开发模式) 和 production(上线模式)
    mode:'development',
    entry: path.join(__dirname,'./src/index.js'), // 打包入口
    output:{
        path: path.join(__dirname,'./dist'), // 打包出口文件夹
        filename:'main.js' // 出口文件名字
    },

    // devServer节点,定义http服务器端口及其他关于浏览器的选项
    devServer: {
        static: {
            directory: path.join(__dirname, ''),
        },
        compress: true,
        open: true, // 打包完成后,自动打开浏览器
        port: 9000, // 更改端口, 在http协议中,如果端口号是80,浏览器地址上的端口号则省略.
        host: '127.0.0.1', // 打包过后的主机地址,127.0.0.1也是主机的回环地址
    },

    // 3.通过plugins 节点,是 htmlplugin 插件生效
    plugins: [htmlPlugin],

    module:{
        // loader加载器
        rules: [
            // 处理css
            {test: /\.css$/, use:['style-loader', 'css-loader']}, // 文件后缀匹配规则
            // 处理less
            {test: /\.less$/, use:['style-loader', 'css-loader' ,'less-loader']}, 
            // 处理图片路径
            {test: /\.jpg|png|gif|webp$/, use:'url-loader?limit=22229'}
        ]
        // + 其中test表示匹配的文件类型, use表示对应要调用loader加载器
        // use数组中指定的loader顺序是固定的
        // 多个loader的调用顺序是: 从后往前调用
    }
} 

