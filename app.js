//app.js
App({
  onLaunch: function (e) {
   console.log('初始化成功');
   console.log(e);
  },
  onShow: function(e){
    console.log('显示');
    console.log(e);
  },
  onHide: function(){
    console.log('隐藏');
  },
  name: "冬冬"
})