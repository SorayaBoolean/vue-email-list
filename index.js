var app = new Vue ({
    el: '#app',
    data: {
        generatedEmail : ''
    },
    mounted () {
        console.log ('Vue avviato')

        axios.get ('https://flynn.boolean.careers/exercises/api/random/mail')
        .then(response => {
            this.generatedEmail = response.data.response 

        })
    }

})