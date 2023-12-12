import Vue from 'vue';
import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import VeeValidate from 'vee-validate';

createApp(App)
    .use(VeeValidate)
    .use(router)
    .use(store)
    .mount('#app');