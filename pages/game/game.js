Page({
  data: {
    fishArray: [{
      positionClass: 'fish_wrap right_left_4',
      fishClass: 'fish_1',
      id: 'fish_1'
    }, {
      positionClass: 'fish_wrap left_right_3',
      fishClass: 'fish_6',
      id: 'fish_2'
    },{
      positionClass: 'fish_wrap right_left_2',
      fishClass: 'fish_1',
      id: 'fish_3'
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
    ]
  },
  onLoad: function() {
  },

  tapFish: function(event) {
    console.log(event.currentTarget.id);
  }
})