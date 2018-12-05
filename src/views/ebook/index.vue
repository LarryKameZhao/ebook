<template>
  <div class="about">
    <ebook-title></ebook-title>
    <ebook-reader></ebook-reader>
    <ebook-menu></ebook-menu>
  </div>
</template>

<script>
  import EbookReader from '../../components/ebook/EBookReader.vue'
  import EbookTitle from '@/components/ebook/EbookTitle.vue'
  import EbookMenu from '@/components/ebook/EbookMenu.vue'
  import Epub from 'epubjs'
  global.epub = Epub
  export default {
    name: 'index',
    components: {
      EbookReader,
      EbookTitle,
      EbookMenu
    },
    methods: {

    }

}
</script>
