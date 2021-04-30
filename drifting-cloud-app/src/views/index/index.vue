/*
首页
author:enjsky.g
time:2021-04-29
*/
<template>
  <div class="home-content">
      <topBar></topBar>
      <router-view ></router-view>
  </div>
</template>

<script>
import topBar from '@/common/components/top/TopBar.vue'; // 顶部导航组件

export default {
  components: {
    topBar,
  },
};
</script>

<style lang="less" scoped>
.home-content {
  background: #000;
  height: 100vh;
}
</style>
