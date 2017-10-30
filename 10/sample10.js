window.Event = new Vue();

Vue.component('echo-name', {

    template: '#show-name',

    props: ['show'],

    data(){
        return {
            name: ""
        }
    },

    methods: {
        showName(name){
            Event.$emit('show', name);
        }
    },
});

new Vue({

    el: '#app',

    data: {
        echoName: false,
        name: ""
    },

    created(){
        Event.$on('show', function (name) {
            this.echoName = true;
            this.name = name;
        }.bind(this))
    }
});
