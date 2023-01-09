import {createApp} from 'vue'
import App from './App.vue'
import state from './store/state';
import router from "@/router/router";
import './assets/main.css'
// import withUUID from 'vue-uuid';

createApp(App)
    .use(state)
    .use(router)
    .mount('#app')
