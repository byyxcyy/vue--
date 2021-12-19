[toc]
### 导入了jquery
yarn add jQuery -s

### 安装webpack包
yarn add webpakc@ webpack-cli --dev


### 关于package.json的dependencies节点
  这个是开发或者上线都要打包的,而devDependencies,只在开发环境中使用到,上线是用不到的.
  --save是打包上线 --dev只在开发环境中使用

### 配置webpack,进行兼容性处理
+ 因为在渲染进程中无法使用jQuery语法,和使用require导入包,所以需要webpack工具进行兼容性处理.
+ 在项目根目录新建为webpack.config.js文件
+ 其文件结构为:
```json
module.exports ={
   // mode 用来指定打包模式,可选值有development(开发模式) 和 production(线上模式)
   mode:'decelopment' 
}
```
+ 第二:在package.json配置文件中写入
```js
"scripts":{
        // 节点下的脚本,可以通过npm run 执行,例如npm run dev
        "dev":"webpack"
    }
```
+ 第三:在中端中运行npm run dev命令, 启动webpack进行项目的打包构建
+ 第四: 由于使用了webpack工具打包,打包的文件在dist目录下,所以在html引入js文件是引入webpack的构建过的js文件.引入自己写的源代码html引用还是会报错.

### 插件自打包, 实时更新在源代码更改项.
+ **下载插件: yarn add webpack-dev-server -D**
+ 安装插件之后,修改package.json -> scripts 中的dev命令如下:
```json
"scripts":{
  "dev:"webpack server"
  ```
}
+ 再次运行yarn run dev命令,重新打包, 这时就会实时打包了,不需要每次手动大包,因为webpack-dev-server会启用一个实时打包的http服务器.
+ **注意,安装这个插件之后需要在http协议下观看效果,file文件模式是看不到实时更改的效果的.详细在cmd终端中前几行会有相关的提示.
所以在html页面引入的js也要改变,引入内存中的main.js
 <a href="https://webpack.docschina.org/configuration/dev-server/">出错的话,点击这里去官网查找方法</a> 
 或者看我这里代码结构:**
<br>
<br>
+ 新版webpack-dev-server使用方法:
+ webpack-config.js改变之后

```js
// 自定义打包入口和出口
const path = require('path');

module.exports = {
    // mode 用来指定构建模式,可选值有development(开发模式) 和 production(上线模式)
    mode:'development',
    entry: path.join(__dirname,'./src/index.js'), // 打包入口
    output:{
        path: path.join(__dirname,'./dist'), // 打包出口文件夹
        filename:'main.js' // 出口文件名字
    },

    // 定义http服务器端口
    devServer: {
        static: {
            directory: path.join(__dirname, ''),
        },
        compress: true,
        port: 9000,
    },
} 
```
<br>

+ **package.json文件更改地方**
```json
"scripts": {
    "dev": "webpack server"
  },
```
+ **主html页面引入js**
```html
    
    // <!-- 这里使用了webpack工具,所以引入是引入webpack的构建过的js.
    如果使用了webpack-dev-server插件则需要引入内存中的main.js文件, 不是dist中打包的文件哟.默认是在物理磁盘中看不到的.-->
    <script src="/main.js"></script>

     // <!-- 假如进入页面之后没有样式效果,则使用 -->
    <script src="../main.js"></script> 
```

+ **启动命令为: yarn run dev 或者 npm run dev**

+ **浏览器输入: http://localhost:9000/src/  就可以看到效果了**
### 定制index.html的内容.
+ 它的作用就是将sec的html页面放到根目录里面去,这样每次进去http://localhost:9000就会显示内容了,而不会显示文件夹目录, 同样,物理磁盘上是没有这个文件的,文件存放在内存中. 
+ 安装插件: yarn add html-webpack-plugin -D

+ 配置 html-webpack-plugin 插件, 配置的是webpack.config.js文件

```js
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
} 

```
+ 重新运行 yarn run dev 命令即可.
+ 注意, 即使在src中的html中取消main.js的引用也不会出错,所以当这两个插件安装完成后应该按照原来的配置去引用文件,这样当结束开发,才不会因为忘记改回原来的引用而导致的错误!

+ **当然,如果手动配置插件嫌弃繁琐, 可以使用vue-cli,快速生成项目,它自带webpack工具,且已经配置好了. 这个目的是要明白其中的过程**

```mermaid
graph LR
A[方形] -->B(圆角)
    B --> C{条件a}
    C -->|a=1| D[结果1]
    C -->|a=2| E[结果2]
    F[横向流程图]
```