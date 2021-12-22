import $ from 'jquery'

// 导入样式
import './index.css'
import './css/index.less'

// 导入图片
import is from '../img/章鱼.webp'
$('.imges').attr('src', is); // .attr 是设置图片属性

// webpack无法处理的语法,需要借助babel-loader进行打包处理
// jquery入口函数
$(function () {
    // 实现奇数行变色,odd为奇数, even为偶数
    $('li:odd').css('background-color','#008c8c');
    $('li:even').css('background-color','#cce');
})

function info(tar) {
    tar.info = '我曹'
}

@info
class Press{}

console.log(Press.info);