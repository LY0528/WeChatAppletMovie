//index.js
//获取应用实例
const app = getApp()
const util = require('../../utils/util.js')

Page({
  data: {
    itemList: []
  },
  //事件处理函数
  detail: function(e){
    wx.navigateTo({
      url: '../detail/detail?movieId='+e.currentTarget.dataset.movieid
    })
  },
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    util.request('movies.today', {
      cityid: 3
    }, r => {
      console.log(r)
      this.setData({
        itemList: r.result
      })
    })
  }
})
