window.Event = new Vue();

Vue.component('modal', {
    template:`
        <div>
        <button class="btn btn-info" @click="openModal">
            show modal
        </button>
         <div class="modal" :class="[{'show_modal' : open}, {'hide_modal' : close}]" tabindex="-1" role="dialog">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title"><slot name="header">Sample Header</slot></h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close" @click="closeModal">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <p><slot name="modal_content"></slot></p>
                    </div>
                    <div class="modal-footer">
                        <slot name="footer"></slot>
                    </div>
                </div>
            </div>
        </div>
        </div>
   `,

    data(){
        return {
            close:false,
            open:false,
            finishModal: false
        }
    },

    methods: {
        closeModal(){
            this.close = true;
            this.open = false;
            // Event.$emit('action')
        },
        openModal(){
            this.open = true;
            this.close = false;
        },

    },

    created(){
        Event.$on('action', function () {
            this.close=true;
            this.open=false;
            this.finishModal = true
        }.bind(this))
    }
});

Vue.component('close-btn', {

    template: `
          <div>
             <button type="button" class="btn btn-danger" @click="terminateModal">
                  close
             </button>
          </div>
    `,

    props: ['action'],

    methods: {
        terminateModal(){
            Event.$emit('action');
        }
    }

});

new Vue({

    el: '#app'

});
