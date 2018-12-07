<template>
  <div class="setting-wrapper" v-show="false">
    <transition calss="slide-up">
         <div class="setting-font-size" >
        <div class="preview" :style="null">A</div>
        <div class="select">
          <div class="select-wrapper" >
            <div class="line"></div>
            <div class="point-wrapper">
              <div class="point" >
                <div class="small-point"></div>
              </div>
            </div>
            <div class="line"></div>
          </div>
        </div>
        <div class="preview" >A</div>
      </div>
    </transition>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        isSettingShow: true
      }
    }

  }
</script>
<style lang="scss" scoped>
@import '../../assets/styles/fonts/global.scss';
.setting-wrapper{
  position: absolute;
  bottom: px2rem(48);
  left: 0;
  width: 100%;
  height: px2rem(60);
  background:white;
  box-shadow: 0 px2rem(-8) px2rem(8) rgba(0,0,0,.15);
  .setting-font-size{

  }
}
</style>
