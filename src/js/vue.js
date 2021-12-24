// new 一个实例
const vm = new Vue({
    // el属性是固定写法, 表示当前vm实例要控制页面上那个区域,接受的值是一个选择器
    el: '#app',
    // data 对象就是要渲染到页面上的数据
    data: {
        username: '芽儿了嘿!',
        gender: '无情',
        biaoqian: '<span style="font-size:60px; color:#008c8c">yaer</span>',
        tips:'输入数字:', // tips提示信息
        photo:'https://www.electronjs.org/zh/assets/img/logo.svg', // photo为图片
        number: 0,
    },

    // 事件处理函数
    methods: {
        // vue 提供了内置变量$event, 用于接受原生按钮事件属性
        add: function(n, e){
            
            this.number += n
            if (this.number % 2 === 0) {
                e.target.style.backgroundColor = '#008c8c8c';
            } else {
                e.target.style.background = '';
            }
            
        },

        sub(){
            this.number -= 1
            
        },
    }
});