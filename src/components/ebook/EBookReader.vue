<template>
  <div class="ebook-reader">
    <div id="read"></div>
  </div>
</template>

<script>
  export default {
    name: 'EBookReader',
    mounted() {
      const fileName = this.$route.params.fileName
      console.log(fileName)
    },
  }
</script>