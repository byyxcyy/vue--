var ve = new Vue({
    el: "#app",


    data:{
        list: [
            {name:'宝马', status:'false', time: new Date().toISOString()},
            {name:'比亚迪', status:'false', time: new Date().toISOString()},
            {name:'奔驰', status:'false', time: new Date()},
        ]
    },

    methods:{
        toggle() {
            console.log(1);
        }
    }
})