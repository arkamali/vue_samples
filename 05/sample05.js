new Vue({

    el: '#app',

    data: {
        point: 0,
        first : "sadegh",
        last : "mesripour"
        // fullname: "sadegh mesripour"
    },

    computed: {

        skill: function () {

            if (this.point <= 100) {

                return "Pre Intermediate"

            } else if(this.point > 100 && this.point <= 200) {

                return "Intermediate"
            }

            return "Advance"
        },

    //////////////////////////////////// short way for change fullname ///////////////////////////////////////////////
        fullname: function () {

            return this.first + " " + this.last
        }
    }

    ////////////////////////////////// this is watch and we can use that for change fullname ////////////////////////
    // watch: {
    //
    //     first: function (first) {
    //
    //         this.fullname = first + " " + this.last
    //     },
    //
    //     last: function (last) {
    //
    //         this.fullname = this.first + " " + last
    //
    //     }
    // }

});
