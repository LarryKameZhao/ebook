<template>
  <div class="about">
    <ebook-reader></ebook-reader>
  </div>
</template>

<script>
  import EbookReader from '../../components/ebook/EBookReader.vue'
  import Epub from 'epubjs'
  global.epub = Epub
  export default {
    name: 'index',
    components: {
      EbookReader
    },
    methods: {

    }

}
</script>
