//logs.js
const util = require('../../utils/util.js')

Page({
  data: {
    itemList: []
  },
  cinemaMovie: function(e) {
    wx.navigateTo({
      url: '../cinemasMovies/cinemasMovies?cinemaId=' + e.currentTarget.dataset.cinemaid
    })
  },
  callPhone: function(e){
    wx.makePhoneCall({
      phoneNumber: e.currentTarget.dataset.phone
    })
  },
  getLocalCinemas: function (lat, lon){
    util.request('cinemas.local', {
      dtype: 'json',
      lat: lat,
      lon: lon,
      radius: 3000
    }, r => {
      this.setData({
        itemList: r.result
      })
    })
  },
  onLoad: function () {
    wx.getLocation({
      success: data =>{
        this.getLocalCinemas(data.latitude, data.longitude)
      }
    })
  }
})
