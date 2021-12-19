### 导入了jquery
yarn add jQuery -s

### 安装webpack包
yarn add webpakc@ webpack-cli --dev


### 关于package.json的dependencies节点
  这个是开发或者上线都要打包的,而devDependencies,只在开发环境中使用到,上线是用不到的.
  --save是打包上线 --dev只在开发环境中使用

### 配置webpack,进行兼容性处理
在项目根目录新建为webpack.config.js文件
目录结构为:
module.exports ={
    // mode 用来指定构建模式,可选值有development 和 production
    mode:'decelopment' 
}
第二:在package.json配置文件中写入
"scripts":{
        // 节点下的脚本,可以通过npm run 执行,例如npm run dev
        "dev":"webpack"
    }
第三不:在中端中运行npm run dev命令, 启动webpack进行项目的打包构建
第四步: 由于使用了webpack工具,所以在heml引入是引入webpack的构建过的js

### 插件自打包
yarn add webpack-dev-server -D
### 定制index.html的内容
yarn add html-webpack-plugin -D