<template>
  <div>
    <transition class="slide-down">
      <div class="menu-wrapper" v-show="menuVisible">
        <div class="icon-wrapper">
          <span class="icon-menu"></span>
        </div>
        <div class="icon-wrapper">
          <span class="icon-progress"></span>
        </div>
        <div class="icon-wrapper">
          <span class="icon-bright"></span>
        </div>
        <div class="icon-wrapper">
          <span class="icon-A" @click="showSetting"></span>
        </div>
      </div>
    </transition>
    <ebook-setting-font></ebook-setting-font>
  </div>
</template>

<script>
import { ebookMixin } from "../../utils/mixin";
import EbookSettingFont from './EbookSettingFont'
export default {
  name: 'EbookMenu',
  mixins: [ebookMixin],
  components: {
    EbookSettingFont,
  },
  methods: {
    showSetting () {
      // this.isSettingShow = true
    }

  }
};
</script>

<style lang="scss" scoped>
@import "../../assets/styles/fonts/global.scss";
.menu-wrapper {
  position: absolute;
  bottom: 0;
  left: 0;
  z-index: 101;
  display: flex;
  width: 100%;
  height: px2rem(48);
  background: white;
  box-shadow: 0 px2rem(-8) px2rem(8) rgba(0, 0, 0, 0.15);
  font-size: px2rem(20);
  .icon-wrapper {
    flex: 1;
    @include center;
    .icon-bright {
      font-size: px2rem(24);
    }
    .icon-progress {
      font-size: px2rem(28);
    }
  }
  // &.slide-down-enter,&.slide-down-leave-to{
  //   transform: translate3d(0, -100%, 0);
  // }
  // &.slide-down-enter-to,&.slide-down-leave{
  //   transform: translate3d(0,0,0)
  // }
  // &.slide-down-enter-active,&.slide-down-leave-active{
  //   transition: all .3s linear;
  // }
}
</style>
