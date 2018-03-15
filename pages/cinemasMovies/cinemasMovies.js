const util = require('../../utils/util.js')

Page({
  data: {
    itemList: {},
    currentData: {}
  },
  handleChange: function(e){
    for (let key of Object.keys(this.data.itemList.lists)){
      if (e.detail.current == key) {
        return this.setData({
          currentData: this.data.itemList.lists[key]
        })
      }
    }
  },
  buyTicket: function(e){
    wx.navigateTo({
      url: e.currentTarget.dataset.url // 小程序无法访问外部链接，所以此处无效
    })
  },
  callPhone: function(e){
    wx.makePhoneCall({
      phoneNumber: e.currentTarget.dataset.phone
    })
  },
  cinemasMovies: function (cinemaid){
    util.request('cinemas.movies', {
      cinemaid: cinemaid
    }, r => {
      console.log(r)
      this.setData({
        itemList: r.result,
        currentData: r.result.lists && r.result.lists[0]
      })
      wx.setNavigationBarTitle({
        title: r.result.cinema_info.name
      })
    })
  },
  onLoad: function(options){
    this.cinemasMovies(options.cinemaId)
  }
})