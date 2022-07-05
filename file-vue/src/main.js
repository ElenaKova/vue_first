import Vue from 'vue';
import App from './App.vue';
import Example from './Example.vue';
import Header from './Header.vue';
import Block from './Block.vue';

// Vue.component('app-example', Example);
Vue.component('app-Header', Header);
Vue.component('app-Block', Block);

new Vue({
  el: '#app',
  render: h => h(App)
});
