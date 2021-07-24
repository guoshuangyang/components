import App from './App.vue'
import Vue from 'vue'
import './theme/dateTime/index.scss'
Vue.config.productionTip = false;

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')