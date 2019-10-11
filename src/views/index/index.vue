<template>
  <div class="index-box" :class="xs?'index-box-xs':'index-box-xl'">
    <!-- 轮播图 -->
    <div class="banner">
      <el-carousel :interval="3000" arrow="never" :indicator-position="bannerLists.length > 1?'':'none'">
        <el-carousel-item v-for="(item, index) in bannerLists" :key="index">
          <img class="bg" :src="item.bgUrl">
          <div class="msg">
            <img class="logo" :src="item.logoUrl">
            <div class="title">{{item.title}}</div>
            <div class="btn">{{item.btnTxt}}</div>
          </div>
        </el-carousel-item>
      </el-carousel>
    </div>
    <!-- 我们的产品 -->
    <div class="product">
      <h3>我们的产品</h3>
      <ul class="product-list clearfix">
          <router-link 
            tag="li"
            class="product-item" 
            v-for="(item, index) in productLists"
            :to="item.url" 
            :key="index"
          >
              <img :src="item.bgUrl">
              <div class="msg">
                <p class="name">{{item.name}} </p>
                <p class="abridge">{{item.abridge}}</p>
              </div>
          </router-link>
      </ul>
    </div>
    <!-- 解决方案 -->
    <div class="solve-box">
      <div class="solve">
        <h3>解决方案</h3>
        <div class="solve-content">
          <el-tabs :tab-position="xs?'top':'left'">
            <el-tab-pane :label="item.title" v-for="(item,index) in solveLists" :key="index">
              <div class="solve-msg">
                <img :src="item.url">
                <p class="top">{{item.title}}</p>
                <p class="bottom">{{item.txt}}</p>
              </div>
            </el-tab-pane>
          </el-tabs>
        </div>
      </div>
    </div>
    <!-- 合作客户 -->
    <div class="customer">
      <h3>合作客户</h3>
      <ul class="customer-list clearfix">
        <li class="customer-item" v-for="(item,index) in customerLists">
          <img :src="item.url">
        </li>
      </ul>
    </div>
    <!-- HUATECH 动态 -->
    <div class="dynamic-box">
      <div class="dynamic">
        <h3>HUATECH 动态</h3>
        <ul class="dynamic-list clearfix">
          <li class="dynamic-item clearfix" 
            v-for="(item, index) in dynamicLists"
            v-on:mouseover="dynamicActive = index"
            v-on:mouseout="dynamicActive = -1"
            :class="{'dynamic-active' : dynamicActive == index}"
          >
            <div class="item-left">
              <img :src="item.url">
            </div>
            <div class="item-right">
              <p class="title">{{item.title}}</p>
              <p class="date">{{item.date}}</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import api,{ apiHome,apiIndex } from "js/api";
import {session} from 'util/stroage'

export default {
  data() {
    return {
      // 判断屏幕大小
      xs: this.xsParent,
      // 轮播图数组
      bannerLists:[
        {
          logoUrl: require("../../assets/images/index/banner-logo.png"),
          bgUrl: require("../../assets/images/index/banner.png"),
          title: "聚生态精英 行数字之道",
          btnTxt: "立即加入",
        }
      ],
      // 我们的产品数组
      productLists:[
        {
          url:"/productDetailMatic",
          bgUrl: require("../../assets/images/index/matic.png"),
          name: "综合金融终端",
          abridge: "MATIC"
        },{
          url:"/productDetailInsight",
          bgUrl: require("../../assets/images/index/insight.png"),
          name: "行情服务",
          abridge: "INSIGHT"
        },{
          url:"/productDetailIsee",
          bgUrl: require("../../assets/images/index/isee.png"),
          name: "信用风险分析管理系统",
          abridge: "ISEE"
        },{
          url:"/productDetailLens",
          bgUrl: require("../../assets/images/index/lens.png"),
          name: "FOF投研一体化管理平台",
          abridge: "LENS"
        },{
          url:"/productDetailIncos",
          bgUrl: require("../../assets/images/index/incos.png"),
          name: "管理人服务平台",
          abridge: "INCOS"
        },{
          url:"/productDetailIbay",
          bgUrl: require("../../assets/images/index/ibay.png"),
          name: "金融数据港湾",
          abridge: "IBAY"
        },
      ],
      // 进度条位置 
      tabPosition: "left",
      // 解决方案
      solveLists:[
        { 
          url: require("../../assets/images/index/solve-icon.png"),
          title: "交易全栈解决方案",
          txt: "华泰证券依托公司业务积累和技术平台能力，为机构客户提供从行情接入、交易平台、交易引擎、极速交易系统和极速交易网络等一揽子的交易解决方案，通过金融科技赋能机构客户，提升交易体验，把握投资机会，赢得未来先机。",
        },{
          url: require("../../assets/images/index/solve-icon.png"),
          title: "资产管理综合解决方案",
          txt: "华泰证券基于多年市场实践，结合资管同业需求，推出集债券投资研究、投资管理、交易执行、运营管理、投资评价于一体的整体专业化解决方案，致力于服务银行等机构完成资产管理业务主动管理的转型升级。",
        }
      ],
      //合作客户
      customerLists:[
        {
          url: require("../../assets/images/index/customer-logo1.png")
        },
        {
          url: require("../../assets/images/index/customer-logo2.png")
        },
        {
          url: require("../../assets/images/index/customer-logo3.png")
        },
        {
          url: require("../../assets/images/index/customer-logo4.png")
        },
        {
          url: require("../../assets/images/index/customer-logo5.png")
        },
        {
          url: require("../../assets/images/index/customer-logo6.png")
        },
        {
          url: require("../../assets/images/index/customer-logo7.png")
        },
        {
          url: require("../../assets/images/index/customer-logo8.png")
        },
        {
          url: require("../../assets/images/index/customer-logo9.png")
        },
        {
          url: require("../../assets/images/index/customer-logo10.png")
        }
      ],
      // HUATECH 动态 
      dynamicLists:[
        {
          url:require("../../assets/images/index/dynamic1.png"),
          title:"科技赋能，INCOS助力合作伙伴发展！",
          date:"2019-05-22"
        },{
          url:require("../../assets/images/index/dynamic2.png"),
          title:"华泰证券行情数据传输优化实践",
          date:"2019-05-22"
        },{
          url:require("../../assets/images/index/dynamic3.png"),
          title:"2019年华泰证券科技博览会精彩回顾",
          date:"2019-05-22"
        },{
          url:require("../../assets/images/index/dynamic4.png"),
          title:"自然语言处理在金融投资领域的应用",
          date:"2019-05-22"
        }
      ],
      // HUATECH 动态鼠标放上的下表
      dynamicActive:-1,
    };
  },
  metaInfo: {
    title: "首页"
  },
  props: ['xsParent'],
  watch: {
    // 监听窗口大小判断屏幕尺寸
    xsParent: function (val) {   
      this.xs = val;
    }
  }, 
  computed: {},
  mounted() {
  },
  created(){
    // console.log({ apiHome,apiIndex })
  },
  methods: {  
  }
};
</script>

<style lang="scss" scoped>
  /* 首页 */
  .index-box{
    /* 标题公共样式 */
    %h3{
      padding-left: 20px;
      font-size: 24px;
      font-weight: bold;
      color: #000;
    }
    width: 100%;
    font-family: MicrosoftYaHei;
    box-sizing: border-box;
    /* 轮播图 */
    .banner{
      width: 100%;
      height: auto;
      cursor: pointer;
      position: relative;
      .bg{
        width: 100%;
        height: 100%;
      }
      .msg{
        position: absolute;
        top: 50%;
        box-sizing: border-box;
        width: 100%;
        left: 50%;
        transform: translate(-50% ,-60%);
        -webkit-transform: translate(-50% ,-60%);
        .logo{
          height: auto;
          width: 365px;
        }
        .title{
          font-family: FZLTXHK--GBK1-0;
          font-weight: 400;
          color:#fff;
          box-sizing: border-box;
          padding-left: 14px;
          font-size: 48px;
        }
        .btn{
          display: inline-block;
          cursor: pointer;
          font-weight:400;
          color:#fff;
          box-sizing: border-box;
          border: 1px solid #fff;
          margin-left: 14px;
          font-size:14px;
          padding: 14px 18px 14px 23px;
          margin-top: 42px;
        }
      }
    }
    /* 我们的产品 */
    .product{
      width: 100%;
      box-sizing: border-box;
      margin : 0 auto;
      padding: 70px 0 89px 0;
      h3{
        @extend %h3;
        box-sizing: border-box;
      }
      .product-list{
        margin-top: 40px;
        padding-left: 20px;
        .product-item{
          float: left;
          position: relative;
          cursor: pointer;
          width: 226px;
          img{
            width: 100%;
            height: auto;
          }
          .msg{
            position: absolute;
            color:#FFFEFE;
            text-shadow: 0px 1px 1px rgba(0, 0, 0, 0.28);
            top: 26px;
            left: 31px;
            .name{
              font-size: 16px;
              margin-bottom: 8px;
            }
            .abridge{
              font-size: 18px;
            }
          }
        }
      }
    }
    /* 解决方案 */
    .solve-box{
      width: 100%;
      background: url(../../assets/images/index/solve-bg.png) no-repeat center center;
      background-size: 100% 100%;
      .solve{
        box-sizing: border-box;
        width: 100%;
        margin: 0 auto;
        padding: 69px 0 117px 0;
        h3{
          @extend %h3;
          color: #fff;
        }
        .solve-content{
          box-sizing: border-box;
          padding-top: 54px;
          .solve-msg{
            box-sizing: border-box;
            font-size:16px;
            font-weight:400;
            color: #fff;
            line-height:26px;
            margin-top: 17px;
            position: relative;
            padding-left: 166px;
            img{
              position: absolute;
              width: 27px;
              height: 27px;
              left: 119px;
              top: 1px;
            }
            .bottom{
              padding-right: 20px;
              font-size: 14px;
              margin-top: 15px;
            }
          }
        }
      }
    }
    /* 合作客户*/
    .customer{
      width: 100%;
      box-sizing: border-box;
      margin: 0 auto;
      padding: 68px  0  106px 0;
      h3{
        @extend %h3;
      }
      .customer-list{
        margin-top: 80px;
        .customer-item{
          float: left;
          height: 90px;
          box-sizing: border-box;
          display: -moz-box;
          display: -ms-flexbox;
          display: -webkit-flex;
          display: flex;
          align-items: center;
          -webkit-box-pack: center;
          -webkit-justify-content: center;
          -ms-flex-pack: center;
          justify-content: center;
          justify-content: center;
          -webkit-box-orient: vertical;
          -webkit-box-direction: normal;
          -webkit-flex-direction: column;
          -ms-flex-direction: column;
          flex-direction: column;
          width: 20%;
          margin-bottom: 28px;
        }
      }
    }
    /* HUATECH 动态*/
    .dynamic-box{
      width: 100%;
      background: url(../../assets/images/index/dynamic-bg.png) no-repeat center center;
      background-size: 100% 100%;
      .dynamic{
        box-sizing: border-box;
        width: 100%;
        margin: 0 auto;
        padding: 68px 0 88px 0;
        h3{
          @extend %h3;
        }
        .dynamic-list{
          box-sizing: border-box;
          padding-top: 72px;
          display: flex;
          flex-wrap: wrap;
          .dynamic-item{
            flex-shrink: 0;
            display: flex;
            margin: 0 20px 20px;
            box-sizing: border-box;
            background-color: #fff;
            box-shadow:0 6px 13px 0 rgba(96,96,96,0.3);
            border-radius:4px;
            cursor: pointer;
            transition: all .2s linear;
            width: 600px;
            height: 148px;
            .item-left{
              height: 100%;
              flex-shrink: 0;
              width: 262px;
              img{
                width: 100%;
                height: 100%;
                border-radius: 4px 0px 0px 4px;
              }
            }
            .item-right{
              height: 100%;
              box-sizing: border-box;
              color: #333;
              width: 366px;
              padding: 36px 26px 0 26px;
              .title{
                font-weight: bold;
                display: -webkit-box;
                -webkit-box-orient: vertical;
                -webkit-line-clamp: 2;
                overflow: hidden;
                height: 40px;
                font-size: 18px;
                line-height: 20px;
              }
              .date{
                font-weight: 400;
                box-sizing: border-box;
                padding-left: 25px; 
                position: relative;
                font-size: 14px;
                line-height: 14px;
                margin-top: 22px;
                &:after{
                  content: "";
                  display: inline-block;
                  position: absolute;
                  left: 0px;
                  top: -2px;
                  background: url(../../assets/images/index/dynamic-date.png) no-repeat center center;
                  background-size: 100% 100%;
                  width: 15px;
                  height: 17px;
                }
              }
            }
          }
          .dynamic-item:nth-of-type(2n){
            float: right;
          }
          .dynamic-active{
            box-shadow: 0px 6px 13px 0px rgba(62,112,195,0.3);
            transform: translate3d(0, -2px, 0);
          }
        }
      }
    }
  }
  /* 首页XS */
  .index-box-xs{
    /* 轮播图XS */
    .banner{
      min-width: auto;
      .msg{
        width: 100%;
        left: 0;
        transform: translate(0,-50%);
        -webkit-transform: translate(0 ,-50%);
        .logo{
          width: 40%;
        }
        .title{
          font-size: 14px;
          margin-top: 6px;
        }
        .btn{
          font-size:12px;
          padding: 3px 8px;
          margin-top: 10px;
        }
      }
    }
    /* 我们的产品XS */
    .product{
      width: 100%;
      padding: 20px 0;
      h3{
        text-align: center;
        padding-left: 0;
      }
      .product-list{
        width: 100%;
        margin-top: 20px;
        .product-item{
          width: 50%;
          margin: 0 auto;
          .msg{
            top: 5px;
            left: 11px;
            .name{
              font-size: 14px;
              margin-bottom: 4px;
            }
            .abridge{
              font-size: 16px;
            }
          }
          &:nth-of-type(2n){
            float: right;
          }
        }
      }
    }
    /* 解决方案XS */
    .solve-box{
      .solve{
        width: 100%;
        padding: 20px 0;
        h3{
          text-align: center;
        }
        .solve-content{
          margin-top: 10px;
          padding: 0 8px;
          .solve-msg{
            padding-left: 30px;
            img{
              left: 0;
              top: 0;
            }
          }
        }
      }
    }
    /* 合作客户XS */
    .customer{
      width: 100%;
      padding: 20px 0;
      h3{
        text-align: center;
      }
      .customer-list{
        margin-top: 20px;
        .customer-item{
          width: 50%;
          margin-bottom: 10px;
          img{
            width: 75%;
            height: auto;
          }
        }
      }
    }
    /* HUATECH 动态XS */
    .dynamic-box{
      .dynamic{
        width: 100%;
        padding: 20px 0;
        h3{
          text-align: center;
        }
        .dynamic-list{
          margin-top: 20px;
          padding: 0 8px;
          .dynamic-item{
            width: 100%;
            height: 90px;
            margin-bottom: 10px;
            .item-left{
              width: 40%;
            }
            .item-right{
              width: 60%;
              padding: 10px;
              .title{
                height: 32px;
                font-size: 14px;
                line-height: 16px;
              }
              .date{
                font-size: 12px;
                line-height: 12px;
                margin-top: 15px;
              }
            }
          }
        }
      }
    }
  }
</style>
<style lang="scss" >
  /* 首页 */
  .index-box{
    /* 轮播图分页器 */
    .banner{
      .el-carousel__container{
        height: 642px;
      }
      .el-carousel__indicators{
        width: 100%;
        position: absolute;
        right: 0;
        display: flex;
        align-content: center;
        justify-content: center;
        bottom: 41px;
        .el-carousel__indicator{
          .el-carousel__button{
            background-color: #707070;
            margin-right: 10px;
            width: 40px;
            height: 3px;
          } 
        }
        .is-active{
          .el-carousel__button{
            background-color: #fff;
          }
        } 
      }
    }
    /* 解决方案标签页 */
    .solve-box{
      .el-tabs--left{
        height: 160px;
      }
      .el-tabs--left .el-tabs__header.is-left{
        margin-right: 0;
      }
      .el-tabs__active-bar{
        background-color: #FF3F3F;
      }
      .el-tabs__item{
        font-size:16px;
        font-weight:400;
        color:#fff;
        box-sizing: border-box;
        line-height: 58px;
        padding: 0 28px;
        height: 58px;
      }
      .el-tabs__nav-wrap::after {
        background-color: #5F5F5F;
      }
    }
  }
  /* 首页XS */
  .index-box-xs{
    .banner{
      .el-carousel__container{
        height: 120px;
      }
      .el-carousel__indicators{
        bottom: 5px;
        .el-carousel__indicator{
          padding: 0;
          .el-carousel__button{
            width: 25px;
            height: 2px;
          }
        }
      }
    }
    .solve-box{
      .el-tabs__nav-wrap {
        display: -moz-box;
        display: -ms-flexbox;
        display: -webkit-flex;
        display: flex;
        display: flex;
        justify-content: center;
      }
      .el-tabs__item{
        line-height: 40px;
        height: 40px;
      }
    }
  }
</style>

