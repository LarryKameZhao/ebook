<template lang="html">
  <transition name="fade">
  <div class="slide-content-wrapper" v-show="menuVisible && settingVisible === 3">
    <transition name="slide-right">
    <div class="content" v-if="settingVisible === 3">
      <div class="content-page-wrapper">
        <div class="content-page">
         <component :is="currentTab === 1 ? content : null"></component>
        </div>
        <div class="content-page-tab">
          <div class="content-page-tab-item" :class="{'selected':currentTab ===1}">
            目录
          </div>
          <div class="content-page-tab-item" :class="{'selected':currentTab ===2}">
            标签
          </div>
        </div>
      </div>
    </div>
  </transition>
    <div class="content-bg" @click="hideTitleAndMenu()">
    </div>
  </div>
</transition>
</template>

<script>
import { ebookMixin } from "../../utils/mixin";
import EbookSlideContents from './EbookSlideContents';
export default {
  mixins: [ebookMixin],
  data () {
    return {
      currentTab: 1,
       content: EbookSlideContents
    }
  },
  methods: {

  }
}
</script>

<style lang="scss">
@import '../../assets/styles/fonts/global.scss';
.slide-content-wrapper {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 300;
  display: flex;
  .content {
    flex: 0 0 85%;
    width: 85%;
    height: 100%;
    background:white;
    border: 1px solid red;
    .content-page-wrapper {
      height: 100%;
      width: 100%;
      flex-direction: column;
      .content-page {
        flex: 1;
        width: 100%;
        height: 60px;
        overflow: hidden;
      }
      .content-page-tab{
        display: flex;
        flex: 0 0  px2rem(48);
        width: 100%;
        height: px2rem(48);
        background: yellow;
        .content-page-tab-item {
          flex: 1;
          font-size: px2rem(12);
          @include center;
        }
      }
    }
  }
  .content-bg {
    flex: 0 0 15%;
    width: 15%;
    height: 100%;
  }
}
</style>
