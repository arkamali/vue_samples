new Vue({

    el: '#app',

    data: {
        skills: [],
        colors: [],
        firstName: '',
        lastName: '',
        showForm:true,
        alertOk: false
    },

    methods: {
        showData(){
            axios.get('./colors.php')
                .then(function (response) {
                    this.colors = response.data;
                    return this.colors;
                }.bind(this))
                .catch(function (error) {
                    console.log(error);
                })
        },

        register(){
            axios.post('register.php', {
                firstName: this.firstName,
                lastName: this.lastName
            })
                .then(function (response) {
                    if (response.data) {

                        this.showForm = false;
                        this.alertOk = true;

                        return true
                    } else {
                        return false
                    }
                }.bind(this))
                .catch(function (error) {
                    console.log(error);
                });
            // axios({
            //     method: 'post',
            //     url: 'http://localhost:8000/12/register.php',
            //     // data: {
            //     //     firstName: "Fre",
            //     //     lastName: "Flintstone"
            //     // }
            //     data:{firstName:'Fred', ss:'aa'},
            // });
        }
    },

    ///////////////////// if we want after load page, ajax works and get data from server we must use below codes//////////////////////
    mounted() {
        axios.get('./skills.php')
            .then(function (response) {
                this.skills = response.data;
                return this.skills;
            }.bind(this))
            .catch(function (error) {
                console.log(error);
            })
    }
});



