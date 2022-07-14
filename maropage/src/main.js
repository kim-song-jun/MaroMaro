import { createApp } from 'vue';
import App from './App.vue';
import { VueApexCharts } from 'vue3-apexcharts';

// createApp(App).use(VueApexCharts).mount('#app');
import mitt from 'mitt'
let emitter = mitt();
let app = createApp(App);
app.config.globalProperties.emitter = emitter;
app.use(VueApexCharts)
app.mount('#app') 
