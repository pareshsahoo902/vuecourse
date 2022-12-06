import { createApp } from 'vue'
import App from './App.vue'
import Axios from 'axios'

Axios.defaults.baseURL = 'https://jsonplaceholder.typicode.com';
Axios.defaults.headers.get['demoheader'] = 'This contain demo value for post';



Axios.interceptors.request.use(
    function(config) {
        // Do something before request is sent
        config.headers.get['xaccess-token'] = 'Interceptor Header';
        return config;
    },
    function(error) {
        // Do something with request error
        return Promise.reject(error);
    },
);

Axios.interceptors.response.use(
    function(response) {
        // Any status code that lie within the range of 2xx cause this function to trigger
        // Do something with response data
        response.data = { 
            userId:0,
            body:'No content found for this API call',
            title:'Found Nothing',
            id:1 };
        return response;
    },
    function(error) {
        // Any status codes that falls outside the range of 2xx cause this function to trigger
        // Do something with response error
        return Promise.reject(error);
    },
);

createApp(App).mount('#app')

// npm i -g @vue/cli
// vue create noteapp
// npm run serve