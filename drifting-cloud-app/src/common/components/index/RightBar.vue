/*
右侧功能组件
author:enjsky.g
time:2021-05-06
*/
<template>
<!-- 右侧内容 -->
  <div class="right-bar">
    <div class="rightbar-item">
      <div class="avatar-border">
        <!-- 头像 -->
        <img
          src="../../../assets/images/avatar.png"
          style="width: 40px;height: 40px; border-radius: 50%"
          alt
        />
        <!-- 添加关注按钮 -->
        <span
          class="iconfont icon-jia2"
          style="color:#FE2C5A;position: absolute;left: 15px;bottom: -12px;font-size: 20px"
        ></span>
      </div>
    </div>
    <!-- 点赞图标 -->
    <div class="item-icon">
      <span class="iconfont icon-dianzan"></span>
      <p>95.9w</p>
    </div>
    <!-- 评论消息 -->
    <div class="item-icon" @click.stop="showCom($event)">
      <span class="iconfont icon-xiaoxi"></span>
      <p>285</p>
    </div>
    <!-- 转发 -->
    <div class="item-icon">
      <span class="iconfont icon-return2fanhuiyou"></span>
      <p>3027</p>
    </div>
    <!-- 音乐播放图标 -->
    <div class="rightbar-item">
      <div class="right-music">
        <img
          src="../../../assets/images/music_avatar.png"
          style="width: 30px;height: 30px;border-radius: 50%"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RightBar',
  methods: {
    showCom(e) {
      e.preventDefault();
      this.$emit('changeCom', this.showComment);
    },
  },
};
</script>

<style lang="less" scoped>
.right-bar {
  display: flex;
  width: 70px;
  flex-direction: column;
  .rightbar-item {
    height: 70px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-content: center;
    padding-bottom: 10px;
  }

  .avatar-border {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background-color: #fff;
    position: relative;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .item-icon {
    height: 60px;
    text-align: center;
    padding-bottom: 10px;
  }

  .iconfont {
    color: #ffffff;
    font-size: 30px;
  }

  p {
    color: #ffffff;
    font-size: 14px;
    padding: 0px;
    margin: 5px 0 0 0;
  }

  .right-music {
    height: 54px;
    line-height: 54px;
    width: 54px;
    background: #2e2e2e;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    animation: round 6s linear infinite;
  }

  @keyframes round {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
}
</style>
