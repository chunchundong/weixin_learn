// pages/contacts/contacts.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    name: '',
    phone: ''
  },
  changeName:function(res){
    this.data.name = res.detail.value;
  },
  changePhone: function (res) {
    this.data.phone = res.detail.value;
  },
  saveContact: function(){
    if(this.data.name === "" || this.data.phone === ""){
      wx.showModal({
        title: '提示',
        content: '请输入联系人的姓名或电话号码',
      })
    }else{
      wx.setStorage({
        key: 'contacts',
        data: {
          name: this.data.name,
          phone: this.data.phone
        },
        success(res) {
          wx:wx.navigateTo({
            url: '/pages/detail/index'
          })
        }
      })
    }
  },
  clearContact:function(){
    var that = this;
    wx.clearStorage({
      key: 'contacts',
      success : function(){
        that.setData({
          name: '',
          phone: ''
        })
      },
    });
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