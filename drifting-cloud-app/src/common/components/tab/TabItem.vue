/*
底部导航单组件
author:enjsky.g
time:2021-04-29
*/
<template>
  <div class="item" @click="itemClick">
    <router-link :to="navPath" :class="{active: isActive}" tag="span">
      {{tabTitle}}
      <slot></slot>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'TabItem',
  props: {
    tabTitle: {
      type: String,
      default: '',
    },
    navPath: {
      type: String,
      require: true,
    },
  },
  computed: {
    isActive() {
      return this.$route.path === this.navPath;
    },
  },
  methods: {
    itemClick() {},
  },
};
</script>

<style lang="less" scoped>
.item {
  flex: 1;
  text-align: center;
}
.active {
  color: #ffff;
}
</style>
