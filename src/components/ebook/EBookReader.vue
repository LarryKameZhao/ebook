<template>
  <div class="ebook-reader">
    <ebook-title/>
    <div id="read"></div>
    <ebook-menu/>
  </div>
</template>

<script>
import Epub from 'epubjs'
import EbookTitle from './EbookTitle'
import EbookMenu from './EbookMenu'
import { ebookMixin } from '../../utils/mixin'
global.ePub = Epub
  export default {
    name: 'EBookReader',
    components: {
      EbookTitle,
      EbookMenu
    },
    mixins: [ebookMixin],
    methods: {
      prevPage () {
        if (this.rendition) {
          this.rendition.prev()
          this.hideTitleAndMenu()
        }

      },
      nextPage () {
        if (this.rendition) {
          this.rendition.next ()
          this.hideTitleAndMenu()
        }
      },
      toggleTitleAndMenu () {
        // this.$store.dispatch('setMenuVisible', !this.menuVisible)
        this.setMenuVisible(!this.menuVisible)
      },
      hideTitleAndMenu () {
        // this.$store.dispatch('setMenuVisible', false)
        this.setMenuVisible(false)
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

         },{ passive: false })
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
           // if (event.cancelable) {
           //   // 判断默认行为是否已经被禁用
           //   if (!event.defaultPrevented) {
           //     event.preventDefault();
           //   }
           // }
         },{ passive: false })


      }
    },

    mounted() {
      console.log(this.$route.params.fileName)
      const fileName = this.$route.params.fileName.split('|')
    .join('/')
      this.setFileName(fileName)
        .then(() => {
          this.initEpub()
        })
    },
  }
</script>
