<template>
  <div class="product-detail-insight-box" :class="xs?'product-detail-insight-box-xs':'product-detail-insight-box-xl'">
    <!-- banner图 -->
    <div class="banner-box">
      <div class="banner">
        <p class="top">INSIGHT行情服务</p>
        <p class="bottom">极速行情，快人一步</p>
      </div>
    </div>
    <!-- 内容 -->
    <div class="product-detail-insight-contain">
      <!-- nav导航 -->
      <div class="nav">
        <ul class="nav-list clearfix">
          <li class="nav-line" :style="[{left:34+237*navActive+'px'}]" v-show="!xs"></li>
          <li class="nav-item" v-for="(item,index) in navLists" @click="navActive = index" :class="{'nav-item-active':navActive == index}"><a :href="item.url">{{item.name}}</a></li>
        </ul>
      </div>
      <!-- 产品简介 -->
      <div class="profile-box" id="profile">
        <div class="profile">
          <h3 class="title">产品简介</h3>
          <p class="txt">INSIGHT是华泰证券依托大数据存储、实时分析等领域的技术积累，整合接入国内多家交易所高频行情数据，为投资者提供集行情接入、推送、回测、计算及分析等功能于一体的行情数据服务解决方案</p>
        </div>
      </div>
      <!-- 产品优势 -->
      <div class="advantage" id="advantage">
        <h3 class="title">产品优势</h3>
        <ul class="advantage-list clearfix">
          <li class="advantage-item" v-for="(item , index) in advantageLists">
            <img :src="item.url">
            <p class="top">{{item.title}}</p>
            <p class="bottom" v-html="item.msg"></p>
          </li>
        </ul>
      </div>
      <!-- 业务场景 -->
      <div class="scene-box" id="scene">
        <div class="scene">
            <h3 class="title">业务场景</h3>
            <ul class="scene-list clearfix">
              <li class="scene-line" :style="[{left:xs?sceneline*sceneActive+'px':353+334*sceneActive+'px'}]"></li>
              <li class="scene-item" @click="sceneActive = 0">量化交易平台</li>
              <li class="scene-item" @click="sceneActive = 1">投资分析系统</li>
            </ul>
            <ul class="scene-detail-list" v-show="sceneActive == 0">
              <li class="scene-detail-item">
                <h4>程序化交易</h4>
                <p>程序化交易是指通过既定程序或特定软件，自动生成或执行交易指令的交易行为。</p>
              </li>
              <li class="scene-detail-item">
                  <h4>算法交易</h4>
                  <p>算法交易是指利用电子平台，输入涉及算法的交易指令，通过使用计算机程序执行预选设定好的交易策略，发出交易指令的方法。又称为自动交易、黑盒交易或机器交易。</p>
              </li>
            </ul>
            <ul class="scene-detail-list" v-show="sceneActive == 1">
              <li class="scene-detail-item">
                <h4>量化选股</h4>
                <p>量化选股是指用数量化的方法选择股票组合，期望该股票组合能够获得超越基准收益率的投资行为</p>
              </li>
              <li class="scene-detail-item">
                  <h4>风险控制</h4>
                  <p>风险控制是指风险管理者采取各种措施和方法，消灭或减少风险事件发生的各种可能性，或风险控制者减少风险事件发生时造成的损失。</p>
              </li>
            </ul>
        </div>
      </div>
      <!-- 产品功能 -->
      <div class="function" id="function">
        <h3 class="title">产品功能</h3>
        <ul class="function-list clearfix">
          <li class="function-item" v-for="(item , index) in functionLists">
            <img :src="item.url">
            <p class="top">{{item.title}}</p>
            <p class="bottom" v-html="item.msg"></p>
          </li>
        </ul>
      </div>
      <!-- 产品动态 -->
      <div class="dynamic-box" id="dynamic">
        <div class="dynamic">
          <h3 class="title">产品动态</h3>
          <div class="dynamic-contain">
            <div class="dynamic-line"></div>
            <div class="dynamic-btn dynamic-btn-left"></div>
            <div class="dynamic-btn dynamic-btn-right"></div>
            <div class="swiper-container swiper-no-swiping">
              <div class="swiper-wrapper">
                <div class="swiper-slide" :class="'swiper-slide'+index" v-for="(item, index) in dynamicLists">
                  <div class="time">{{item.date.substring(0,4)}}<span></span>{{item.date.substring(5,7)}}<span></span>{{item.date.substring(8,10)}}</div>
                  <img src="../../assets/images/productDetailInsight/dynamic-icon.png">
                  <div class="msg">
                    <p class="editNo">{{item.editNo}}</p>
                    <p class="tip"><span :class="'tip-span'+index">{{item.tips}}</span></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- 帮助文档 -->
      <div class="document-box" id="document">
        <div class="document clearfix">
          <!-- 快速入手 -->
          <div class="fast">
            <h3>快速入手</h3>
            <div class="video-box" @click="videoPaly">
              <video id="video">
                <source src="../../assets/images/productDetailInsight/insight.mp4"  type="video/mp4" >
                您的浏览器不支持 video 标签
              </video>
              <img class="play-btn" v-show="playBtnShow" src="../../assets/images/productDetailInsight/video-btn.png">
              <p class="title">视频（三分钟学习如何使用INSIGHT CPP客户端订阅行情）</p>
            </div>
          </div>
          <!-- 常见问题 -->
          <div class="question">
            <h3>常见问题</h3>
            <ul class="question-list">
              <li class="question-item">行情数据的时间精度如何？</li>
              <li class="question-item">逐笔委托的属性中为何找不到[撤单]类别？</li>
              <li class="question-item">停牌股票TradingPhaseCode值为多少？</li>
              <li class="question-item">有股票停牌之类的公告信息吗？</li>
              <li class="question-item">为何模型中深交所和上交所得债券数据的交易单位不同？</li>
              <li class="question-item">INSIGHT可以回补日内数据吗？盘中可以回补吗？</li>
            </ul>
          </div>
          <!-- SDK下载 -->
          <div class="download">
            <h3>SDK下载</h3>
            <ul class="download-list">
              <li class="download-item"><span class="left">C++</span><span class="right">JAVA</span></li>
              <li class="download-item"><span class="left">C#</span><span class="right">Python</span></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Swiper from "swiper";  //插件
import $ from "jquery";  //插件
import api,{ apiHome,apiIndex } from "js/api";
import {session} from 'util/stroage';

export default {
  data() {
    return {
      swiper:"",
      // 判断屏幕大小
      xs: this.xsParent,
      // xs窗口下业务场景下划线
      sceneline: (document.body.clientWidth-16)/2,
      /* nav导航 */
      navLists: [
        {
          name:"产品简介",
          url:"#profile"
        },
        {
          name:"产品优势",
          url:"#advantage"
        },
        {
          name:"业务场景",
          url:"#scene"
        },
        {
          name:"产品功能",
          url:"#function"
        },
        {
          name:"产品动态",
          url:"#dynamic"
        },
        {
          name:"帮助文档",
          url:"#document"
        }
      ],
      /* nav导航选中下标 */
      navActive: 0,
      /* 产品优势 */
      advantageLists:[
        {
          url:require("../../assets/images/productDetailInsight/advantage-icon1.png"),
          title:"极速行情",
          msg:"高效压缩模型带宽占用少20%，微秒级处理交易所高频行情，端到端行情速度市场绝对领先"
        },
        {
          url:require("../../assets/images/productDetailInsight/advantage-icon2.png"),
          title:"极速计算",
          msg:"毫秒级多维度衍生指标计算能力"
        },
        {
          url:require("../../assets/images/productDetailInsight/advantage-icon3.png"),
          title:"极高可用",
          msg:"链接交易所多路行情源，确保数据不丢失"
        },
        {
          url:require("../../assets/images/productDetailInsight/advantage-icon4.png"),
          title:"极速回测",
          msg:"8分钟内回测全市场股票快照数据，<br>快于市场平均速度3倍"
        },
        {
          url:require("../../assets/images/productDetailInsight/advantage-icon5.png"),
          title:"快上加快",
          msg:"硬件加速行情，极速盘口复原<br>（敬请期待）"
        },
        {
          url:require("../../assets/images/productDetailInsight/advantage-icon6.png"),
          title:"更多语言",
          msg:"多编程语言支持，接口模型统一，接入速度更快<br>（CPP、Java、C#、Python）"
        },
        {
          url:require("../../assets/images/productDetailInsight/advantage-icon7.png"),
          title:"更多数据",
          msg:"多个授权交易所，提供更多种类数据<br>（上交所、深交所、中金所）"
        },
        {
          url:require("../../assets/images/productDetailInsight/advantage-icon8.png"),
          title:"更多选择",
          msg:"可按需选择不同服务地点，提供机房内转发服务和接口转发服务"
        }
      ],
      /* 场景选中下标 */
      sceneActive: 0,
      /* 产品功能 */
      functionLists:[
        {
          url:require("../../assets/images/productDetailInsight/function-icon1.png"),
          title:"实时行情推送",
          msg:"实时推送交易所交易所非展示类行情数据，数据种类包括沪深交易所及中金所股票、指数、债券、基金、期权、股指期货、商品期货"
        },
        {
          url:require("../../assets/images/productDetailInsight/function-icon2.png"),
          title:"行情衍生指标推送",
          msg:"基于实时数据和历史数据，利用流式计算和大数据离线分析，产生多粒度K线、TWAPVWAP、涨跌分析、筹码粉笔、相似K线等行情衍生指标数据，并根据用户需求推送。"
        },
        {
          url:require("../../assets/images/productDetailInsight/function-icon3.png"),
          title:"金融数据服务",
          msg:"对各类金融数据如证券基本信息、指数成分股、财务报表等，提供 7×24 小时不间断极速查询服务"
        },
        {
          url:require("../../assets/images/productDetailInsight/function-icon4.png"),
          title:"硬件加速行情",
          msg:"敬请期待"
        }
      ],
      /* 产品动态 */
      dynamicLists:[
        {
          editNo:"版本 2.1.1",
          tips:"更新客户端新增科创板模型字段",
          date:"2019-05-28"
        },
        {
          editNo:"版本 2.1.0",
          tips:"新增ETF静态信息查询，新增回调接口用于处理请求回复消息",
          date:"2019-04-12"
        },
        {
          editNo:"版本 2.0.2",
          tips:"完善回测功能，支持数据完整性判断",
          date:"2019-01-21"
        },
        {
          editNo:"版本 2.0.0",
          tips:"产品2.0版本全新上线，更少带宽占用，更快行情速度，更多衍生指标",
          date:"2018-12-03"
        }
      ],
      // 视频播放按钮是否显示
      playBtnShow: true
    };
  },
  metaInfo: {
    title: "产品详情页insight"
  },
  props: ['xsParent'],
  watch:{
    // 监听窗口大小判断屏幕尺寸
    xsParent: function (val) {   
      this.xs = val;
    }
  },
  computed:{},
  mounted(){
    // 初始化产品动态Swiper
    this.swiperFun();
  },
  methods: {
    // 产品动态swiper初始化
    swiperFun(){
      var _this = this;
      var perView = this.xs?1:3;
      console.log(_this.xs);
      console.log(perView);
      _this.swiper = new Swiper('.swiper-container', {
        initialSlide: 0,
        slidesPerView: perView,
        navigation: {
          nextEl: '.dynamic-btn-right',
          prevEl: '.dynamic-btn-left',
        },
        observer: true,
        observerParents: true,
        on: {
          init(){
            _this.swiperChange(this.activeIndex);
            this.update();
          },
          transitionStart(){
            _this.swiperChange(this.activeIndex);
            this.update();
          }
        }
      });
    },
    // 动态改变产品动态swiper-slide的相对位置
    swiperChange(index){
      $(".swiper-slide").css("left","0px");
      if(index==0){
        $(".tip-span"+(index+3)).hide();
      }else{
        $(".tip-span"+(index-1)).hide();
        $(".tip-span"+(index+3)).hide();;
      }
      $(".tip-span"+index).show();
      $(".tip-span"+(index+1)).show();
      $(".tip-span"+(index+2)).show();
      if($(".tip-span"+index).width()>393){
        $(".swiper-slide"+index).css("left",($(".tip-span"+index).width()-385)/2+"px");
      }
      if($(".tip-span"+(index+2)).width()>393){
        $(".swiper-slide"+(index+2)).css("left",-($(".tip-span"+(index+2)).width()-385)/2+"px");
      }
    },
    // 点击播放视频
    videoPaly(){
      var _this = this;
      document.getElementById("video").play();
      _this.playBtnShow = false;
      document.getElementById("video").addEventListener("ended",function(){
        _this.playBtnShow = true;
      })
    }
  }
};
</script>

<style lang="scss" scoped>
  @import 'swiper.min.css';
  /* 产品详情页insight */
  .product-detail-insight-box{
    /* 标题公共样式 */
    %h3{
      /* font-family: PingFangSC-Regular; */
      font-size: 30px;
      line-height: 42px;
      color: #333333;
    }
    width: 100%;
    font-family: MicrosoftYaHei;
    box-sizing: border-box;
    /* banner */
    .banner-box{
      width: 100%;
      background: url(../../assets/images/productDetailInsight/banner-bg.png) no-repeat center center;
      background-size: 100% 100%;
      .banner{
        margin: 0 auto;
        color: #FFFFFF;
        box-sizing: border-box;
        width: 1300px;
        padding-top: 133px;
        padding-left: 34px;
        padding-bottom: 173px;
        .top{
          /* font-family: PingFangSC-Medium; */
          font-size: 48px;
          line-height: 67px;
        }
        .bottom{
          margin-top: 6px;
          /* font-family: PingFangSC-Light; */
          font-size: 42px;
          line-height: 59px;
        }
      }
    }
    /* 内容 */
    .product-detail-insight-contain{
      width: 100%;
      position: relative;
      /* nav导航 */
      .nav{
        width: 100%;
        height: 80px;
        background-color: #fff;
        position: absolute;
        top: 0;
        left: 0;
        .nav-list{
          box-sizing: border-box;
          margin: 0 auto;
          position: relative;
          width:1300px;
          padding-left: 34px;
          .nav-item{
            cursor: pointer;
            box-sizing: border-box;
            text-align: center;
            float: left;
            font-size: 16px;
            font-family: PingFangSC-Regular;
            width: 64px;
            line-height: 80px;
            margin-right: 173px;
            a{
              color: #333333;
            }
            &:last-child{
              margin-right: 0;
            }
          }
          .nav-line{
            position: absolute;
            bottom: 0;
            height: 2px;
            width: 64px;
            background-color: #1C6AEB;
            transition: all 0.2s linear;
          }
        }
      }
      /* 产品简介 */
      .profile-box{
        width: 100%;
        background: url(../../assets/images/productDetailInsight/pro-bg.png) no-repeat center center;
        background-size: 100% 100%;
        .profile{
          box-sizing: border-box;
          margin: 0 auto;
          width: 1300px;
          padding-left: 34px;
          padding-top: 150px;
          padding-bottom: 97px;
          .title{
            @extend %h3;
          }
          .txt{
            font-family: PingFangSC-Regular;
            font-size: 16px;
            color: #333333;
            line-height: 30px;
            width: 650px;
            margin-top: 21px;
          }
        }
      }
      /* 产品优势 */
      .advantage{
        box-sizing: border-box;
        margin: 0 auto;
        width: 1300px;
        padding-left: 74px;
        padding-top: 60px;
        .title{
          @extend %h3;
          text-align: center;
        }
        .advantage-list{
          margin-top: 60px;
          .advantage-item{
            box-sizing: border-box;
            float: left;
            text-align: center;
            width: 300px;
            height: 188px;
            margin-right: 150px;
            margin-bottom: 70px;
            img{
              height: auto;
              width:80px;
            }
            .top{
              font-family: PingFangSC-Regular;
              font-size: 20px;
              line-height: 28px;
              color: #333333;
              margin-top: 20px;
            }
            .bottom{
              font-family: PingFangSC-Regular;
              color: #666666;
              font-size: 14px;
              line-height: 24px;
              margin-top: 12px;
            }
            &:nth-of-type(3n){
              margin-right: 0;
            }
          }
        }
      }
      /* 业务场景 */
      .scene-box{
        width: 100%;
        background: url(../../assets/images/productDetailInsight/scene-bg.png) no-repeat center center;
        background-size: 100% 100%;
        .scene{
          box-sizing: border-box;
          margin: 0 auto;
          width: 1300px;
          padding-left: 74px;
          padding-top: 60px;
          padding-bottom: 101px;
          .title{
            @extend %h3;
            text-align: center;
          }
          .scene-list{
            position: relative;
            text-align: center;
            border-bottom: 2px solid #e6e6e6;
            padding-left: 353px;
            margin-top: 40px;
            .scene-item{
              float: left;
              display: inline-block;
              text-align: center;
              font-family: PingFangSC-Regular;
              color: #333333;
              cursor: pointer;
              width: 160px;
              line-height: 68px;
              font-size: 20px;
              margin-right: 177px;
            }
            .scene-line{
              height: 2px;
              background-color: #1C6AEB;
              position: absolute;
              bottom: -2px;
              transition: all 0.2s linear;
              width: 160px;
            }
          }
          .scene-detail-list{
            margin-top: 60px;
            .scene-detail-item{
              margin-bottom: 40px;
              h4{
                font-family: PingFangSC-Regular;
                font-size: 20px;
                color: #1C6AEB;
                line-height: 28px;
              }
              p{
                font-family: PingFangSC-Regular;
                font-size: 14px;
                color: #666666;
                line-height: 24px;
                margin-top: 12px;
              }
              &:last-child{
                margin-bottom: 0;
              }
            }
          }
        }
      }
      /* 产品功能 */
      .function{
        box-sizing: border-box;
        margin: 0 auto;
        width: 1300px;
        padding-left: 34px;
        padding-top: 60px;
        padding-bottom: 127px;
        .title{
          @extend %h3;
          box-sizing: border-box;
          text-align: center;
          padding-left: 40px;
        }
        .function-list{
          margin-top: 60px;
          .function-item{
            box-sizing: border-box;
            float: left;
            position: relative;
            width: 50%;
            height: 160px;
            img{
              position: absolute;
              height: auto;
              width: 50px;
            }
            .top{
              font-family: PingFangSC-Regular;
              font-size: 20px;
              color: #333333;
              line-height: 28px;
            }
            .bottom{
              font-family: PingFangSC-Regular;
              font-size: 14px;
              color: #666666;
              line-height: 24px;
              margin-top: 12px;
            }
            &:nth-of-type(1){
              padding-left: 86px;
              padding-right: 54px;
              border-right: 1px solid #e6e6e6;
              border-bottom: 1px solid #e6e6e6;
              img{
                top: 0;
                left: 0;
              }
            }
            &:nth-of-type(2){
              padding-left: 136px;
              border-bottom: 1px solid #e6e6e6;
              img{
                top: 0;
                left: 54px;
              }
            }
            &:nth-of-type(3){
              padding-left: 86px;
              padding-right: 54px;
              padding-top: 59.5px;
              border-right: 1px solid #e6e6e6;
              img{
                top: 59.5px;
                left: 0;
              }
            }
            &:nth-of-type(4){
              padding-left: 136px;
              padding-top: 59.5px;
              img{
                top: 59.5px;
                left: 54px;
              }
            }
          }
        }
      }
      /* 产品动态 */
      .dynamic-box{
        width: 100%;
        background-image: linear-gradient(-140deg, #4C4C4C 0%, #333333 90%);
        box-shadow: 0 0 20px 2px rgba(0,0,0,0.40);
        .dynamic{
          box-sizing: border-box;
          margin: 0 auto;
          width: 1180px;
          padding-top: 60px;
          padding-bottom: 120px;
          .title{
            @extend %h3;
            text-align: center;
            color: #fff;
            padding-left: 74px;
          }
          .dynamic-contain{
            position: relative;
            height: 168px;
            margin-top: 70px;
            .dynamic-line{
              width: 100%;
              height: 2px;
              position: absolute;
              top: 50%;
              left: 0;
              transform: translate(0, -50%);
              background-image: linear-gradient(-180deg, #696969 0%, #535353 100%);
            }
            .dynamic-btn{
              cursor: pointer;
              height: 80px;
              background-image: linear-gradient(-180deg, #606060 0%, #575757 100%);
              box-shadow: 2px 2px 8px 0 rgba(0,0,0,0.10);
              border-radius: 7px;
              display: flex;
              align-items: center;
              justify-content: center;
              position: absolute;
              top: 50%;
              transform: translate(0,-50%);
              z-index: 100;
              width: 60px;
              outline: none;
            }
            .dynamic-btn-left{
              background: url(../../assets/images/productDetailInsight/dynamic-left.png) no-repeat center center;
              background-size: 100% 100%;
              left: -60px;
            }
            .dynamic-btn-right{
              background: url(../../assets/images/productDetailInsight/dynamic-right.png) no-repeat center center;
              background-size: 100% 100%;
              right: -60px;
            }
            .swiper-container{
              color:#fff;
              height: 100%;
              .swiper-wapper{
                transition: all 0.2s linear;
              }
              .swiper-slide{
                width: auto;
                height: 100%;
                box-sizing: border-box;
                position: relative;
                .time{
                  /* font-family: PingFangSC-Regular; */
                  font-size: 16px;
                  color: #333333;
                  background: url(../../assets/images/productDetailInsight/time-bg1.png) no-repeat center center;
                  background-size: 100% 100%;
                  line-height: 22px;
                  padding: 5px 10px 13.3px 10px;
                  display: inline-block;
                  position: absolute;
                  left: 50%;
                  transform: translate(-50%,0);
                  top : 17px;
                  span{
                    display: inline-block;
                    width: 1px;
                    height: 10px;
                    margin: 0 10px;
                    background-color: #ccc ;
                  }
                }
                img{
                  width: 24px;
                  height: auto;
                  position: absolute;
                  top: 50%;
                  left: 50%;
                  transform: translate(-50%,-50%);
                }
                .msg{
                  width: 100%;
                  position: relative;
                  left: 0;
                  top: 112px;
                  .editNo{
                    /* font-family: PingFangSC-Medium; */
                    font-size: 20px;
                    color: #3A9BFE;
                    line-height: 28px;
                    text-align: center;
                  }
                  .tip{
                    /* font-family: PingFangSC-Regular; */
                    color: #fff;
                    text-align: center;
                    font-size: 16px;
                    line-height: 28px;
                    text-align: center;
                    box-sizing: border-box;
                    position: absolute;
                    top: 28px;
                    width: 520px;
                    left: -64px;
                  }
                }
                &:nth-of-type(2n){
                  .time{
                    top: 112px;
                    background: url(../../assets/images/productDetailInsight/time-bg2.png) no-repeat center center;
                    background-size: 100% 100%;
                    padding: 13.3px 10px 5px 10px;
                  }
                  .msg{
                    top: 0;
                  }
                }
              }
            }
          }
        }
      } 
      /* 帮助文档 */
      .document-box{
        width: 100%;
        background: url(../../assets/images/productDetailInsight/document-bg.png) no-repeat center center;
        background-size: 100% 100%;
        .document{
          box-sizing: border-box;
          margin: 0 auto;
          width: 1300px;
          padding-top: 60px;
          padding-bottom: 83px;
          h3{
            @extend %h3;
            color: #FFFFFF;
          }
          .fast{
            float: left;
            .video-box{
              box-sizing: border-box; 
              position: relative;
              width: 560px;
              height: 315px;
              margin-top: 40px;
              video{
                width: 100%;
                height: 100%;
              }
              .play-btn{
                width: 80px;
                height: auto;
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%,-50%);
              }
              .title{
                position: absolute;
                left: 0;
                box-sizing: border-box;
                font-family: PingFangSC-Regular;
                color: #3A9BFE;
                line-height: 22px;
                bottom: 22px;
                padding-left: 28px;
                font-size: 16px;
              }
            }
          }
          .question{
            float: left;
            margin-left: 160px;
            .question-list{
              margin-top: 20px;
              .question-item{
                font-family: PingFangSC-Regular;
                font-size: 14px;
                color: #FFFFFF;
                line-height: 36px;
              }
            }
          }
          .download{
            float: right;
            .download-list{
              margin-top: 20px;
              .download-item{
                margin-bottom: 20px;
                span{
                  display: inline-block;
                  padding: 8px 20px;
                  background-color: #666666;
                  border-radius: 8px;
                  font-family: PingFangSC-Regular;
                  font-size: 16px;
                  color: #FFFFFF;
                  line-height: 16px;
                }
                .left{
                  margin-right: 28px;
                }
              }
            }
          }
        }
      }
    }
  }
  /* XS */
  .product-detail-insight-box-xs{
    /* banner */
    .banner-box{
      .banner{
        width: 100%; 
        padding-top: 30px;
        padding-left: 14px;
        padding-bottom: 40px;
        .top{
          font-size: 20px;
          line-height: 30px;
        }
        .bottom{
          margin-top: 0px;
          font-size: 17px;
          line-height: 20px;
        }
      }
    }
    /* 内容 */
    .product-detail-insight-contain{
      /* nav导航 */
      .nav{
        .nav-list{
          width: 100%;
          padding-left: 0;
          .nav-item{
            width: 33%;
            line-height: 40px;
            margin-right: 0;
          }
          .nav-item-active{
            a{
              color: #1C6AEB;
            }
          }
        }
      }
      /* 产品简介 */
      .profile-box{
        .profile{
          width: 100%;;
          padding: 100px 8px 40px 8px;
          .title{
            text-align: center;
          }
          .txt{
            line-height: 25px;
            width: auto;
            margin-top: 6px;
          }
        }
      }
      /* 产品优势 */
      .advantage{
        width: 100%;
        padding: 20px 8px 0px 8px;
        .advantage-list{
          margin-top: 20px;
          .advantage-item{
            width: 49%;
            height: 170px;
            margin-bottom: 20px;
            margin-right: 0;
            img{
              width:50px;
            }
            .top{
              margin-top: 10px;
            }
            .bottom{
              /* font-family: PingFangSC-Regular; */
              font-size: 12px;
              color: #666666;
            }
            &:nth-of-type(2n){
              float: right;
            }
          }
        }
      }
      /* 业务场景 */
      .scene-box{
        .scene{
          width: 100%;
          padding: 20px 8px 40px 8px;
          .scene-list{
            padding-left: 10px;
            margin-top: 20px;
            .scene-item{
              width: 50%;
              line-height: 40px;
              font-size: 20px;
              margin-right: 0;
            }
            .scene-line{
              width: 50%;/* xs */
            }
          }
          .scene-detail-list{
            margin-top: 20px;
            .scene-detail-item{
              margin-bottom: 20px;
            }
          }
        }
      }
      /* 产品功能 */
      .function{
        width: 100%;
        padding: 20px 8px 40px 8px;
        .title{
          padding-left: 0;
        }
        .function-list{
          margin-top: 20px;
          .function-item{
            width: 100%;
            padding: 20px 0 20px 60px;
            border-bottom: 1px solid #e6e6e6;
            height: auto;
            img{
              position: absolute;
              top: 20px;
              left: 0;
              width: 40px;
            }
            &:nth-of-type(1){
              padding-left: 60px;
              padding-right: 0;
              border-right: none;
              border-bottom: 1px solid #e6e6e6;
              img{
                top: 20px;
                left: 0;
              }
            }
            &:nth-of-type(2){
              padding-left: 60px;
              border-bottom: 1px solid #e6e6e6;
              img{
                top: 20px;
                left: 0;
              }
            }
            &:nth-of-type(3){
              padding-left: 60px;
              padding-right: 0;
              padding-top: 20px;
              border-right: none;
              img{
                top: 20px;
                left: 0;
              }
            }
            &:nth-of-type(4){
              padding-left: 60px;
              padding-top: 20px;
              img{
                top: 20px;
                left: 0px;
              }
            }
          }
        }
      }
      /* 产品动态 */
      .dynamic-box{
        .dynamic{
          width: 100%;
          padding-top: 20px;
          padding-bottom: 40px;
          .title{
            padding-left: 0;
          }
          .dynamic-contain{
            width: 80%;
            margin: 0 auto;
            margin-top: 20px;
            .dynamic-btn{
              width: 13%;
            }
            .dynamic-btn-left{
              left: -12.5%;
            }
            .dynamic-btn-right{
              right: -12.5%;
            }
            .swiper-container{
              .swiper-slide{
                .msg{
                  .tip{
                    width: 100%;
                    left: 0;
                    line-height: 18px;
                  }
                }
              }
            }
          }
        }
      }
      /* 帮助文档 */
      .document-box{
        .document{
          width: 100%;
          padding:20px 8px 40px 8px;
          h3{
            text-align: center;
          }
          .fast{
            width: 100%;
            .video-box{
              width: 100%;
              height: 200px;
              margin-top: 20px;
              video{
                width: 100%;
                height: 100%;
              }
              .title{
                bottom: 10px;
                padding-left: 8px;
                font-size: 12px;
              }
            }
          }
          .question{
            margin-top: 20px;
            margin-left: 0;
          }
          .download{
            width: 100%;
            margin-top: 20px;
            float: left;
            .download-list{
              .download-item{
                text-align: center;
              }
            }
          }
        }
      }
    }
  }
</style>

