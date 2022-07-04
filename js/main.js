
var app = new Vue({
    el: '#app',
    data: {
        value: 1
    },
    methods: {
        increament(value) {
            this.value = value;
            if (value == 25) 
                alert(' number is 25');
        }
    },
    computed: {
        doubleValue() {
           return  this.value * 2; 
        } 
    }
});