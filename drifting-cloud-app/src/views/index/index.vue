/*
首页
author:enjsky.g
time:2021-04-29
*/
<template>
  <div class="home-content">
    <topBar></topBar>
    <router-view  :dataList="videos"></router-view>
  </div>
</template>

<script>
import topBar from '@/common/components/top/TopBar.vue'; // 顶部导航组件

export default {
  name: 'Index',
  data() {
    return {
      videos: [// 视频数据
        {
          id: '1',
          // eslint-disable-next-line global-require
          url: require('../../../public/videos/index/01.mp4'),
          comment: [
          ],
        },
        {
          id: '2',
          // eslint-disable-next-line global-require
          url: require('../../../public/videos/index/02.mp4'),
        },
        {
          id: '3',
          url: 'http://video.jishiyoo.com/161b9562c780479c95bbdec1a9fbebcc/8d63913b46634b069e13188b03073c09-d25c062412ee3c4a0758b1c48fc8c642-ld.mp4',
        },
        {
          id: '4',
          // eslint-disable-next-line global-require
          url: require('../../../public/videos/index/03.mp4'),
        },
      ],
    };
  },
  components: {
    topBar,
  },
  mounted() {
    this.$router.push({ path: 'reVidelList' });
  },
};
</script>

<style lang="less" scoped>
.home-content {
  background: #000;
  // height: 100vh;
}
</style>
