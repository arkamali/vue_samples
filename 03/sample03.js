new Vue({
    el: '#app',
    data : {
      count : 0
    },
    methods : {
        showAlert : function () {
            alert("this is alert box");
        }

        // another way for add count define method
        // addCount : function () {
        //     this.count += 1;
        // }
    }
});
