<template>
  <div id="layout">
    <!-- 公共头部 -->
    <header class="header" :class="xsParent?'header-xs':'header-xl'">
      <div class="top clearfix">
        <router-link tag="div" to="/index" class="logo">
          <img src="../../assets/images/logo.png">
        </router-link>
        <span class="nav-btn" @click="navShow" v-show="xsParent">
          <i class="el-icon-menu"></i>
        </span>
        <ul class="nav-list clearfix" :class="{'nav-list-active': navFlag&&xsParent}">
          <li :class="{'nav-active':routeName == 'index'}">
            <router-link to="/index">首页</router-link>
          </li>
          <li :class="{'nav-active':routeName == 'product'}">
            <a href="#product">产品</a>
          </li>
          <li :class="{'nav-active':routeName == 'solve'}">
            <a href="#solve">上云解决方案</a>
          </li>
          <li :class="{'nav-active':routeName == 'aboutUs'}">
            <a href="#aboutUs">关于我们</a>
          </li>
        </ul>
      </div>
      <!-- 搜索登录注册 -->
      <div class="top-left" v-show="false">
        <span :class="{'search':true,'search-active':searchFlag}">
          <input type="text" maxlength="50" ref="keywords" @keyup.enter="search"
                 :class="{'search-txt':true,'search-txt-active':searchFlag}">
          <span class="search-btn" @click="search"></span>
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
      <a name="aboutUs" style="display: block;">
        <div class="contain">
          <div class="service-box">
            <h3>合作用户</h3>
            <ul class="service-list">
              <li class="service-item" v-for="(img, index) in serviceData" :key="index">
                <p class="title">{{img.name}}</p>
                <img :src="img.url" alt="">
              </li>
              <!--<li class="service-item">INSIGHT行情服务</li>-->
              <!--<li class="service-item">信用风险分析管理系统</li>-->
              <!--<li class="service-item">FOF投研一体化管理平台LENS</li>-->
              <!--<li class="service-item">INCOS管理人服务</li>-->
              <!--<li class="service-item">金融数据港湾iBay</li>-->
            </ul>
          </div>
          <div class="contact-box">
            <h3>联系我们</h3>
            <ul>
              <li class="contact-box-item flex-row align-items-center">
                <span>电话：</span>
                <span>18008085420</span>
              </li>
              <li class="contact-box-item flex-row align-items-center">
                <span>邮箱：</span>
                <span>wangyie-201@163.com</span>
              </li>
              <li class="contact-box-item flex-row align-items-center">
                <span>地址：</span>
                <span>成都市高新区天晖中街56号1栋21层2126号、2127号</span>
              </li>
            </ul>
          </div>
        </div>
      </a>

    </footer>
  </div>
</template>


<script>
  import {session} from 'util/stroage.js'
  import {mapState, mapMutations} from 'vuex'
  import api from 'common/api.js'

  export default {
    // 路由变化，页面刷新
    inject: ["reload"],
    data() {
      return {
        // 判断屏幕大小
        xsParent: false,
        // 路径名称
        routeName: this.$route.name,
        // 判断搜索是否显示
        searchFlag: false,
        // 判断移动端菜单是否显示
        navFlag: true,
        serviceData: [{
          name: '阿里云',
          url: require("../../assets/images/footer/1.png"),
        },{
          name: '华为云',
          url: require("../../assets/images/footer/2.png"),
        },{
          name: '华西集团',
          url: require("../../assets/images/footer/3.png"),
        },{
          name: '建研BIM云',
          url: require("../../assets/images/footer/4.png"),
        },{
          name: '垒知科技集团',
          url: require("../../assets/images/footer/5.jpg"),
        },{
          name: '腾讯云',
          url: require("../../assets/images/footer/6.png"),
        }]
      }
    },
    mounted() {
      // 判断窗口大小
      this.isXs();
    },
    watch: {
      $route(to, from) {
        if (this.routeName != to.name) {
          this.navFlag = true;
          this.isXs();
        }
      }
    },
    methods: {
      // 判断窗口大小
      isXs() {
        this.xsParent = document.body.clientWidth < 768;
        // 监听窗口大小判断屏幕尺寸
        window.onresize = () => {
          return (() => {
            this.xsParent = document.body.clientWidth < 768;
          })()
        }
      },
      // 判断搜索是否显示
      search() {
        if (this.searchFlag) {
          this.searchFlag = false;
        } else {
          this.searchFlag = true;
        }
      },
      // 判断移动端菜单是否显示
      navShow() {
        if (this.navFlag) {
          this.navFlag = false;
        } else {
          this.navFlag = true;
        }
      }
    },
    updated() {
      this.routeName = this.$route.name;
    }
  }
</script>


<style lang="scss" scoped>
  /* 公共底部*/
  .footer {
    /* 标题公共样式 */
    %h3 {
      font-size: 18px;
      line-height: 18px;
      font-weight: 400;
      color: #fff;
    }
    width: 100%;
    background: #272C37;
    .contain {
      margin: 0 auto;
      box-sizing: border-box;
      font-family: MicrosoftYaHei;
      width: 100%;
      padding: 46px 20px 62px 20px;
      display: flex;
      .contact-box {
        h3 {
          @extend %h3;
        }
        .contact-box-item {
          color: #fff;
          margin: 40px 0;

        }
      }
      .service-box {
        flex: 3;
        margin-left: 120px;
        h3 {
          @extend %h3;
        }
        .service-list {
          margin-top: 20px;
          display: flex;
          flex-wrap: wrap;
          .service-item {
            font-size: 14px;
            line-height: 14px;
            color: #fff;
            margin: 0 40px 20px 0;
            .title {
              margin-bottom: 10px;
            }
            img {
              display: inline-block;
              width: 200px;
              height: 50px;
            }
            &:last-child {
              margin-bottom: 0;
            }
          }
        }
      }
    }
  }
</style>
