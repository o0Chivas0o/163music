// 初始化AV.js
define(['av'], function (AV) {
  return function () {
    let APP_ID = 'Eix3vKYRx3siO2vV8s30yAPG-gzGzoHsz'
    let APP_KEY = '24qwRAbG2s0ei8lLEwd8z1wi'

    AV.init({
      appId: APP_ID,
      appKey: APP_KEY
    })
  }
})
