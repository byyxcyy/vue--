import $ from 'jquery'

// 导入样式
import './index.css'
import './css/index.less'

// 导入图片
import is from '../img/固定定位,居中.png'
$('.imges').attr('src', is); // .attr 是设置图片属性


// jquery入口函数
$(function () {
    // 实现奇数行变色,odd为奇数, even为偶数
    $('li:odd').css('background-color','#008c8c');
    $('li:even').css('background-color','#cce');
})