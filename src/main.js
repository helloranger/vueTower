import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './views/components/remote-resource'
import VueMarkdown from 'vue-markdown'
// import mavonEditor from 'mavon-editor'; 
// import 'mavon-editor/dist/css/index.css';

import Prism from 'prismjs';
import "prismjs/themes/prism.css"
// import './styles/katex.min.css'
Vue.config.productionTip = false
// Vue.use(remoteSource)
Vue.use(VueMarkdown)
Vue.use(Prism)
new Vue({
  render: h => h(App),
  router
}).$mount('#app')
