<!-- 日历的区间 -->
<template>
  <div>
      <date-time v-model="val" type="dateInterval"></date-time>
      <date-time v-model="val" type="dateInterval"></date-time>
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
    data(){
        return {
            oneYear: 1998,
            oneMonth: 1,
            twoYear: 1998,
            twoMonth: 2
        }
    },
    created(){
        if(this.value.length === 2){
            this.oneYear = value[0].getFullYear()
            this.oneMonth = value[0].getMonth()
            this.twoYear = value[1].getFullYear()
            this.twoMonth = this.oneYear === this.twoYear && value[1].getMonth() === this.oneMonth ? this.oneMonth + 1 : value[1].getMonth();
        }else{
            this.oneYear = new Date().getFullYear()
            this.oneMonth = new Date().getMonth()
            if(this.oneMonth === 11){
                this.oneYear = this.oneYear + 1
                this.oneMonth = 0
            }else{
                this.twoYear = this.oneYear
                this.twoMonth = this.oneMonth + 1
            }
        }
    }
}
</script>

<style>

</style>