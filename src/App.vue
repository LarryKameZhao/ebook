<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>
<script>
import {mapGetters} from 'vuex'

  export default {
    computed: {

    },
    mounted () {


    }
  }
  document.addEventListener('DOMContentLoaded',()=>{
    const html = document.querySelector('html')
    let fontSize = window.innerWidth / 10
    fontSize = fontSize > 50 ? 50 : fontSize
    html.style.fontSize = fontSize + 'px'
  })
</script>
<style lang="scss" scoped>
 @import "./assets/styles/fonts/global";
#app {
  width: 100%;
  height: 100%;
  overflow: hidden;
}

</style>
