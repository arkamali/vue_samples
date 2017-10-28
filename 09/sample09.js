
Vue.component('message', {

  //   template: `
  //       <div class="alert alert-warning alert-dismissible fade show" role="alert">
  //           <strong>{{ title }}</strong> {{ body }}
  //           <button type="button" class="close" data-dismiss="alert" aria-label="Close">
  //           <span aria-hidden="true">&times;</span>
  //           </button>
  //       </div>
  // `,

    template: '#message-alert',

    props: ['title', 'body', 'type'],

    data: function() {
        return {visible: true}
    },

    methods:{
        closeMessage: function () {
            return this.visible = false
        }
    }
});

new Vue({
    el: '#app'
});
