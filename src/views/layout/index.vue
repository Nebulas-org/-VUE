<template>
  <div id="layout">
    <!-- 公共头部 -->
    <header class="header" :class="xsParent?'header-xs':'header-xl'">
      <div class="top clearfix" style="padding-left: 30px;">
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
      <div class="service-box">
        <h3>合作用户</h3>
        <ul class="service-list">
          <li class="service-item" v-for="(img, index) in serviceData" :key="index">
            <p class="title">{{img.name}}</p>
            <img :src="img.url" alt="">
          </li>
        </ul>
      </div>
      <a name="aboutUs" style="display: block;">
        <div class="contain">
          <ul class="contact-box">
            <li @click="handleDialog('about')">
              <el-button type="text">关于我们</el-button>
            </li>
            <li @click="handleDialog('purpose')">
              <el-button type="text">
                <span class="double">我们的宗旨</span>
              </el-button>
            </li>
            <li @click="handleDialog('contact')">
              <el-button type="text">联系我们</el-button>
            </li>
          </ul>
          <p class="bei-an">蜀ICP备19037210号</p>
        </div>
      </a>

    </footer>
    <el-dialog
      append-to-body
      class="dialog-content"
      :title="dialogTitle"
      :visible.sync="dialogWeVisible">
      <template v-if="showDialogCode === 'about'">
        <div>
          <p>拾星云科技成都有限公司（简称：拾星云科技）成立于2019年6月，注册资本300万。公司总部位于素有天府之国之称的成都，坐落于高新技术产业区，
            拥有独立的研发团队，集各类优秀人才，完成多个中大型研发与设计类项目，涵盖建筑，服务等行业。公司座于西南中心，致力于服务全国客户。
          </p>
          <p>我司坚持以客户的需求为根本，以市场为导向，努力实现更好更优秀的产品，来让客户满意，让产品生产市值。</p>
          <p>润物无声，产物咸丰！拾星云科技与您共建智慧美好未来！</p>
        </div>
      </template>
      <template v-if="showDialogCode === 'purpose'">
        <div>
          <p>我们的宗旨是研发、生产和销售那些在创新、技术还是技术方面都属于优秀水品的产品。</p>
          <p>我们与客户紧密合作"从点子直至成品"，实践证明这是实现双赢的正确策略，
            我们向您提供符合你期望、技术成熟、经济实惠的产品解决方案。为了实现您的要求，我们富有经验的专业团队非常乐意随时为您服务。
          </p>
          <p>对产品适用领域的只是以市场为导向的研发、高技术的专业人员，甄选的供应商，保证了我们为您的特殊应用制造出的高品质产品，
            同时为我们产品和五福的高质量和安全标准提供了保证
          </p>
          <p>无论是现在是未来，我们都支持客户的产品以市场为导向、长信的产品解决方案。作为您的合作伙伴，我们很愿意和您一起为满足未来的要求寻找满意的解决方案。</p>
        </div>
      </template>
      <template v-if="showDialogCode === 'contact'">
        <div>
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
      </template>
    </el-dialog>
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
        dialogTitle: '',
        showDialogCode: null,
        dialogWeVisible: false,
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
        }, {
          name: '华为云',
          url: require("../../assets/images/footer/2.png"),
        }, {
          name: '腾讯云',
          url: require("../../assets/images/footer/6.png"),
        }, {
          name: '华西集团',
          url: require("../../assets/images/footer/3.png"),
        }, {
          name: '建研BIM云',
          url: require("../../assets/images/footer/4.png"),
        }, {
          name: '垒知科技集团',
          url: require("../../assets/images/footer/5.jpg"),
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
      handleDialog(code) {
        this.showDialogCode = code
        this.dialogWeVisible = true
        this.dialogTitle = code === 'about' ? '关于我们' : code === 'purpose' ? '我们的宗旨' : '联系我们'
      },
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
    .service-box {
      flex: 3;
      margin-left: 20px;
      margin-top: 20px;
      padding-bottom: 20px;
      h3 {
        @extend %h3;
        color: #000;
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

    .contain {
      background: #272C37;
      margin: 0 auto;
      box-sizing: border-box;
      font-family: MicrosoftYaHei;
      width: 100%;
      padding: 40px 20px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      .bei-an {
        color: #dad3d3;
        font-size: 14px;
      }
      .contact-box {
        display: flex;
        h3 {
          @extend %h3;
        }
        li {
          button {
            color: #fff;
          }
        }
        .double {
          border-left: 1px solid #fff;
          border-right: 1px solid #fff;
          margin: 0 10px;
          padding: 0 10px;
        }
      }
    }
  }
  .dialog-content {
    /deep/ .el-dialog__body {
      padding-top: 0;
    }
    p {
      text-indent: 30px;
      line-height: 30px;
      margin: 10px 0;
      color: #000;
    }
    .contact-box-item {
      color: #000;
      margin: 20px 0;
    }
  }
</style>
