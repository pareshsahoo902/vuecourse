import { createApp } from 'vue'
import App from './App.vue'
import store from './store'

createApp(App).use(store).mount('#app')

// npm i -g @vue/cli
// vue create noteapp
// npm run serve