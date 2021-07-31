<!-- 日历的区间 -->
<template>
  <div class="vcc-calendar-card-range">
    <date-time v-model="templateValue"
               :has-next="getShow"
               :show-month.sync="oneMonth"
               :show-year.sync="oneYear"
               type="dateInterval">
    </date-time>
    <date-time
      v-model="templateValue"
      :has-prev="getShow"
      :show-month.sync="twoMonth"
      :show-year.sync="twoYear"
      type="dateInterval"
      @change="twoChange">
    </date-time>
  </div>
</template>

<script>
import DateTime from './DateTime.vue'

export default {
  name: 'vue-calendar-card-range',
  props: {
    value: {
      type: Array,
      require: true
    }
  },
  components: {
    DateTime
  },
  computed: {
    templateValue: {
      get() {
        return this.value
      },
      set(val) {
        this.$emit('input', val)
      }
    },
    // 判断是否显示
    getShow() {
      if (this.oneYear === this.twoYear && this.twoMonth === this.oneMonth + 1) {
        return false
      } else if (this.oneYear === this.twoYear - 1 && this.twoMonth === 0 && this.oneMonth === 11) {
        return false
      }
      return true
    }
  },
  data() {
    return {
      oneYear: 1998,
      oneMonth: 1,
      twoYear: 1998,
      twoMonth: 2
    }
  },
  methods: {
    twoChange(val) {
      console.log(val)
    },
  },
  created() {
    // 初始化
    if (this.value.length === 2) {
      this.oneYear = this.value[0].getFullYear()
      this.oneMonth = this.value[0].getMonth()
      this.twoYear = this.value[1].getFullYear()
      this.twoMonth = this.oneYear === this.twoYear && this.value[1].getMonth() === this.oneMonth ? this.oneMonth + 1 : this.value[1].getMonth();
    } else {
      this.oneYear = new Date().getFullYear()
      this.oneMonth = new Date().getMonth()
      if (this.oneMonth === 11) {
        this.oneYear = this.oneYear + 1
        this.oneMonth = 0
      } else {
        this.twoYear = this.oneYear
        this.twoMonth = this.oneMonth + 1
      }
    }
  }
}
</script>
