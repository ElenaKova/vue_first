
var app = new Vue({
    el: '#app',
    data: {
        message: 'Please reverse me'
    },
    methods: {
        increament(value) {
            this.value = value;
            if (value == 25) 
                alert(' number is 25');
        }
    },
    computed: {
        reverseMessage: function() {
           return  this.message.split('').reverse().join(''); 
        } 
    }
});