<template>
  <div class="block">
    <span class="demonstration">默认</span>
    <el-date-picker v-model="value1" type="date" placeholder="选择日期时间"></el-date-picker>
  </div>
</template>

<script>
export default {
  name: "DateItem",
  props: {
    msg: String,
  },
  data() {
    return {
      value1: "",
    };
  },
  created() {
    console.group("%c%s", "color:green", "---created:DateItem.vue");
  },
  beforeDestroy() {
    console.group("%c%s", "color:blue", "---beforeDestroy:DateItem.vue");
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
