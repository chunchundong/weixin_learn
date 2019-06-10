//index.js
//获取应用实例
const app = getApp()
var progress = 0;
var sourceType = [["album"], ["camera"], ["camera", "album"]]; 
var sizeType = [["original"], ["compressed"], ["original", "compressed"]];
Page({
  data: {
    sourceType: ["相册", "相机", "相册或相机"],
    sourceTypeIndex: 1,

    sizeType: ["原话", "压缩版", "原画或压缩"],
    sizeTypeIndex: 1,

    count: [1, 2, 3, 4, 5, 6, 7, 8, 9],
    countIndex: 8,

    chosed:0,
    imgUrl: '',

    copy: '',
    past: '',
    jieshou: '',

    tempFilePath:'',

    disabled:true,
    imgUrls: [
      'https://images.unsplash.com/photo-1551334787-21e6bd3ab135?w=640',
      'https://images.unsplash.com/photo-1551214012-84f95e060dee?w=640',
      'https://images.unsplash.com/photo-1551446591-142875a901a1?w=640'
    ],
    interval: 2000,
    duration: 1000,
    percent: 0,
    name: "",
    array: [
      { message: "冬冬", id: 1 },
      { message: "锋锋", id: 2 },
      { message: "地方", id: 3 },
      { message: "挺好", id: 4 },
      { message: "运费", id: 5 }
    ],
    length: 6,
    msg:{
      name:"dongdong",
      age:23,
      sex:"woman"
    }
  },
  checkboxChange:function(){
    this.setData({
      disabled: !this.data.disabled
    })
  },
  change: function(){
    this.setData({
      name: "冬冬被点击按钮改变了"
    })
  },
  changeSource: function(res){
    this.setData({
      sourceTypeIndex: res.detail.value
    })
  },
  changeSize: function (res){
    this.setData({
      sizeTypeIndex: res.detail.value
    })
  },
  changeCount: function (res) {
    this.setData({
      countIndex: res.detail.value
    })
  },
  //从相册或相机选择图片
  chooseImg: function(){
    var that = this;
    wx.chooseImage({
      count: that.data.count[that.data.countIndex],
      sizeType: sizeType[that.data.sizeTypeIndex],
      sourceType: sourceType[that.data.sourceTypeIndex],
      success: function(res) {
        that.setData({
          chosed : res.tempFilePaths.length,
          imgUrl: res.tempFilePaths
        })
        
      }
    })
  },
  //图片预览
  showBigger: function(e){
    // console.log(e)
    wx.previewImage({
      current: e.currentTarget.dataset.src,
      urls: this.data.imgUrl,
    })
  },
  //监听input输入框
  text: function(e){
    this.data.copy = e.detail.value
  },
  //复制
  copy: function(){
    wx.setClipboardData({
      data: this.data.copy,
      success: function(){
        wx.showToast({
          title: '复制成功',
        })
      }
    })
  },
  //粘贴
  past:function(){
    var that = this;
    wx.getClipboardData({
      success: function(e){
        that.setData({
          jieshou: e.data
        })
      }
    })
  },
  //开始录音
  start: function(){
    var that = this;
    wx.startRecord({
      success(res) {
        wx.saveFile({
          tempFilePath: res.tempFilePath,
          success: function(res){
            that.setData({
              tempFilePath: res.savedFilePath
            })
          }
        })
      }
    })
  },
  //暂停录音
  stopStart: function(){
    var that = this;
    wx.stopRecord({
      success(res) {
        console.log(res)
      }
    })
  },
  //播放录音
  play: function () {
    wx.playVoice({
      filePath: this.data.tempFilePath,
    })
  },
  //暂停播放
  stopPlay: function () {
    wx.stopVoice()
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      name: app.name
    });
    // console.log("页面加载");
    var that = this;
    var timer = setInterval(function(){
      progress++;
      if (progress>=80){
        clearInterval(timer);
      }
      that.setData({
        percent: progress
      })
    },30);
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    // console.log("页面初次渲染完成");
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    // console.log("页面显示");
   
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    // console.log("页面隐藏");
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    // console.log("页面卸载");
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    // console.log("用户下拉动作");
    this.setData({
      name: "被我改变了"
    })
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    // console.log("页面上拉触底");
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})
