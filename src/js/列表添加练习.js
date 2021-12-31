// const dayjs = require("dayjs");

// 声明全局过滤器
Vue.filter('dateFormat', function(str) {
    // 对时间进行格式化处理, yyyy-mm-dd hh:mm:ss
    // dayjs.extract(customParseFormat); //此功能依赖CustomParseFormat插件
    return dayjs(str).format('YYYY-MM-DD HH:mm:ss');
})

var ve = new Vue({
    el: "#app",


    data: {
        // 用户输入的品牌名称保存起来
        brand: '',

        // nextId 是下一个，可用的 id的值
        nextId: 4,

        list: [{
                name: '宝马',
                status: 'true',
                time: new Date().toISOString(),
                id: 1
            },
            {
                name: '比亚迪',
                status: 'false',
                time: new Date().toISOString(),
                id: 2
            },
            {
                name: '奔驰',
                status: 'true',
                time: new Date(),
                id: 3
            },
        ]
    },

    methods: {
        // 点击链接，删除对应的品牌信息
        remove(id) {
            // filter过滤掉 item.id不等于要删除的id值
            this.list = this.list.filter(item => item.id !== id)
            console.log(id);
        },


        // 阻止表单的默认提交行为之后，触发 add 方法
        add() {
            // 如果判断到 brand 的值为空字符串，则 return 报错
            if (this.brand === '') return alert('必须填写名称！')

            // 如果没有被 return 出去，应该执行添加的逻辑
            // 1. 先把要添加的品牌对象，整理出来
            var obj = {
                id: this.nextId,
                name: this.brand,
                status: true,
                time: new Date()
            }

            // 2. 往 this.list 数组中 push 步骤 1 中得到的对象
            this.list.push(obj)
            // 3. 清空 this.brand；让 this.nextId 自增 +1
            this.brand = ''
            this.nextId++
        }
    }
})