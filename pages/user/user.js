const app = getApp()

Page({
  data: {
    userInfo: {},
    points: 0
  },
  onLoad: function () {
    this.setData({
      userInfo: app.globalData.userInfo
    })
  }
})
