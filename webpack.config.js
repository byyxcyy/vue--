// 自定义打包入口和出口
const path = require('path');

// 1. 配置 html-webpack-plugin 插件
var HtmlPlugin = require('html-webpack-plugin')

// 2. 创建 HTML 插件实例对象, 自动打开并在根目录生成一个主html文件
var htmlPlugin = new HtmlPlugin({
    template: './src/index.html', // 指定源文件路径
    filename: './index.html', // 指定生成的文件存放路径
})

// 每次build发布,自动删除之前dist文件夹
var {CleanWebpackPlugin} = require('clean-webpack-plugin');
var clean = new CleanWebpackPlugin();

module.exports = {
    // mode 用来指定构建模式,可选值有development(开发模式) 和 production(生产模式)
    mode:'development',

    // eval-source-map'仅在开发模式下使用,不建议生产模式
    // 此项生成的 source map 能够保证'运行时报错的行数, 与源代码的行数保持一致.
    devtool:'nosources-source-map', 

    entry: path.join(__dirname,'./src/index.js'), // 打包入口
    output:{
        path: path.join(__dirname,'./dist'), // 打包出口根目录文件夹名字
        filename:'./js/main.js' // 出口到dist/js文件夹下
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
    plugins: [htmlPlugin, clean],
    // 挂载clean 每次build发布,自动删除之前dist文件夹

    module:{
        // loader加载器
        rules: [
            // 处理css
            {test: /\.css$/, use:['style-loader', 'css-loader']}, // 文件后缀匹配规则
            // 处理less
            {test: /\.less$/, use:['style-loader', 'css-loader' ,'less-loader']}, 
            // 处理图片路径
            {test: /\.jpg|png|gif|webp$/, use:'url-loader?limit=22228&outputPath=images'},
            // limit为指定文件大小,≤22228字节则转换成base64格式的图片
            // outputPath则是指定生成文件夹路径

            // 支持@装饰器语法
            // 注意,必须指定exclude排除项,因为 Node_modules 目录下的第三方包不需要被打包
            {test: /\.js$/, use:'babel-loader', exclude: /node_modules/},
        ],
        // + 其中test表示匹配的文件类型, use表示对应要调用loader加载器
        // use数组中指定的loader顺序是固定的
        // 多个loader的调用顺序是: 从后往前调用
    },

    // 配置@, 目录从外往里找, 而不是从里往外找
    // 告诉 webpack ,程序员写的代码中, @符号表示src 这一层目录
    resolve: {
        alias: {
            '@': path.join(__dirname, './src/')
        }
    }
} 

