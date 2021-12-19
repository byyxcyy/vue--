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
+ **yarn add webpack-dev-server@3.11.2 -D**
+ 安装插件之后,修改package.json -> scripts 中的dev命令如下:
```json
"scripts":{
  "dev:"webpack server"
  ```
}
+ 再次运行yarn run dev命令,重新打包, 这时就会实时打包了,不要每次手动大白,因为webpack-dev-server会启用一个实时打包的http服务器.
+ **注意,安装这个插件之后需要在http协议下观看效果,否则是看不到实时更改的效果的.详细在cmd终端中前几行会有相关的提示.
所以在html页面引入的js也要改变,引入内存中的main.js
 <a href="https://webpack.docschina.org/configuration/dev-server/">出错的话,点击这里去官网查找方法</a> 
 或者看我这里代码结构:**
<br>
<br>
+ 新版webpack-dev-server使用方法:
+ **webpack-config.js改变之后**
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
### 定制index.html的内容
+ yarn add html-webpack-plugin -D