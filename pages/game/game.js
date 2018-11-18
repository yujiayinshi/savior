const uuid = require('../../utils/util.js').uuid
const app = getApp()
Page({
  data: {
    showad: false,
    fishArray: [{
      positionClass: 'fish_wrap left_right_2',
      fishClass: 'fish_1',
      id: 'fish_1'
    }, {
      positionClass: 'fish_wrap left_right_2',
      fishClass: 'fish_1',
      id: 'fish_1'
    }, {
      positionClass: 'fish_wrap left_right_2',
      fishClass: 'fish_1',
      id: 'fish_1'
    }, {
      positionClass: 'fish_wrap left_right_2',
      fishClass: 'fish_1',
      id: 'fish_1'
    }, {
      positionClass: 'fish_wrap right_left_4',
      fishClass: 'fish_2',
      id: 'fish_2'
    }, {
      positionClass: 'fish_wrap right_left_4',
      fishClass: 'fish_2',
      id: 'fish_2'
    }, {
      positionClass: 'fish_wrap right_left_4',
      fishClass: 'fish_2',
      id: 'fish_2'
    }, {
      positionClass: 'fish_wrap right_left_4',
      fishClass: 'fish_2',
      id: 'fish_2'
    }, {
      positionClass: 'fish_wrap right_left_2',
      fishClass: 'fish_3',
      id: 'fish_3'
    }, {
      positionClass: 'fish_wrap right_left_2',
      fishClass: 'fish_4',
      id: 'fish_4'
    }, {
      positionClass: 'fish_wrap right_left_2',
      fishClass: 'fish_5',
      id: 'fish_5'
    }, {
      positionClass: 'fish_wrap right_left_3',
      fishClass: 'fish_6',
      id: 'fish_6'
    }, {
      positionClass: 'fish_wrap right_left_3',
      fishClass: 'fish_6',
      id: 'fish_6'
    }, {
      positionClass: 'fish_wrap left_right_1',
      fishClass: 'fish_7',
      id: 'fish_7'
    }, {
      positionClass: 'fish_wrap left_right_1',
      fishClass: 'fish_7',
      id: 'fish_7'
    }, {
      positionClass: 'fish_wrap left_right_3',
      fishClass: 'fish_8',
      id: 'fish_8'
    }, {
      positionClass: 'fish_wrap left_right_1',
      fishClass: 'fish_9',
      id: 'fish_9'
    }, {
      positionClass: 'fish_wrap left_right_2',
      fishClass: 'fish_10',
      id: 'fish_10'
    }],
    directionTypes: [
      'left_right_1',
      'left_right_2',
      'left_right_3',
      'right_left_1',
      'right_left_2',
      'right_left_3',
      'right_left_4'
    ],
    fishTyoes: [
      'fish_1',
      'fish_2',
      'fish_6',
      'fish_7',
      'fish_8',
      'fish_9',
      'fish_10'
    ],
    garbageImgs: [
      'https://cloud-minapp-2654.cloud.ifanrusercontent.com/bottle.png',
      'https://cloud-minapp-2654.cloud.ifanrusercontent.com/drink.png',
      'https://cloud-minapp-2654.cloud.ifanrusercontent.com/bag.png',
      'https://cloud-minapp-2654.cloud.ifanrusercontent.com/box.png',
      'https://cloud-minapp-2654.cloud.ifanrusercontent.com/glass.png',
      'https://cloud-minapp-2654.cloud.ifanrusercontent.com/dangerous.png'
    ],
    fishImgs: [
      'https://cloud-minapp-2654.cloud.ifanrusercontent.com/fish1.gif',
      'https://cloud-minapp-2654.cloud.ifanrusercontent.com/fish2.gif',
      'https://cloud-minapp-2654.cloud.ifanrusercontent.com/fish3.gif',
      'https://cloud-minapp-2654.cloud.ifanrusercontent.com/fish4.gif',
      'https://cloud-minapp-2654.cloud.ifanrusercontent.com/fish5.gif'
    ],
    postImgs: [
      'https://cloud-minapp-2654.cloud.ifanrusercontent.com/post.png',
      'https://cloud-minapp-2654.cloud.ifanrusercontent.com/post2.jpg',
      'https://cloud-minapp-2654.cloud.ifanrusercontent.com/post3.jpeg',
    ]
  },
  onLoad: function() {
    this.setData({
      garbages: this.createGarbage(10),
      fishes: this.createFish(10),
      points: app.globalData.points
    })
    var me = this
    setInterval(function() {
      const garbages = me.data.garbages.map(item => {
        return {
          id: item.id,
          img: item.img,
          left: Math.round((Math.random() * 2)) + item.left - 1,
          top: Math.round((Math.random() * 2)) + item.top - 1
        }
      })
      me.setData({
        garbages: garbages
      })
    }, 100)
    setInterval(function() {
      let num = 0
      if (me.data.garbages.length < 10) {
        num = 1
      }
      if (me.data.garbages.length < 6) {
        num = 2
      }
      if (me.data.garbages.length < 2) {
        num = 3
      }
      if (num > 0) {
        me.setData({
          garbages: me.data.garbages.concat(me.createGarbage(1))
        })
      }
    }, 1000)
    setInterval(function() {
      me.data.garbages.forEach(function(item, index) {
        if (item.left < 0 || item.left > wx.getSystemInfoSync().windowWidth
          || item.top < 0 || item.top > wx.getSystemInfoSync().windowHeight) {
           me.data.garbages.splice(index, 1)
          } 
      })
      me.setData({garbages: me.data.garbages})
    }, 3000)
  },
  createFish: function(number) {
    let result = []
    for (var i = 0; i < number; i++) {
      result.push({
        id: uuid(),
        img: this.data.fishImgs[Math.floor(Math.random() * this.data.fishImgs.length)],
        left: Math.round(Math.random() * wx.getSystemInfoSync().windowWidth),
        top: Math.round(Math.random() * wx.getSystemInfoSync().windowHeight)
      })
    }
    return result
  },
  createGarbage: function(number) {
    let result = []
    for (var i = 0; i < number; i++) {
      result.push({
        id: uuid(),
        img: this.data.garbageImgs[Math.round(Math.random() * this.data.garbageImgs.length)],
        left: Math.round(Math.random() * wx.getSystemInfoSync().windowWidth),
        top: Math.round(Math.random() * wx.getSystemInfoSync().windowHeight)
      })
    }
    return result
  },
  tapgarbage: function(event) {
    const img = event.currentTarget.dataset.img
    if (img.indexOf('dangerous') > -1) {
      this.setData({
        showad: true,
        post: this.data.postImgs[Math.floor(Math.random() * this.data.postImgs.length)]
      })
      var me = this
      setTimeout(function() {
        app.globalData.points += 5;
        me.setData({
          showad: false,
          points: app.globalData.points
        })
      }, 5000)
    }
    const id = event.currentTarget.id
    this.data.garbages.splice(this.data.garbages.findIndex(item => item.id === id), 1)
    app.globalData.points += 1;
    this.setData({
      points: app.globalData.points
    })
  }
})