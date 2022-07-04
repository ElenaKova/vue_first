let app = new Vue({
    el: '#app',
    data: {
        first: 'Click',
        second: "on"
    },
    methods: {
        increament(value) {
            this.value = value;
            if (value == 25) 
                alert(' number is 25');
        }
    },
    computed: {
        fullMessage: function() {
           return  this.first + ' ' + this.second; 
        } 
    }
});