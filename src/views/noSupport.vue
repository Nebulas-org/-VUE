<template>
  <div class="bgcolor">
    <div class="version-no-support">
      <img src="@/assets/images/intel.png" class="banner">
      <h3>您正在使用的浏览器不兼容，推荐下载以下浏览器访问</h3>
      <ul>
        <li>
          <img src="@/assets/images/ie.png" alt>
          <div>
            <a href="https://support.microsoft.com/zh-cn/help/17621/internet-explorer-downloads" target="_blank">下载IE浏览器</a>
            <p>支持10及以上版本</p>
          </div>
        </li>
        <li>
          <img src="@/assets/images/firefox.png" alt>
          <div>
            <a href="http://www.firefox.com.cn/download/" target="_blank">下载火狐浏览器</a>
            <p>支持29及以上版本</p>
          </div>
        </li>
        <li>
          <img src="@/assets/images/chrome.png" alt>
          <div>
            <a href="https://www.google.cn/chrome/" target="_blank">下载谷歌浏览器</a>
            <p>支持30及以上版本</p>
          </div>
        </li>

      </ul>
    </div>
  </div>
</template>
<style scoped lang="scss">
.bgcolor {
  height: 100%;
  width: 100%;
}
.version-no-support {
  text-align: center;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  margin: auto;
  padding-top: 100px;
  h3 {
    line-height: 25px;
    font-size: 24px;
    color: #333;
    font-weight: bold;
  }
  ul {
    overflow: hidden;
    margin: 0 auto;
    display: inline-block;
    li {
      text-align: center;
      float: left;
      width: 320px;
      padding-top: 120px;
      &:not(:last-child) div {
        border-right: 1px solid #d3d3d3;
      }
      img {
        width: 60px;
        height: 60px;
        margin-bottom: 27px;
      }
      a {
        display: block;
        color: #4088ff;
        font-size: 16px;
        line-height: 26px;
      }
      p {
        padding-top: 8px;
        color: #999;
        line-height: 26px;
      }
    }
  }
}
</style>