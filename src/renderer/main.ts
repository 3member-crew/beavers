import { createApp } from 'vue';
import App from './MemoryGame.vue';
import router from './router';
import { GameStore, GameStoreKey } from './stores'

createApp(App)
    .use(GameStore, GameStoreKey)
    .mount('#app');
