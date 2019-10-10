import Vue from 'vue'
import App from './App'
import axios from 'axios'
import VueAxios from 'vue-axios'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faExternalLinkAlt)

Vue.use(VueAxios, axios)
Vue.use(ElementUI)

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

new Vue({
  el: '#app',
  components: { App },
  template: '<App/>'
})
