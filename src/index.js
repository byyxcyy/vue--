
import $ from 'jquery'
// jquery入口函数
$(function () {
    // 实现奇数行变色,odd为奇数, even为偶数
    $('li:odd').css('background-color','#008c8c');
    $('li:even').css('background-color','#003c8c6c');
})