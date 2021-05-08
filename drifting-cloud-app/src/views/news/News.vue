/*
消息
author:enjsky.g
time:2021-04-29
*/
<template>
  <!-- 消息模块 -->
  <div class="message">
    <Header title="消息" has-right="true" right-txt="创建群聊 "></Header>
    <div class="msg-wrap">
      <!-- 消息搜索 -->
      <div class="msg_search">
        <div class="search">
          <!-- 图标 -->
          <div class="search_i"><i class="iconfont"></i></div>
          <div class="search_input">
            <input type="text">
          </div>
        </div>
      </div>
      <!-- 消息类型列表 -->
      <div class="msg_type_list">
      </div>
    </div>
  </div>
</template>

<script>
import Header from '../../common/components/header/Header.vue';

export default {
  name: 'News',
  components: { Header },
  data() {
    return {};
  },
  methods: {},
};
</script>

<style lang="less" scoped>
.message {
  height: 100%;
  .msg-wrap {
    padding: 0 20px;
    color: #ffffff;
    background-color: #101821;
    .msg-nav {
      padding: 20px 5px;
      display: flex;
      justify-content: space-between;
      .msg-nav-item {
        text-align: center;
        width: 60px;
        .icon-box {
          width: 60px;
          height: 60px;
          /*background-color: #FF4D74;*/
          border-radius: 50%;
          margin-bottom: 5px;
        }
      }
    }
    .msg-me-ad {
      display: block;
      padding: 20px 0;
      height: 100%;
      border-top: 1px solid #242630;
      border-bottom: 1px solid #242630;
      img {
        height: 80px;
        width: 100%;
      }
    }
    .download {
      padding: 20px 0;
      color: #686868;
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-bottom: 1px solid #242630;
      .btn {
        padding: 8px 25px;
        border: none;
        background-color: #fe2c55;
        color: #ffffff;
        border-radius: 2px;
      }
    }
    .msg-list-box {
      padding-top: 30px;
      .msg-list {
        display: flex;
        padding: 10px 0;
        img {
          height: 50px;
          width: 50px;
          border-radius: 50%;
        }
        .user-des {
          flex: 1;
          height: 60px;
          .top {
            font-size: 14px;
            margin-left: 10px;
            display: flex;
            justify-content: space-between;
            line-height: 30px;
          }
          .bottom {
            font-size: 14px;
            margin-left: 10px;
            display: flex;
            justify-content: space-between;
            line-height: 30px;
          }
          .bottom-msg {
            color: #666;
            align-items: center;
          }
          .no-see {
            width: 8px;
            height: 8px;
            border-radius: 50%;
            background-color: #face15;
          }
        }
      }
    }
  }
}
</style>
