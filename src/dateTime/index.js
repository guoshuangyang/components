import DateTime from './DateTime.vue';
import VueCalendarBasicTable from './basic/table.vue'
import DateTimeRange from "./DateTimeRange";
/* istanbul ignore next */
export default {
  install(Vue) {
    Vue.component(VueCalendarBasicTable.name, VueCalendarBasicTable);//注册组件
    Vue.component(DateTime.name, DateTime);//注册组件
    Vue.component(DateTimeRange.name, DateTimeRange);//注册组件
  }
};
