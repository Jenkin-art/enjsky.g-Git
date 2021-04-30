import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import 'lib-flexible/flexible';// 实现了rem自适应布局
import './assets/styles/normalize.css';// 解决不同浏览器之间的差异
import './assets/fonts/iconfont.css';// icon图标引入

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
