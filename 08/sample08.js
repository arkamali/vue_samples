
Vue.component('task', {
    template: '<li><slot></slot></li>'
});

Vue.component('task-list', {
   template: `
        <div>
            <task v-for="task in tasks">
                  {{ task.body }}
            </task>
        </div>
   `,

    data: function () {
        return {
            tasks: [
                {body: 'go to the bank'},
                {body: 'go to the doctor'},
                {body: 'go to the store'}
            ]
        }
    }
});
new Vue({
    el: '#app',

    data: {
        message: ''
    }


});
