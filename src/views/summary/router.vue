<template>
  <div>
    <vue-markdown :source="md">
      <!-- {{md}} -->
    </vue-markdown>
    <!-- <mavon-editor v-model="md" :toolbars="toolbars" style="">
    </mavon-editor> -->
  </div>
</template>

<script>
import VueMarkdown from 'vue-markdown'
import demoTwo from './router.md'
import 'prismjs'

export default {
  name: 'Router',
  components: {
    VueMarkdown
  },
  data() {
    return {
      md: demoTwo
    }
  }
}
</script>
<style lang="scss" scoped>
  @import './../../../node_modules/prismjs/themes/prism.css';
</style>