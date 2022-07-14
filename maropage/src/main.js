import { createApp } from 'vue';
import App from './App.vue';
import { VueApexCharts } from 'vue3-apexcharts';

// import axios from 'axios';

// import AxiosPlugin from 'vue-axios-cors';

// createApp(App).use(AxiosPlugin);

// axios.defaults.headers.common['Content-Type'] =
//   'application/x-www-form-urlencoded';
// axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';

// createApp(App).use(router).mount('#app');
createApp(App).use(VueApexCharts).mount('#app');
