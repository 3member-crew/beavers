import { createApp } from 'vue';
import App from './MemoryGame.vue';
import router from './router';
<<<<<<< HEAD
=======
import { GameStore, GameStoreKey } from './stores'
>>>>>>> cd2c31befe1d30d5895237e44ff6526f8e7df1d1

createApp(App)
    .use(GameStore, GameStoreKey)
    .mount('#app');
