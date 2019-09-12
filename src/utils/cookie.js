export const cookie = {
    get(key) {
      var data = document.cookie;
      var startIndex = data.indexOf(key + '=');
      if (startIndex > -1) {
        //key的起始位置等于出现的位置加key的长度+1
        startIndex = startIndex + key.length + 1;
        //结束位置等于从key开始的位置之后第一次;号所出现的位置
        var endIndex = data.indexOf(';', startIndex);
        //如果未找到结尾位置则结尾位置等于cookie长度，之后的内容全部获取
        endIndex = endIndex < 0 ? data.length : endIndex;
        return decodeURIComponent(data.substring(startIndex, endIndex));
      } else {
        return '';
      }
    },
  
    set(key, value, time) {
      //默认保存时间
      var time = time;
      //获取当前时间
      var cur = new Date();
      var undefined;
      //设置指定时间
      cur.setTime(cur.getTime() + time * 24 * 3600 * 1000);
      //创建cookie  并且设置生存周期为GMT时间  encodeURIComponent转化为url编码形式    toGMTString时间对象转化为字符串
      document.cookie = key + '=' + encodeURIComponent(value) + ';expires=' + (time === undefined ? '' : cur.toGMTString());
    },
  
    del(key) {
      var data = this.get(key);
      if (data !== false) {
        this.set(key, data, -1);
      }
    }
  }
  