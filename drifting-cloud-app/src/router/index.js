/*
路由配置
author:enjsky.g
time:2021-04-29
webpackChunkName: "index"作用修改打包之后的js文件名
为什么使用嵌套路由？
当前项目，在进入主页之后有多个功能页面，
然后当选择其中一个功能页面之后进入对应的页面，
这个时候我们就可以用到嵌套路由。
官方文档中给我们提供了一个 children 属性，
这个属性是一个数组类型，里面实际放着一组路由；
这个时候父子关系结构就出来了，
所以 children属性里面的是路由相对来说是children 属性外部路由的子路由。
*/

import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    redirect: '/index/recommend/',
  },
  {
    path: '/index',
    redirect: '/index/recommend/',
  },
  {
    path: '/',
    name: 'Home',
    component: Home,
    children: [
      {
        path: '/index',
        name: 'index', // 首页页面
        component: () => import(/* webpackChunkName: "index" */ '../views/index/index.vue'),
        children: [
          {
            path: 'follows',
            name: 'follows', // 关注页面
            component: () => import(/* webpackChunkName: "follows" */ '../views/follow/index.vue'),
            children: [
              {
                path: 'reVideoList',
                name: 'reVideoList', // 视频列表
                component: () => import(/* webpackChunkName: "VideoList" */ '../common/components/index/VideoList.vue'),
              },
            ],
          },
          {
            path: 'recommend',
            name: 'recommend', // 推荐
            component: () => import(/* webpackChunkName: "recommend" */ '../views/recommend/index.vue'),
            children: [
              {
                path: 'reVideoList',
                name: 'reVideoList', // 视频列表
                component: () => import(/* webpackChunkName: "VideoList" */ '../common/components/index/VideoList.vue'),
              },
            ],
          },
        ],
      },
      {
        path: '/friends',
        name: 'friends', // 朋友页面
        component: () => import(/* webpackChunkName: "friends" */ '../views/friends/index.vue'),
      },
      {
        path: '/news',
        name: 'news', // 消息页面
        component: () => import(/* webpackChunkName: "news" */ '../views/news/index.vue'),
      },
      {
        path: '/mine',
        name: 'mine', // 我的页面
        component: () => import(/* webpackChunkName: "mine" */ '../views/mine/index.vue'),
      },
    ],
  },
  {
    path: '/release',
    name: 'release', // 发布页面
    component: () => import(/* webpackChunkName: "release" */ '../views/release/index.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
