import Vue from 'vue';
// 滑动特效插件
import VueSwiper from 'vue-awesome-swiper';
import 'swiper/swiper-bundle.css';
// 视频插件
import VueVideoPlayer from 'vue-video-player';
import 'video.js/dist/video-js.css';
import App from './App.vue';
import router from './router';
import store from './store';
import 'lib-flexible/flexible';// 实现了rem自适应布局
import './assets/styles/normalize.css';// 解决不同浏览器之间的差异
import './assets/fonts/iconfont.css';// icon图标引入

Vue.use(VueSwiper);
Vue.use(VueVideoPlayer);
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
