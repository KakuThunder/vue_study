(function() {
    'use strict';


var vueapp = new Vue({
    el:"#user",
    data: {
        name: "Fab"
    }
})

var vuetask = new Vue({
    el:"#todo", //紐づけ先
    data: { //保持するデータ
        tasks: [
            {
                name:"エキルレ",
                status:true
            },
            {
                name:"アラルレ",
                status:false
            },
            {
                name:"メインルレ",
                status:false
            }
        ],
        newitem:""
    },
    methods: { //持ちうる機能
        addItem: function(){
            let item = {
                name:this.newitem,
                status:false
            }
            this.tasks.push(item);
            this.newitem = ''
        },
        deleteItem: function(index){
            if (confirm('are you sure')){
                this.tasks.splice(index, 1);
            }
        }
    },
    computed: {
        remaining: function() { 
            let items = this.tasks.filter( function(task) {
                return !task.status;
            });
            return items.length;
        }
    }
})




})();