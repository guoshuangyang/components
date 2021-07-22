import DateTime from './DateTime.vue';
/* istanbul ignore next */
export default {
    install(Vue) {
        Vue.component(DateTime.name, DateTime);//注册组件
    }
};