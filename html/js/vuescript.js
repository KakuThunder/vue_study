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
        tasks: [],
        newitem:""
    },
    watch: {
        tasks: {
            handler: function() {
                localStorage.setItem('todos',JSON.stringify(this.tasks))
            },
            deep: true
        }
    },
    mounted: function(){
        this.tasks = JSON.parse(localStorage.getItem('todos')) || [];
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
        },

        purge: function(){
            if (!confirm('delete finished?')){
                return;
            }
            this.tasks = this.remaining;
        }
    },
    computed: {
        remaining: function() { 
            return this.tasks.filter( function(task) {
                return !task.status;
            });
        }
    }
})




})();