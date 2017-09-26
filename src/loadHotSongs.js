// 热歌榜 Page-2
define(['jquery', '../vendors/av-min.js'], function ($, AV) {
  function loadHotSongs () {
    getHotSongs().then(fillHotSongs, function (error) {
      alert('获取歌曲失败')
    })

    function fillHotSongs (results) {
      $('div#loading-img').remove()
      for (var i = 0; i < results.length; i++) {
        let Song = results[i].attributes
        if (i < 9) {
          let li = `
                    <li>
                            <a href="./song.html?id=${results[i].id}">
                                <div class="number">0${i + 1}</div>
                                <div class="songinfo">
                                    <div class="content">
                                        <div class="title">${Song.name}</div>
                                        <div class="info">
                                            <i class="sq">
                                                <svg class="icon" aria-hidden="true">
                                                    <use xlink:href="#icon-sq"></use>
                                                </svg>
                                            </i>
                                            ${Song.singer} - ${Song.album} 
                                        </div>
                                    </div>
                                    <div class="playbutton">
                                        <span class="btn"></span>
                                    </div>
                                </div>
                            </a>
                        </li>
                 `
          $('ol#hotSongs').append(li)
        } else {
          let li = `
                    <li>
                            <a href="./song.html?id=${results[i].id}">
                                <div class="number">${i + 1}</div>
                                <div class="songinfo">
                                    <div class="content">
                                        <div class="title">${Song.name}</div>
                                        <div class="info">
                                            <i class="sq">
                                                <svg class="icon" aria-hidden="true">
                                                    <use xlink:href="#icon-sq"></use>
                                                </svg>
                                            </i>
                                            ${Song.singer} - ${Song.album} 
                                        </div>
                                    </div>
                                    <div class="playbutton">
                                        <span class="btn"></span>
                                    </div>
                                </div>
                            </a>
                        </li>
                 `
          $('ol#hotSongs').append(li)
        }
      }
    }

    function getHotSongs () {
      let query = new AV.Query('Song')
      return query.find()
    }
  }
  return loadHotSongs
})
