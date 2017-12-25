<template>
  <div>
      <upload-btn></upload-btn>
      <preview></preview>
  </div>
</template>

<script>
import uploadBtn from './upload'
import preview from './Preview'
export default {
  components:{
    uploadBtn,
    preview
  }
}
</script>

