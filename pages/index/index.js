//index.js
//获取应用实例
const app = getApp()

Page({
  data: {},
  onGotUserInfo: function(e) {
    const userInfo = e.detail.userInfo
    if (userInfo) {
      app.globalData.userInfo = e.detail.userInfo
      wx.navigateTo({
        url: '/pages/user/user',
      })
    }
  }
})
