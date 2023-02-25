import { createApp } from 'vue'
import App from './App.vue'
import router from './router';
import localDB from './boot/localDB';


import { IonicVue } from '@ionic/vue';

/* Core CSS required for Ionic components to work properly */
import './theme/global.css';

import useComponents from './components';
const app = createApp(App)
.use(IonicVue)
.use(router);
useComponents(app);

app.config.globalProperties.$db = localDB;
router.isReady().then(() => {
  app.mount('#app');
});