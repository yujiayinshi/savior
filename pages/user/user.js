const app = getApp()

Page({
  data: {
    userInfo: {},
    points: 0,
    products: [{
      id: 1,
      name: '香港海洋公园门票',
      img: 'https://cloud-minapp-2654.cloud.ifanrusercontent.com/hkhy.jpg',
      price: 3000
    }, {
      id: 2,
      name: '珠海长隆海洋王国门票',
      img: 'https://cloud-minapp-2654.cloud.ifanrusercontent.com/zhcl.jpg',
      price: 3000
      }, {
        id: 3,
        name: '深圳小梅沙海洋馆门票',
        img: 'https://cloud-minapp-2654.cloud.ifanrusercontent.com/szxms.jpg',
        price: 300
      }]
  },
  onLoad: function () {
    this.setData({
      userInfo: app.globalData.userInfo,
      points: app.globalData.points
    })
  },
  exchange: function (e) {
    console.log(e.currentTarget)
    const price = e.currentTarget.dataset.price
    if (this.data.points >= price) {
      this.setData({
        points: this.data.points - price
      })
      wx.showModal({
        title: '积分兑换成功',
        content: '去看海洋动物吧',
        showCancel: false
      })
    } else {
      wx.showModal({
        title: '积分不足',
        content: '努力获取积分吧',
        showCancel: false
      })
    }
  }
})
