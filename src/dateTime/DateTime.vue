<template>
  <div class="vcc-calendar">
    <div class="calendar-header">
      <div class="date-button-box">
        <button v-if="hasPrev" class="date-button" @click="lastYear">
          <svg
            class="icon"
            height="16"
            p-id="1835"
            t="1627129261886"
            version="1.1"
            viewBox="0 0 1024 1024"
            width="16"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M593.49806 511.096874l232.103295 231.99492c11.018133 11.018133 11.018133 28.900021 0 39.95428s-28.900021 11.018133-39.95428 0l-249.876808-249.876808c-6.032879-6.069004-8.453256-14.16101-7.83913-22.072392-0.614125-7.911381 1.770126-16.003387 7.83913-22.144641l249.876808-249.804558c11.018133-11.054258 28.900021-11.054258 39.95428 0a28.148621 28.148621 0 0 1 0 39.845904l-232.103295 232.103295z m-338.852748 0l288.602836 288.494462c11.018133 11.018133 11.018133 28.900021 0 39.954279-11.018133 11.018133-29.008396 11.018133-39.954279 0l-306.484725-306.376349c-6.032879-6.069004-8.453256-14.16101-7.839131-22.072392-0.614125-7.911381 1.770126-16.003387 7.839131-22.144641l306.484725-306.304099c10.945883-11.018133 28.900021-11.018133 39.954279 0 11.018133 11.018133 11.018133 28.900021 0 39.954279l-288.602836 288.494461z"
              p-id="1836"
            ></path>
          </svg>
        </button>
        <button v-if="hasPrev" class="date-button" @click="lastMonth">
          <svg
            class="icon"
            height="16"
            p-id="2019"
            t="1627129334992"
            version="1.1"
            viewBox="0 0 1024 1024"
            width="16"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M696.743385 224.697665l-315.804981 288.422211 315.804981 288.494461a28.148621 28.148621 0 0 1 0 39.845904c-11.018133 10.945883-28.900021 10.945883-39.954279 0l-336.107246-306.990475c-5.888379-5.888379-8.344881-13.619135-8.019756-21.34989-0.36125-7.658506 2.131377-15.389261 8.019756-21.277641l336.107246-306.990475c11.018133-10.945883 28.900021-10.945883 39.954279 0a28.083596 28.083596 0 0 1 0 39.845905z"
              p-id="2020"
            ></path>
          </svg>
        </button>
      </div>
      <div>
        {{ `${year} 年 ${month + 1} 月` }}
      </div>
      <div class="date-button-box">
        <button v-if="hasNext" class="date-button" @click="nextMonth">
          <svg
            class="icon"
            height="16"
            p-id="1199"
            t="1627129069213"
            version="1.1"
            viewBox="0 0 1024 1024"
            width="16"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M704.401891 534.469766l-336.793622 306.990475c-11.018133 10.945883-29.008396 10.945883-40.026529 0a28.148621 28.148621 0 0 1 0-39.845904l316.527482-288.494461L327.545615 224.697665a28.148621 28.148621 0 0 1 0-39.845905c11.018133-10.945883 29.008396-10.945883 40.026529 0l336.793622 306.990475c5.852254 5.888379 8.344881 13.619135 8.019756 21.277641 0.36125 7.730756-2.131377 15.461511-7.983631 21.34989z"
              p-id="1200"
            ></path>
          </svg>
        </button>
        <button v-if="hasNext" class="date-button" @click="nextYear">
          <svg
            class="icon"
            height="16"
            p-id="1383"
            t="1627129208284"
            version="1.1"
            viewBox="0 0 1024 1024"
            width="16"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M827.732731 533.169266L520.922882 839.545615c-11.126508 11.018133-29.008396 11.018133-40.02653 0-11.018133-11.018133-11.018133-28.900021 0-39.954279l288.964087-288.494462-288.964087-288.494461c-11.018133-11.018133-11.018133-28.900021 0-39.954279 11.018133-11.018133 28.900021-11.018133 40.02653 0l306.845974 306.304099c6.032879 6.141254 8.453256 14.23326 7.839131 22.144641 0.578 7.911381-1.806251 16.003387-7.875256 22.072392z m-331.555493-22.072392c0.614125 7.911381-1.770126 16.003387-7.83913 22.072392l-250.346434 249.876808c-11.018133 11.018133-28.900021 11.018133-39.954279 0-11.018133-11.018133-11.018133-28.900021 0-39.95428l232.35617-231.99492-232.320045-232.103295a28.148621 28.148621 0 0 1 0-39.845904c11.018133-11.054258 28.900021-11.054258 39.954279 0l250.346434 249.804558c6.032879 6.141254 8.417131 14.23326 7.803005 22.144641z"
              p-id="1384"
            ></path>
          </svg>
        </button>
      </div>
    </div>
    <vue-calendar-basic-table
      v-model="dateValue"
      v-bind="$attrs"
      :month="month"
      :year="year"
      class="calendar-body"
      @changeMonth="changeMonth">
    </vue-calendar-basic-table>
  </div>
</template>

<script>
export default {
  name: "vue-calendar-card",
  props: {
    value: {
      require: true
    },
    hasPrev: {
      type: Boolean,
      default: true
    },
    hasNext: {
      type: Boolean,
      default: true
    },
    showYear: {
      type: Number,
      default: () => new Date().getFullYear()
    },
    showMonth: {
      type: Number,
      default: () => new Date().getMonth()
    }
  },
  computed: {
    dateValue: {
      get() {
        return this.value
      },
      set(val) {
        this.$emit('input', val)
      }
    },
    year: {
      get(){
        return this.showYear
      },
      set(val){
        this.$emit('changeMonth',{year: val,month: this.showMonth})
        this.$emit("update:showYear",val)
      }
    },
    month: {
      get(){
        return this.showMonth
      },
      set(val){
        this.$emit('changeMonth',{year: this.showYear,month: val})
        this.$emit("update:showMonth",val)
      }
    }
  },
  methods: {
    lastYear() {
      --this.year;
    },
    lastMonth() {
      if (this.month === 0) {
        --this.year;
        this.month = 11;
      } else {
        --this.month;
      }
    },
    nextYear() {
      ++this.year;
    },
    changeMonth(item) {
      this.year = item.year;
      this.month = item.month;
    },
    nextMonth() {
      if (this.month === 11) {
        ++this.year;
        this.month = 0;
      } else {
        ++this.month;
      }
    },
  },
  created() {
    this.year = this.showYear
    this.month = this.showMonth
  },
};
</script>
