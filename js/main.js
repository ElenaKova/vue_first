
var app = new Vue({
    el: '#app',
    data: {
        message: 'Hello Vue!',
        styleCSS: ''
    },
    methods: {
        changeTex() {
            this.message = 'new';
        }
    }
});