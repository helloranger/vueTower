
<template>
  <div id="baseReport" >
    <remote-css href="https://unpkg.com/katex@0.12.0/dist/katex.min.css"></remote-css>
    <remote-css href="https://unpkg.com/katex@0.6.0/dist/katex.min.css"></remote-css>
    <!-- <remote-css href="https://cdnjs.cloudflare.com/ajax/libs/prism/1.6.0/themes/prism.min.css"></remote-css> -->
    <!-- <remote-css href="https://myCDN.com/prism@v1.x/themes/prism.css"></remote-css> -->
    <remote-js src="https://myCDN.com/prism@v1.x/components/prism-core.min.js"></remote-js>
    <remote-js src="https://myCDN.com/prism@v1.x/plugins/autoloader/prism-autoloader.min.js"></remote-js>
    <remote-js src="https://cdnjs.cloudflare.com/ajax/libs/prism/1.6.0/prism.min.js"></remote-js>
  </div>
</template>
<script>
 
export default {
    components:{
       'remote-css': {
            render(createElement) {            
              return createElement('link', { attrs: { rel: 'stylesheet', href: this.href }});
            },
            props: {
              href: { type: String, required: true },
            },
        },
        'remote-js': {
            render(createElement) {
              return createElement('script', { attrs: { type: 'text/javascript', src: this.src }});            
            },
            props: {
              src: { type: String, required: true },
            },
        },
    },
  name: "baseReport",
  data() {
    return {
    }
  },
  mounted(){
   
  },
  methods:{
 
  }
};
</script>
 
<style scoped>
</style>