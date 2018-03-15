const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}
const request = (url, param, callback) => {
  param.key = 'eb0c200a791a406d222c44240cabf7a2'
  wx.request({
    url: 'https://v.juhe.cn/movie/' + url,
    data: param,
    header: {
      'content-type': 'application/json'
    },
    method: 'get',
    success: function (response) {
      callback(response.data)
    },
    fail: function (response) {
      callback(response)
    }
  })
}
module.exports = {
  formatTime: formatTime,
  request: request
}
