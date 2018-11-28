<template>
  <div class="about">
    <h1>This is an ab111out page</h1>
    <ebook-reader></ebook-reader>
  </div>
</template>

<script>
  import EbookReader from '../../components/ebook/EBookReader.vue'
  export default {
    name: 'index',
    components: {
      EbookReader
    }
   
}
</script>