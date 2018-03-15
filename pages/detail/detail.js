const util = require('../../utils/util.js')

Page({
  data: {
    details: {
      release_date: ''
    }
  },
  onLoad: function (option) {
    util.request('query', {
      movieid: option.movieId
    }, r => {
      console.log(r)
      r.result.release_date = r.result.release_date.substr(0, 4) + '-' + r.result.release_date.substr(4, 2) + '-'+r.result.release_date.substr(6, 2)
      this.setData({
        details: r.result
      })
      wx.setNavigationBarTitle({
        title: r.result.title
      })
    })
  }
})