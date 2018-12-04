<template>
  <div class="ebook-reader">
    <div id="read"></div>
  </div>
</template>

<script>
import Epub from 'epubjs'
import { mapGetters } from 'vuex'
global.ePub = Epub
  export default {
    name: 'EBookReader',
    methods: {
      prevPage () {
        if (this.rendition) {
          this.rendition.prev()
        }
      },
      nexPage () {
        if (this.rendition) {
          this.rendition.next ()
        }
      },
      toggleTitleAndMenu () {

      },
      initEpub () {
        const url = 'http://localhost:9000/epub/'
         + this.fileName + '.epub'
         console.log(url)
         this.book = new Epub(url)
         console.log(this.book)
         this.rendition = this.book.renderTo('read',{
           width: innerWidth,
           height: innerHeight
         })
         this.rendition.display ()
         this.rendition.on('touchstart', event=>{
           this.touchStartX = event.changedTouches[0].clientX
           this.touchStartTime = event.timeStamp

         })
         this.rendition.on('touchend', event => {
           const offsetX = event.changedTouches[0].clientX - this.touchStartX
           const time = event.timeStamp - this.touchStartTime
           if ( time < 500 && offsetX > 40 ) {
             this.prevPage()
           } else if ( time < 500 && offsetX < -40 ) {
             this.nextPage ()
           } else {
             this.toggleTitleAndMenu ()
           }
           if (event.cancelable) {
             // 判断默认行为是否已经被禁用
             if (!event.defaultPrevented) {
               event.preventDefault();
             }
           }
           event.stopPropagation ()
         })

      }
    },
    computed: {
      ...mapGetters(['fileName'])
    },

    mounted() {
      console.log(this.$route.params.fileName)
      const fileName = this.$route.params.fileName.split('|')
    .join('/')
      this.$store.dispatch('setFileName', fileName)
        .then(() => {
          this.initEpub()
        })
    },
  }
</script>
