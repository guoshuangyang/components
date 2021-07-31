<template>
  <div>
    <table class="vcc-time-table">
      <thead>
        <tr role="row">
          <th
            v-for="item in week"
            :key="item.text"
            :title="item.title"
            class="vcc-calendar-header"
          >
            <span>{{ item.text }}</span>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(row, index) in rows" :key="index">
          <td
            v-for="(item, index1) in row"
            class="row-cell"
            :key="index1"
            :title="`${item.year}年${item.month + 1}月${item.day}日`"
          >
            <div @click="clickday(item)" :class="getClass(item)" class="cell">
              {{ item.day }}
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import {
  getRows,
  isFuture,
  isSameMonth,
  isSameDate,
  isDateBefore,
  inDateInterval,
} from "../../utils/date.js";
export default {
  name: "vue-calendar-basic-table",
  props: {
    month: {
      type: [Number, String],
      require: true,
    },
    year: {
      type: [Number, String],
      require: true,
    },
    type: {
      type: [String],
      default() {
        // single value只为一个
        // dateInterval,value为数组，两个值[date1,date2]
        // selectMore value维数组，可能有多个也可能0-∞
        return "dateInterval";
      },
    },
    value: {
      type: [Array, Date],
      // require: true
    },
    // 两个date对象 date[] 临时的，比如鼠标的移动事件
    tempValue: {
      type: Array,
    },
  },
  computed: {
    rows() {
      return getRows(this.year, this.month);
    },
  },
  data() {
    return {
      week: [
        { title: "周一", text: "一" },
        { title: "周二", text: "二" },
        { title: "周三", text: "三" },
        { title: "周四", text: "四" },
        { title: "周五", text: "五" },
        { title: "周六", text: "六" },
        { title: "周日", text: "日" },
      ],
      dateArr: [],
    };
  },
  methods: {
    // 组件方法
    clickday(dayInfo) {
      let today = new Date(dayInfo.year, dayInfo.month, dayInfo.day);
      if (isFuture(today)) return;
      // 判断是不是本月，不是本月提交月份更改
      if (!isSameMonth(new Date(this.year, this.month, 1), today)) {
        this.$emit("changeMonth", dayInfo);
      }
      this.$emit("selectDate", dayInfo);
      // 判断类型是不是数组
      switch (this.type) {
        case "single":
          this.$emit("input", today);
          break;
        case "dateInterval":
          if (this.value.length === 1) {
            if (isDateBefore(this.value[0], today)) {
              // this.dateArr = [this.value[0], today];
              this.$emit("input", [this.value[0], today]);
            } else {
              // this.dateArr = [today, this.value[0]];
              this.$emit("input", [today, this.value[0]]);
            }
          } else {
            // this.dateArr = [today];
            this.$emit("input", [today]);
          }
          break;
        default:
          break;
      }
    },
    // 返回计算出来的样式
    getClass(item) {
      // 获取cell的时间
      let itemDate = new Date(item.year, item.month, item.day);
      let arr = [];
      // 判断是不是本月
      if (isSameMonth(new Date(this.year, this.month, 1), itemDate)) {
        arr.push("in-month");
        // 是不是选中的
        switch (this.type) {
          case "single":
            if (this.value && isSameDate(this.value, itemDate)) {
              arr.push("is-select");
            }
            break;
          case "dateInterval":
            if (this.value.length === 2) {
              if (inDateInterval(this.value, itemDate))
                arr.push("in-interval");
            }
            if (this.value.find((item1) => isSameDate(item1, itemDate))) {
              arr.push("is-select");
            }
            break;
          default:
            break;
        }
      } else {
        arr.push("out-month");
      }
      // 如果是未来
      if (isFuture(itemDate)) arr.push("is-future");
      if (isSameDate(itemDate)) arr.push("is-today");
      return arr;
    },
    // 做一些初始化设置
    init() {
      if (this.type === "single" && this.value) {
        this.$emit("update:year", this.value.getFullYear());
        this.$emit("update:month", this.value.getMonth());
      }
    },
  },
  created() {
    this.init();
  },
};
</script>
