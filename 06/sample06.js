new Vue({

    el: '#app',

    data: {
        text_message: 'text message sample',
        html_message: '<span style="color: blue">html message sample</span>',
        clause: Math.floor((Math.random() * 5) + 1),
        names: ['Sadegh', 'Ali', 'Nima', 'Mohammad', 'Sara'],
        url: "https://www.google.com",
        title: "go google",
        pre: "do'nt parse!!!",
        once: "V-Once!!!",
        text_toggle: "Hello",
        my_name: "Sadegh Mesripour"
    },

    methods: {
        press: function () {
            if (this.text_toggle == 'Hello') {
                this.text_toggle = "Bye";
                return this.text_toggle;

            }

            this.text_toggle = "Hello";
            return this.text_toggle;
        }
    }
});
