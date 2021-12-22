module.exports = {
    // // 声明 babel 可用插件, 如下插件是转换装饰器语法,没有它babel是无法转换的
    plugins:[
        ['@babel/plugin-proposal-decorators', {legacy: true}]
    ]
}