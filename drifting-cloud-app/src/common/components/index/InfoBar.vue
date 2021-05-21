/*
视频详情信息组件
author:enjsky.g
time:2021-05-06
*/
<template>
  <div class="info-bar">
    <div class="infobar-item">小豆豆</div>
    <div class="infobar-item">小豆豆在表演</div>
    <div class="infobar-item music-item">
      <span class="iconfont icon-douyinbiaoshishang"></span>
      <div class="music-name">
        <span data-text="小豆豆的配乐唱大风吹">小豆豆的配乐唱大风吹</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'InfoBar',
};
</script>

<style lang="less" scoped>
  .info-bar {
    color: #ffffff;
    padding-left: 10px;
    font-size: 16px;
    .infobar-item {
      padding: 5px 0;
    }
    .music-item {
      display: flex;
    }
    .music-name {
      width: 200px;
      white-space: nowrap;
      overflow: hidden;
      font-size: 16px;
    }
    .music-name span {
      display: inline-block;
      animation: scroll 5s linear infinite;
      &:after{
      content: attr(data-text);
        margin-left: 40px;
      }
    }
    @keyframes scroll {
      from {
        transform: translateX(0);
      }
      to {
        transform: translateX(calc(-50% - 20px));
      }
    }
  }
</style>
