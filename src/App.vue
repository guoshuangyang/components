<template>
  <div id="app">
    <date-time/>
  </div>
</template>

<script>
import DateTime from "./dateTime/DateTime";
export default {
  name: 'app',
  components: {
    DateTime
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
    }
  }
}
</script>

<style lang="scss">

</style>
