h<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  // 路由变化自动刷新
  provide(){
    return {
      reload:this.reload
    }
  },
  metaInfo:{
    title:'数字门户',
    titleTemplate:'数字门户 | %s'
  },
  data(){
    return {
      isRouterAlive:true
    }
  },
  methods:{
    reload(){
      this.isRouterAlive=false
      this.$nextTick((this.isRouterAlive = true))
    }
  }
}
</script>

<style>


</style>
