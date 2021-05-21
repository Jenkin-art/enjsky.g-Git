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
        <!-- 图标 -->
          <div class="search_i"><i class="iconfont icon-icon_search"></i></div>
          <div class="search_input">
            <span>搜索</span>
          </div>
      </div>
      <!-- 消息类型列表 -->
      <div class="msg_type_list">
        <ul>
          <li class="msg_item">
            <!-- 消息图标 -->
            <div class="msg_item_icon fensi">
              <i class="iconfont icon-fensi-01"></i>
            </div>
            <!-- 消息内容 -->
            <div class="msg_item_content">
              <!-- 消息左侧文本内容 -->
              <div class="content_left">
                <span class="content_left_title">粉丝</span>
                <span class="content_left_head">小豆豆关注了你</span>
              </div>
              <!-- 右侧图标 -->
              <div class="content_right">
                <i class="iconfont icon-youce"></i>
              </div>
            </div>
          </li>
          <li class="msg_item">
            <!-- 消息图标 -->
            <div class="msg_item_icon hudong">
              <i class="iconfont icon-biaoqiankuozhan_hudong-189"></i>
            </div>
            <!-- 消息内容 -->
            <div class="msg_item_content">
              <!-- 消息左侧文本内容 -->
              <div class="content_left">
                <span class="content_left_title">互动消息</span>
                <span class="content_left_head">深圳第二教室笛子小王子回复了你的评论</span>
              </div>
              <!-- 右侧图标 -->
              <div class="content_right">
                <i class="iconfont icon-youce"></i>
              </div>
            </div>
          </li>
          <li class="msg_item">
            <!-- 消息图标 -->
            <div class="msg_item_icon tongzhi">
              <i class="iconfont icon-tongzhi"></i>
            </div>
            <!-- 消息内容 -->
            <div class="msg_item_content">
              <!-- 消息左侧文本内容 -->
              <div class="content_left">
                <span class="content_left_title">系统通知</span>
                <span class="content_left_head">抖音直播 2021-05-21</span>
              </div>
              <!-- 右侧图标 -->
              <div class="content_right">
                <!-- <i class="iconfont icon-youce"></i> -->
              </div>
            </div>
          </li>
          <li class="msg_item">
            <!-- 消息图标 -->
            <div class="msg_item_icon xiaoxi">
              <i class="iconfont icon-xiaoxi"></i>
            </div>
            <!-- 消息内容 -->
            <div class="msg_item_content">
              <!-- 消息左侧文本内容 -->
              <div class="content_left">
                <span class="content_left_title">商家服务通知</span>
                <span class="content_left_head">成功添加心愿单.2021-05-21</span>
              </div>
              <!-- 右侧图标 -->
              <div class="content_right">
                <!-- <i class="iconfont icon-youce"></i> -->
              </div>
            </div>
          </li>
          <li class="msg_item">
            <!-- 消息图标 -->
            <div class="msg_item_icon tongxunlu">
              <i class="iconfont icon-tongxunlu"></i>
            </div>
            <!-- 消息内容 -->
            <div class="msg_item_content">
              <!-- 消息左侧文本内容 -->
              <div class="content_left">
                <span class="content_left_title">查看通讯录朋友</span>
                <span class="content_left_head">看看有谁在抖音</span>
              </div>
              <!-- 右侧图标 -->
              <div class="content_right">
                <i class="iconfont icon-youce"></i>
              </div>
            </div>
          </li>
        </ul>
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
    height: 568px;
    padding: 0 20px;
    color: #ffffff;
    // background-color: #101821;
    .msg_search
    {
      height: 45px;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      background: #3A3A44;
      margin: 10px 0;
      border-radius: 5px;
      .search_i
      {
        padding: 0 10px;
        .iconfont{
          font-size: 18px;
          color: #95959F;
        }
      }
      .search_input
      {
        span{
          font-size: 15px;
          color: #95959F;
        }
      }
    }
    // 消息列表
    .msg_type_list{
      border-top: 1px solid #1E202C;
      .msg_item{
        display: flex;
        justify-content: start;
        align-items: center;
        margin: 10px 0;
        .msg_item_icon{
          width: 60px;
          height: 60px;
          border-radius: 50%;
          margin: 0 5px;
          .iconfont{
            font-size: 35px;
            display: flex;
            justify-content: center;
            align-items: center;
            padding: 5px;
            color: #DDE8FF;
          }
        }
        // 粉丝
        .fensi{
          background: #5DA1F7;
        }
        // 互动
        .hudong{
          background: #F967A7;
        }
        // 通知
        .tongzhi{
          background: #FC2C5C;
        }
        // 消息
        .xiaoxi{
          background: #5C90F7;
        }
        // 通讯录
        .tongxunlu{
          background: #232531;
        }
        .msg_item_content{
              height: 80px;
              width: 275px;
              display: flex;
              justify-content: space-between;
              align-items: center;
              border-bottom: 1px solid #1E202C;
          .content_left{
            display: flex;
            flex-direction: column;
            margin: 10px;
            .content_left_title{
              font-size: 18px;
              padding: 5px 0;
            }
            .content_left_head{
              font-size: 15px;
              white-space: nowrap;
              text-overflow: ellipsis;
              overflow: hidden;
              word-break: break-all;
              width: 140px;
              color: #898B97;
            }
          }
          .content_right{
            .iconfont{
              font-size: 15px;
              color: #E4E5E5;
            }
          }
        }
      }
    }
  }
}
</style>
