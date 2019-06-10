// pages/phone/phone.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    mobile:'',
    phone: '',
    result:'',
    scanType:'',
    charSet:'',
    path:'',
    rawData:''
  },
  downLoad: function(){
    wx.getNetworkType({
      success: function(res) {
        if (res.networkType=="none"){
          wx.showToast({
            title: '当前设备未联网,请检查网络连接!',
          })
        } else if (res.networkType == "wifi"){
          wx.showToast({
            title: '当前是WiFi环境,可以下载!',
          })
        } else if (res.networkType == "2g" || res.networkType == "3g" || res.networkType == "4g"){
          wx.showToast({
            title: '当前是流量,下载会产生相关费用!',
          })
        } else{
          wx.showToast({
            title: '不可识别',
          })
        }
      },
    })
  },
  getMsg: function () {
    var that = this;
    wx.getSystemInfo({
      success: function (res) {
        that.setData({
          mobile: res
        })
      },
    })
  },
  callPhone: function(res){
    this.data.phone = res.detail.value
  },
  makePhoneCall: function(){
    var that = this;
    if (this.data.phone == ""){
      wx.showModal({
        title: '提示',
        content: '请输入拨打号码',
      })
    }else{
      wx.makePhoneCall({
        phoneNumber: this.data.phone,
      })
    }
  },
  scanCode: function(){
    var that = this;
      wx.scanCode({
        success: function (res) {
          that.setData({
            result: res.result,
            scanType: res.scanType,
            charSet: res.charSet,
            path: res.path,
            rawData: res.rawData
          })
        }
      })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})