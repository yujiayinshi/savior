const app = getApp()

Page({
  data: {
    userInfo: {},
    points: 0,
    products: [{
      id: 1,
      name: '香港海洋公园门票',
      img: 'https://cloud-minapp-2654.cloud.ifanrusercontent.com/hkhy.jpg',
      price: 300
    }, {
      id: 2,
      name: '珠海长隆海洋王国门票',
      img: 'https://cloud-minapp-2654.cloud.ifanrusercontent.com/zhcl.jpg',
      price: 300
      }, {
        id: 3,
        name: '深圳小梅沙海洋馆门票',
        img: 'https://cloud-minapp-2654.cloud.ifanrusercontent.com/szxms.jpg',
        price: 170
      }]
  },
  onLoad: function () {
    this.setData({
      userInfo: app.globalData.userInfo
    })
  }
})
