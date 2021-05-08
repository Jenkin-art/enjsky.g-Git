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
    redirect: '/index/recommend/', // app打开之后 默认跳转到首页的推荐标签栏
  },
  {
    path: '/index',
    redirect: '/index/recommend/', // app打开之后 默认跳转到首页的推荐标签栏
  },
  {
    path: '/',
    name: 'Home',
    component: Home,
    children: [
      {
        path: '/index', // 首页页面路由
        name: 'index',
        component: () => import(/* webpackChunkName: "Index" */ '../views/index/Index.vue'),
        children: [
          {
            path: 'follows', // 关注页面路由
            name: 'follows',
            component: () => import(/* webpackChunkName: "Follows" */ '../views/follow/Follows.vue'),
            children: [
              {
                path: 'reVidelList', // 视频页面路由
                name: 'reVidelList',
                component: () => import(/* webpackChunkName: "reVidelList" */ '../common/components/index/VideoList.vue'),
              },
            ],
          },
          {
            path: 'recommend', // 推荐页面路由
            name: 'recommend',
            component: () => import(/* webpackChunkName: "Recommend" */ '../views/recommend/Recommend.vue'),
            children: [
              {
                path: 'reVidelList', // 视频页面路由
                name: 'reVidelList',
                component: () => import(/* webpackChunkName: "reVidelList" */ '../common/components/index/VideoList.vue'),
              },
            ],
          },
        ],
      },
      {
        path: '/friends', // 朋友页面路由
        name: 'friends',
        component: () => import(/* webpackChunkName: "fllow" */ '../views/friends/Friends.vue'),
      },
      {
        path: '/news', // 消息页面路由
        name: 'news',
        component: () => import(/* webpackChunkName: "news" */ '../views/news/News.vue'),
      },
      {
        path: '/me', // 我的信息页面路由
        name: 'me',
        component: () => import(/* webpackChunkName: "me" */ '../views/me/Me.vue'),
      },
    ],
  },
  // {
  //   path: '/sign',
  //   name: 'Sign',
  //   component: () => import(/* webpackChunkName: "sign" */ '../views/Sign'),
  // },
  // {
  //   path: '/tpsign',
  //   name: 'TPSign',
  //   component: () => import(/* webpackChunkName: "sign" */ '../views/TPSign'),
  // },
  // {
  //   path: '/code',
  //   name: 'Code',
  //   component: () => import(/* webpackChunkName: "sign" */ '../views/Code'),
  // },
  // {
  //   path: '/edit',
  //   name: 'edit',
  //   component: () => import(/* webpackChunkName: "edit" */ '../views/me/Edit.vue'),
  // },
  {
    path: '/issue', // 发布页面路由
    name: 'issue',
    component: () => import(/* webpackChunkName: "issue" */ '../views/issue/Issue.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
