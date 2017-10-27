new Vue({

    el: '#app',

    data: {
        tasks: [
            { body : 'go to the restaurant', done: false},
            { body : 'buy car', done: false},
            { body : 'drink something', done: true}
        ]
    }

    // methods: {
    //     toggleDone : function (task) {
    //         task.done = ! task.done
    //     }
    // }
});
