// 首页推荐歌单
define(['jquery', 'av'], function ($, AV) {
  function loadPage () {
    getPage().then(fillPage, function (error) {
      alert('获取歌曲失败')
    })

    function template (result) {
      let Playlist = result.attributes
      return `
           <li>
               <div class="cover">
                   <img src="${Playlist.url}" alt="">
                   <span>${Playlist.hotnumber}</span>
               </div>
               <p>${Playlist.description}</p>
           </li>
        `
    }

    function fillPage (results) {
      $('div#loading-img').remove()
      for (let i = 0; i < results.length; i++) {
        let li = template(results[i])
        $('ol#playList').append(li)
      }
    }

    function getPage () {
      let query = new AV.Query('Playlist')
      return query.find()
    }
  }
  return loadPage
})
