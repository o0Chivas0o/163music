// 首页推荐歌曲
define(['jquery', '../vendors/av-min.js'], function ($, AV) {
  function loadSongs () {
    getSongs().then(fillSongs, function (error) {
      alert('获取歌曲失败')
    })

    function template (result) {
      let Song = result.attributes
      return `
             <li>
                 <a href="./song.html?id=${result.id}">
                    <h3>${Song.name}</h3>
                        <p>
                           <i class="sq">
                              <svg class="icon" aria-hidden="true">
                                   <use xlink:href="#icon-sq"></use>
                              </svg>
                           </i>
                               ${Song.singer} - ${Song.album}
                        </p>
                            <i class="playButton">
                               <svg class="icon" aria-hidden="true">
                                    <use xlink:href="#icon-play"></use>
                               </svg>
                            </i>
                 </a>
             </li>`
    }

    function fillSongs (results) {
      $('div#loading-img').remove()
      for (let i = 0; i < results.length; i++) {
        let li = template(results[i])
        $('ol#songs').append(li)
      }
    }

    function getSongs () {
      let query = new AV.Query('Song')
      return query.find()
    }
  }
  return loadSongs
})
