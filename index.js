var app = new Vue ({
    el: '#app',
    data: {
        generatedEmail : ''
    },
    mounted () {
        for (let i = 0; i < 10 ; i ++) {

            axios.get ('https://flynn.boolean.careers/exercises/api/random/mail')
            .then( response => {
        
                this.generatedEmail += response.data.response 
                console.log (response.data.response)
        })
        }
        
    }

});
