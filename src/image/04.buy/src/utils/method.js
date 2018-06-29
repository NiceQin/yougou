
// 抽取 基地址
var baseURL = 'https://www.zhengzhicheng.cn/';
// 写封装的东西
var method = {
  /*
    opt
      url
      method
      success

      fail
      函数的上下文调用模式
      apply call bind
  */
  request:(opt)=>{
    wx.request({
      url: `${baseURL}${opt.url}`||'',
      method: opt.method||'get',
      success:opt.success||((backData)=>{console.log(backData);}),
      fail: opt.fail||(()=>{})
    })
  }
}
// 暴露出去
module.exports.request = method.request;
