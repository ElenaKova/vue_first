
var app = new Vue({
    el: '#app',
    data: {
        value: '',
        doubleValue: ''
    },
    methods: {
        increament(value) {
            this.value = value;
            this.doubleValue = value*2;
        }
    }
});