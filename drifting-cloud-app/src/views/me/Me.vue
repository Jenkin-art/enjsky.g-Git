/*
我的
author:enjsky.g
time:2021-05-07
*/
<template>
  <!-- 我的页面内容 -->
  <div class="me">
    <!-- 背景图内容 -->
    <div class="me-top" :style="bgPic">
      <!-- 右侧菜单栏 -->
      <div class="menu-box">
        <i class="iconfont icon-update"></i>
      </div>
       <div class="menu-box">
        <div class="menu-icon"></div>
      </div>
    </div>
    <!-- 信息内容 -->
    <div class="me-wrap">
      <!-- 个人信息 -->
      <div class="me-content">
        <div class="info">
          <!-- 头像 -->
          <img class="info_img" src="../../assets/images/avatar.png" alt />
          <button class="btn">编辑资料</button>
          <button class="btn">+朋友</button>
        </div>
        <!-- 标签内容 -->
        <div class="des">
          <span class="dy_name">enjsky</span>
          <span class="span_dy">私密账号 · 抖音号：xxxxxx <i class="iconfont icon-erweima"></i></span>
        </div>
        <div class="user-tag">
          <p>你还没有填写个人简介，点击添加...</p>
          <span>23岁</span>
          <span>深圳</span>
          <span>+添加学校等标签</span>
        </div>
        <!-- 人气信息 -->
        <div class="user-tag2">
          <span>
            <a>5200</a>获赞
          </span>
          <span>
            <a>150</a>关注
          </span>
          <span>
            <a>520W</a>+粉丝
          </span>
        </div>
        <div class="me-ab">
          <div class="me_ab_i"><i class="iconfont icon-gouwuche"></i></div>
          <div class="me_ab_span">
            <span class="span_title">抖音商城</span>
            <span class="span_tab">发现超值好物</span>
          </div>
        </div>
      </div>
      <!-- 个人作品收藏信息 -->
      <div class="me-tab">
        <!-- 导航栏 -->
        <div class="me-navbar">
          <div class="item" @click="changeTab(0)" :class="indexTab === 0? 'active' :'' ">作品</div>
          <div class="item" @click="changeTab(1)" :class="indexTab === 1? 'active' :'' ">私密</div>
          <div class="item" @click="changeTab(2)" :class="indexTab === 2 ? 'active' :'' ">喜欢</div>
          <div class="item" @click="changeTab(3)" :class="indexTab === 3 ? 'active' :'' ">相册</div>
        </div>
        <!-- 导航内容 -->
        <div class="tab-wrap">
          <div class="tab-con" v-show="indexTab === 0">
            <div class="tab-img">
              <img src="../../assets/images/1.jpeg" />
              <img src="../../assets/images/1.jpeg" />
              <img src="../../assets/images/1.jpeg" />
            </div>
          </div>
          <div class="tab-con" v-show="indexTab === 1">
            <div class="tab-img">
              <img src="../../assets/images/2.jpg" />
              <img src="../../assets/images/2.jpg" />
              <img src="../../assets/images/2.jpg" />
            </div>
          </div>
          <div class="tab-con" v-show="indexTab === 2">
            <div class="tab-img">
              <img src="../../assets/images/3.jpg" />
              <img src="../../assets/images/3.jpg" />
              <img src="../../assets/images/3.jpg" />
            </div>
          </div>
          <div class="tab-con" v-show="indexTab === 3">
            <div class="tab-img">
              <img src="../../assets/images/3.jpg" />
              <img src="../../assets/images/3.jpg" />
              <img src="../../assets/images/3.jpg" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Me',
  data() {
    return {
      bgPic: {
        // eslint-disable-next-line global-require
        backgroundImage: `url(${require('../../assets/images/me_bg.png')})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: '100% 100%',
      },
      indexTab: 0,
    };
  },
  methods: {
    changeTab(index) {
      this.indexTab = index;
    },
  },
};
</script>

<style lang="less" scoped>
.me {
  position: relative;
  .me-top {
    height: 160px;
    display: flex;
    justify-content: flex-end;
    padding: 20px;

    .menu-box {
      width: 30px;
      height: 30px;
      border-radius: 50%;
      background: rgba(0, 0, 0, 0.3);
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 0 4px;
      .iconfont{
        font-size: 25px;
        color: #ffffff;
      }
      .menu-icon {
        background: #ffffff;
        border-top: 2px solid #ffffff;
        background-clip: content-box;
        border-bottom: 2px solid #ffffff;
        width: 16px;
        height: 2px;
        padding: 5px 0;
      }
    }
  }
  .me-wrap {
    position: absolute;
    top: 140px;
    width: 100%;
    background-color: #101821;
    color: #ffffff;
    .me-content {
      padding: 0 10px;

      .info {
        display: flex;
        align-items: flex-start;
        justify-content: space-between;
        .info_img {
          height: 100px;
          width: 100px;
          border-radius: 50%;
          margin-right: 20px;
          position: relative;
          bottom: 25px;
        }
        button {
          height: 35px;
          width: 120px;
          margin: 15px 4px;
          background-color: #393842;
          border: none;
          color: #ffffff;
          border-radius: 5px;
        }

        button:nth-child(2) {
        }
      }

      .des {
        padding: 10px 0 0 0;
        flex-direction: column;
        display: flex;
        border-bottom: 1px solid #686868;
        .dy_name {
          font-size: 15px;
          font-weight: bold;
        }
        .span_dy{
          padding: 10px 0 10px 0;
          display: block;
          color: #686868;
          .iconfont{
            font-size: 10px;
            color: #686868;
          }
        }
      }
      .user-tag p{
        font-size: 15px;
        padding: 10px 0;
      }
      .user-tag span {
        font-size: 10px;
        color: #686868;
        margin-right: 5px;
        background: rgba(0, 0, 0, 0.6);
        padding: 5px 8px;
      }

      .user-tag2 {
        padding: 20px 0;
        color: #686868;

        span {
          font-size: 14px;
          margin-right: 15px;
        }

        a {
          margin-right: 5px;
        }
      }
      .me-ab {
        display: flex;
        .me_ab_i{
          width: 35px;
          height: 35px;
          background: #25252F;
          border-radius: 2px;
          margin: 2px 0;
          .iconfont{
            font-size: 30px;
          }
        }
        .me_ab_span{
          display: flex;
          flex-direction: column;
          justify-content: center;
          margin: 2px 5px;
          .span_title{
            font-size: 15px;
          }
          .span_tab{
            color: #686868;
            margin: 5px 0;
          }
        }
      }
    }
    .me-tab {
      height: 300px;
      .me-navbar {
        display: flex;
        padding: 0 20px;
        justify-content: center;
        align-items: center;
        .item {
          padding: 10px 25px;
          color: #686868;
          font-size: 16px;
        }
        .active {
          border-bottom: 2px solid #ffdf03;
          color: #ffffff;
        }
      }
      .tab-wrap {
        .tab-con img {
          width: 30%;
          padding: 5px;
          border-radius: 7px;
        }
      }
    }
  }
}
</style>
