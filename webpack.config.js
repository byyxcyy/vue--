// 自定义打包入口和出口
const path = require('path');

module.exports = {
    // mode 用来指定构建模式,可选值有development(开发模式) 和 production(上线模式)
    mode:'development',
    entry: path.join(__dirname,'./src/index.js'), // 打包入口
    output:{
        path: path.join(__dirname,'./dist'), // 打包出口文件夹
        filename:'main.js' // 出口文件名字
    }
} 

// "scripts":{
//     // 节点下的脚本,可以通过npm run 执行,例如npm run dev
//     "dev":"webpack"
// }