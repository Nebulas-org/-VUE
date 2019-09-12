import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import 'css/base.scss'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import "element-ui/lib/theme-chalk/display.css"
Vue.use(ElementUI)

// 管理头部标签
import Meta from 'vue-meta'
Vue.use(Meta)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components:{
    App,
  },
  template:'<App/>'
})
