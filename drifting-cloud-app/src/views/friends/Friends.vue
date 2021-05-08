/*
朋友页面
author:enjsky.g
time:2021-04-29
*/

<template>
  <!-- 主体内容 -->
  <div class="fri_content">
    <!-- 顶部搜索栏 -->
    <div class="fri_search">
      <!-- 左侧加内容 -->
      <div class="fri_sear_left">
        <!-- 加图标 -->
        <i class="iconfont icon-jia"></i>
      </div>
      <!-- 右侧搜索内容 -->
      <div class="fri_sear_right">
        <!-- 搜索图标 -->
        <i class="iconfont icon-icon_search"></i>
        <!-- 搜索文字内容 -->
        <span class="fri_sear_right_span">抖一抖找朋友</span>
      </div>
    </div>
    <!-- 中心内容 -->
    <div class="fri_center">
      <!-- 动态内容 -->
      <div class="fri_center_active">
        <div class="active_content">
          <span class="active_content_span">暂无朋友动态</span>
        </div>
        <div class="active_flog">
          <span class="active_flog_sapn">快去寻找更多可能认识的朋友吧</span>
        </div>
      </div>
      <!-- 功能内容 -->
      <div class="fri_center_pro">
        <!-- 通讯录 -->
        <div class="pro_tongxunlu">
          <!-- 图标 -->
          <div class="pro_tongxunlu_icon">
            <i class="iconfont icon-tongxunlu"></i>
          </div>
          <!-- 通讯录文字 -->
          <div class="pro_tongxunlu_span">
            <span class="pro_tongxunlu_span_top">查看通讯录朋友</span>
            <span class="pro_tongxunlu_span_bottom">看看右谁在抖音</span>
          </div>
          <!-- 查看按钮 -->
          <div class="pro_tongxunlu_btn">
            <div class="tongxunlu_btn">查 看</div>
          </div>
        </div>
        <!-- 功能：分享二维码、扫一扫、分享口令、面对面加朋友 -->
        <div class="pro_fun">
          <ul class="pro_fun_ul">
            <li class="pro_fun_li">
              <div class="fun_li_i_left">
                <i class="iconfont fun_li_left icon-erweima"></i>
              </div>
              <div class="fun_li_span">
                <span>分享我的抖音二维码</span>
              </div>
              <div class="fun_li_i_right">
                <i class="iconfont fun_li_right icon-youce"></i>
              </div>
            </li>
            <li class="pro_fun_li">
              <div class="fun_li_i_left">
                <i class="iconfont fun_li_left icon-saoyisao"></i>
              </div>
              <div class="fun_li_span">
                <span>扫一扫添加朋友</span>
              </div>
              <div class="fun_li_i_right">
                <i class="iconfont fun_li_right icon-youce"></i>
              </div>
            </li>
            <li class="pro_fun_li">
              <div class="fun_li_i_left">
                <i class="iconfont fun_li_left icon-kouling"></i>
              </div>
              <div class="fun_li_span">
                <span>分享口令</span>
              </div>
              <div class="fun_li_i_right">
                <i class="iconfont fun_li_right icon-youce"></i>
              </div>
            </li>
            <li class="pro_fun_li">
              <div class="fun_li_i_left">
                <i class="iconfont fun_li_left icon-pengyou"></i>
              </div>
              <div class="fun_li_span">
                <span>面对面朋友</span>
              </div>
              <div class="fun_li_i_right">
                <i class="iconfont fun_li_right icon-youce"></i>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
// 主体内容
.fri_content {
  background: #000;
  color: #ffff;
  height: 100vh;
  // 顶部搜索栏
  .fri_search {
    display: flex;
    height: 55px;
    line-height: 38px;
    flex: 1;
    justify-content: space-between;
    padding: 0 0 0 6px;
    // 左侧加内容
    .fri_sear_left {
      width: 45px;
      display: flex;
      justify-content: space-around;
      padding: 9px 0;
      // 加图标
      .iconfont {
        font-size: 23px;
        color: #bebebe;
      }
    }
    // 右侧搜索内容
    .fri_sear_right {
      width: 315px;
      border: 1px solid #3f3f3f;
      background: #3f3f3f;
      margin: 8px;
      border-radius: 3px;
      // 搜索图标
      .iconfont {
        font-size: 20px;
        color: #fff;
        padding: 10px;
      }
      // 搜索文字内容
      .fri_sear_right_span {
        font-size: 16px;
        padding: 0 0 0px 5px;
      }
    }
  }
  // 中心内容
  .fri_center {
    // 动态内容
    .fri_center_active {
      height: 150px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      flex: 1;
      justify-items: center;
      .active_content {
        height: 75px;
        display: flex;
        justify-content: center;
        align-items: center;
        .active_content_span {
          display: flex;
          justify-content: center;
          color: #fff;
          font-size: 20px;
        }
      }
      .active_flog {
        height: 75px;
        .active_flog_sapn {
          display: flex;
          justify-content: center;
          color: gray;
          font-size: 15px;
        }
      }
    }
    // 功能内容
    .fri_center_pro {
      height: 370px;
      margin: 7px;
      background: #222222;
      border-radius: 5px;
      // 通讯录
      .pro_tongxunlu {
        height: 60px;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        padding: 10px 0 0 0;
        // 通讯录图标
        .pro_tongxunlu_icon {
          background: #2f2f2f;
          border-radius: 50%;
          width: 45px;
          height: 45px;
          display: flex;
          justify-content: center;
          align-items: center;
          margin: 0px 15px;
          .iconfont {
            font-size: 25px;
          }
        }
        // 通讯录文字
        .pro_tongxunlu_span {
          display: flex;
          flex-direction: column;
          .pro_tongxunlu_span_top {
            font-size: 15px;
            padding: 5px 0;
          }
          .pro_tongxunlu_span_bottom {
            font-size: 13px;
            color: gray;
          }
        }
        // 通讯录按钮
        .pro_tongxunlu_btn {
          width: 180px;
          height: 30px;
          display: flex;
          justify-content: flex-end;
          .tongxunlu_btn {
            width: 80px;
            height: 30px;
            background: red;
            display: flex;
            align-items: center;
            justify-content: center;
            margin: 0 10px;
            border-radius: 2px;
          }
        }
      }
      // 功能：分享二维码、扫一扫、分享口令、面对面加朋友
      .pro_fun {
        .pro_fun_ul {
          list-style: none;
          padding: 0;
          .pro_fun_li {
            height: 60px;
            display: flex;
            justify-content: flex-start;
            align-items: center;
            margin: 10px 0;
            // 左侧图标
            .fun_li_i_left {
              background: #2f2f2f;
              border-radius: 50%;
              width: 45px;
              height: 45px;
              display: flex;
              justify-content: center;
              align-items: center;
              margin: 0px 15px;
              .iconfont {
                font-size: 25px;
              }
            }
            // 文字
            .fun_li_span {
              width: 144px;
              font-size: 16px;
            }
            // 右侧图标
            .fun_li_i_right {
              width: 130px;
              display: flex;
              justify-content: flex-end;
              .fun_li_right {
                color: #686868;
              }
              .iconfont {
                font-size: 16px;
              }
            }
          }
        }
      }
    }
  }
}
</style>
