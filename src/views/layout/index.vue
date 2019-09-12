<template>
  <div id="layout">
    <!-- 公共头部 -->
    <header class="header" :class="xsParent?'header-xs':'header-xl'">
      <div class="top clearfix">
        <router-link tag="div" to="/index" class="logo">
        <img src="../../assets/images/logo.png">
        <span class="logo-top">数字服务 • 华泰证券</span>
        <span class="logo-bottom">HUATAI SECURITIES</span>
        </router-link>
        <span class="nav-btn" @click="navShow" v-show="xsParent">
          <i class="el-icon-menu"></i>
        </span>
        <ul class="nav-list clearfix" :class="{'nav-list-active': navFlag&&xsParent}">
          <li :class="{'nav-active':routeName == 'index'}"><router-link to="/index">首页</router-link></li>
          <li :class="{'nav-active':routeName == 'productDetail'}"><router-link to="/productDetail">产品</router-link></li>
          <li :class="{'nav-active':routeName == 'solve'}"><router-link to="/solve">解决方案</router-link></li>
          <li :class="{'nav-active':routeName == 'document'}"><router-link to="/document">文档中心</router-link></li>
          <li :class="{'nav-active':routeName == 'dynamics'}"><router-link to="/dynamics">HUATECH动态</router-link></li>
          <li :class="{'nav-active':routeName == 'coalition'}"><router-link to="/coalition">数字金融共建联盟</router-link></li>
          <li :class="{'nav-active':routeName == 'aboutUs'}"><router-link to="/aboutUs">关于我们</router-link></li>
        </ul>
      </div>
      <!-- 搜索登录注册 -->
       <div class="top-left" v-show="false">
        <span :class="{'search':true,'search-active':searchFlag}">
            <input type="text" maxlength="50" ref="keywords" @keyup.enter="search" :class="{'search-txt':true,'search-txt-active':searchFlag}"><span class="search-btn" @click="search"></span>
        </span>
        <span class="login">登录</span>
        <span class="register">注册</span>
      </div>
    </header>


    <!-- 咨询建议 -->
     <div class="suggest" v-show="false">
      <img class="img" src="../../assets/images/suggest.png">
      <p class="txt">咨</p>
      <p class="txt">询</p>
      <p class="txt">建</p>
      <p class="txt">议</p>
    </div>

    <!-- 内容 -->
     <keep-alive include="project">
      <router-view v-if="$route.meta.keepAlive" :xsParent="xsParent"></router-view>
    </keep-alive>
    <router-view v-if="!$route.meta.keepAlive" :xsParent="xsParent"></router-view>

    <!-- 公共底部 -->
    <footer class="footer" :class="xsParent?'footer-xs':'footer-xl'">
      <div class="contain clearfix">
        <div class="contact-box">
          <h3>联系我们</h3>
          <ul class="contact-list">
            <li class="contact-item ">
              <img src="../../assets/images/mail.png">digi_tech_supp@htsc.com
            </li>
            <li class="contact-item ">
              <img src="../../assets/images/addr.png">江苏省南京市江东中路228号
            </li>
          </ul>
        </div>
        <div class="service-box">
          <h3>产品与服务</h3>
          <ul class="service-list">
            <li class="service-item">综合金融终端MATIC</li>
            <li class="service-item">INSIGHT行情服务</li>
            <li class="service-item">信用风险分析管理系统</li>
            <li class="service-item">FOF投研一体化管理平台LENS</li>
            <li class="service-item">INCOS管理人服务</li>
            <li class="service-item">金融数据港湾iBay</li>
          </ul>
        </div>
        <div class="qrcode-box">
          <h3>关注我们</h3>
          <img src="../../assets/images/qrcode.png">
          <p>华泰证券数字科技</p>
        </div>
      </div>
    </footer>
  </div>
</template>



<script>
import {session} from 'util/stroage.js'
import {mapState,mapMutations} from 'vuex'
import api from 'common/api.js'
export default {
  // 路由变化，页面刷新
  inject:["reload"],
  data(){
    return{
      // 判断屏幕大小
      xsParent:false,
      // 路径名称
      routeName:this.$route.name,
      // 判断搜索是否显示
      searchFlag:false,
      // 判断移动端菜单是否显示
      navFlag:true
    }
  },
  mounted(){
    // 判断窗口大小
    this.isXs();
  },
  watch:{
    $route(to,from){
      if(this.routeName!=to.name){
        this.navFlag=true;
        this.isXs();
      }
    }
  },
  methods:{
    // 判断窗口大小
    isXs(){
      this.xsParent=document.body.clientWidth<768;
      // 监听窗口大小判断屏幕尺寸
      window.onresize=()=>{
        return (()=>{
          this.xsParent=document.body.clientWidth<768;
        })()
      }
    },
    // 判断搜索是否显示
    search(){
      if(this.searchFlag){
        this.searchFlag=false;
      }else{
        this.searchFlag=true;
      }
    },
    // 判断移动端菜单是否显示
    navShow(){
      if(this.navFlag){
        this.navFlag=false;
      }else{
        this.navFlag=true;
      }
    }
  },
  updated(){
    this.routeName=this.$route.name;
  }
}
</script>



<style lang="sass" scoped>

</style>
