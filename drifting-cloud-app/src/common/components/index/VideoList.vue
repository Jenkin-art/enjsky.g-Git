<template>
  <div class="video-list">
    <!-- 视频内容 -->
    <swiper :options="swiperOptions">
      <swiper-slide v-for="(item,index) in dataList" :key="index">
        <div style="height: 100%;width: 100%;margin: 0 auto">
          <Videos :video="item" ref="videos" :index="index"></Videos>
        </div>
        <!-- 视频底部详情组件 -->
        <div class="info-wrap">
          <info-bar></info-bar>
        </div>
        <!-- 右侧点评快捷功能组件 -->
        <div class="rightbar_wrap">
          <right-bar @changeCom="showComs" :isshow="isShow"></right-bar>
        </div>
      </swiper-slide>
    </swiper>
    <!--评论-->
    <transition name="up">
      <div class="comment-wrap" v-if="showComment">
        <div class="comment-list">
          <div class="comment-top">
            <div class="number">15W条评论</div>
            <div class="close" @click="close">
              <span class="iconfont icon-guanbi" style="font-weight: bold;font-size: 13px"></span>
            </div>
          </div>
          <div class="comment-body">
            <!-- 评论列 -->
            <div class="comment-box">
              <div class="comment-item">
                <img class="user-pic" src="../../../assets/images/avatar-1.jpg" alt />
                <div class="item-info">
                  <div class="replay">
                    <p class="name">快乐仔逛学习</p>
                    <p
                      class="replay-des"
                    >快乐仔每天在学习</p>
                    <p class="time">03-19</p>
                  </div>
                  <div class="zan" @click="showLike">
                    <span style="text-align: center">
                      <i class="iconfont icon-xin" :class="{'active':isShow}"></i>
                      <p>10</p>
                    </span>
                  </div>
                </div>
              </div>
              <div class="sub-comment-item">
                <img class="user-pic" src="../../../assets/images/avatar-1.jpg" alt />
                <div class="item-info">
                  <div class="replay">
                    <p class="name">开心开心😊</p>
                    <p class="reply-name">学习快乐</p>
                    <p class="time">03-19</p>
                  </div>
                  <div class="zan">
                    <span style="text-align: center">
                      <i class="iconfont icon-xin" :class="{'active':isShow}"></i>
                      <p>66</p>
                    </span>
                  </div>
                </div>
              </div>
              <div class="more">展开10条回复</div>
            </div>
            <div class="comment-box">
              <div class="comment-item">
                <img class="user-pic" src="../../../assets/images/avatar-1.jpg" alt />
                <div class="item-info">
                  <div class="replay">
                    <p class="name">快乐仔逛学习</p>
                    <p
                      class="replay-des"
                    >快乐仔每天在学习</p>
                    <p class="time">03-19</p>
                  </div>
                  <div class="zan" @click="showLike">
                    <span style="text-align: center">
                      <i class="iconfont icon-xin" :class="{'active':isShow}"></i>
                      <p>10</p>
                    </span>
                  </div>
                </div>
              </div>
              <div class="sub-comment-item">
                <img class="user-pic" src="../../../assets/images/avatar-1.jpg" alt />
                <div class="item-info">
                  <div class="replay">
                    <p class="name">开心开心😊</p>
                    <p class="reply-name">学习快乐</p>
                    <p class="time">03-19</p>
                  </div>
                  <div class="zan">
                    <span style="text-align: center">
                      <i class="iconfont icon-xin" :class="{'active':isShow}"></i>
                      <p>66</p>
                    </span>
                  </div>
                </div>
              </div>
              <div class="more">展开10条回复</div>
            </div>
          </div>
          <div class="reply-input">
            <input type="text" placeholder="有爱评论，说点好听的~" />
            <span class="emoji">@</span>
            <span class="iconfont icon-emoji"></span>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import Videos from './Videos.vue';// 视频组件
import InfoBar from './InfoBar.vue';// 视频详情信息组件
import RightBar from './RightBar.vue';// 右侧功能组件

export default {
  name: 'VideoList',
  props: ['dataList'],
  components: {
    RightBar,
    Videos,
    InfoBar,
  },
  data() {
    return {
      // 是否弹出评论信息
      showComment: false,
      isShow: false, // 是否加载点赞
      swiperOptions: {
        direction: 'vertical', // 滑动方向
        grabCursor: true, // 小手掌抓取滑动
        setWrapperSize: true,
        autoHeight: true, // 当autoHeight为启用状态，设置更新swiper高度的时间。
        slidesPerView: 1, // 设置slider容器能够同时显示的slides数量(carousel模式)。
        mousewheel: true, // 开启鼠标滚轮控制Swiper切换。可设置鼠标选项，或true使用默认值。
        mousewheelControl: true,
        height: window.innerHeight - 50,
        resistanceRatio: 0, // 抵抗率。边缘抵抗力的大小比例。值越小抵抗越大越难将slide拖离边缘，0时完全无法拖离。
        observeParents: true, // 将observe应用于Swiper的祖先元素。当Swiper的祖先元素变化时，例如window.resize，Swiper更新。
        on: {
          // 播放
          tap: () => {
            this.playAction(this.page - 1);
          },
          // 上滑
          slidePrevTransitionStart: () => {
            if (this.page > 1) {
              this.page -= 1;
              this.preVideo(this.page - 1);
            }
          },
          // 下滑动
          slideNextTransitionStart: () => {
            this.page += 1;
            this.nextVideo(this.page - 1);
          },
          // 双击点赞小红心
          doubleTap: () => {
            this.isShow = true;
          },
        },
      },
      page: 1, // 标识翻页
    };
  },
  methods: {
    // 播放
    playAction(index) {
      this.$refs.videos[index].playOrStop();
    },
    // 向前
    preVideo(index) {
      this.$refs.videos[index].play();
      this.$refs.videos[index + 1].stop();
    },

    // 向后
    nextVideo(index) {
      this.$refs.videos[index].play();
      this.$refs.videos[index - 1].stop();
    },
    // 评论弹出
    showComs() {
      this.showComment = true;
    },
    // 评论关闭
    close() {
      this.showComment = false;
      this.isShow = false;
    },
    // 加载点赞
    showLike() {
      this.isShow = true;
    },
  },
};
</script>

<style lang="less" scoped>
  .video-list {
    height: 100%;
    position: relative;
    // 采用/deep/ 实现样式穿透
    /deep/ .swiper-container {
      height: 100%;
      display: flex;
      .swiper-slide {
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
      }
    }

    .info-wrap {
      position: absolute;
      left: 0;
      bottom: 10px;
    }

    .rightbar_wrap {
      position: absolute;
      box-sizing: border-box;
      right: 0;
      bottom: 0px;
      padding-top: 10px;
    }

    .comment-wrap {
      position: fixed;
      left: 0;
      bottom: 0;
      height: 500px;
      width: 100%;
      border-top-left-radius: 15px;
      border-top-right-radius: 15px;
      z-index: 999;
      padding: 10px;
      background-color: #F8F8FF;
      box-sizing: border-box;
      .comment-box {
        padding-bottom: 10px;
      }
      .comment-top {
        display: flex;
        align-items: center;
        font-weight: bold;
        font-size: 16px;
        .number {
          flex: 1;

          text-align: center;
        }

        .close {
          padding-right: 5px;
          color: #666;
        }
      }

      .comment-body {
        max-height: 400px;
        overflow: auto;
        margin-top: 15px;
        .comment-item {
          display: flex;
        }
        .sub-comment-item {
          display: flex;
          margin-left: 33px;
          margin-top: 10px;

          .re-name {
            padding: 0 10px;
            color: #686868;
          }
        }

        .user-pic {
          width: 33px;
          height: 33px;
          border-radius: 50%;
        }

        .item-info {
          margin-left: 10px;
          display: flex;
          flex: 1 auto;

          .replay {
            width: 90%;
          }

          .replay-des, .reply-name {
            font-size: 14px;
            line-height: 20px;
          }

          .name {
            color: #686868;
            font-size: 13px;
          }

          .time {
            color: #686868;
          }

          .zan {
            color: rgb(205, 205, 205);
            display: flex;
            .icon-xin {
              font-size: 20px;
            }
            .active {
              color: red;
            }
            p {
              font-size: 15px;
            }
          }
        }

        .more {
          margin-left: 30px;
        }
      }

      .reply-input {
        width: 100%;
        height: 50px;
        border-top: 1px solid #d9d9d9;
        position: absolute;
        bottom: 0;
        left: 0;
        align-items: center;
        display: flex;
        background-color: #fff;
        input {
          line-height: 40px;
          width: 70%;
          padding: 0 10px;
        }

        input:focus {
          border: none;
        }

        .emoji {
          margin: 0 10px;
        }

        .emoji, .iconfont {
          font-size: 30px;
          color: #686868;
        }

      }

    }
  }

</style>
