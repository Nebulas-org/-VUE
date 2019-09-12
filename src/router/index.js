import Vue from 'vue'
import { routes } from './routes'
import Router from 'vue-router'


Vue.use(Router)

export default new Router({
  routes,
  mode:'history',
  // 加载路由滚动位置
  scrollBehavior(to, from, savedPosition){
    if(savePosition){
      return savePosition
    }else{
      if(to.hash){
        return{
          selector:to.hash
        }
      }else{
        return {x:0,y:0}
      }
    }
  }
})
