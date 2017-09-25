define(['jquery', 'av'], function ($, AV) {
  // 搜索歌曲
  let timer = null // 设置闹钟

  function search () {
    $('input#search').on('input', function (e) {
      throttle(function () {
        searchResult($(e.currentTarget).val().trim())
      }, 300)
    })
  }
  return search

  function throttle (callback, time) {
    if (timer) { window.clearTimeout(timer) }
    timer = setTimeout(function () {
      timer = null
      callback()
    }, time)
  }

  function template (song) {
    return `
        <li>
            <a href="#">
               <i class="u-svg u-svg-search"></i>
                  <span class="songName">${song.name}</span>
            </a>
        </li>`
  }

  function searchSongs (value) {
    let query1 = new AV.Query('Song')
    query1.contains('name', value)
    let query2 = new AV.Query('Song')
    query2.contains('singer', value)
    let query3 = new AV.Query('Song')
    query3.contains('album', value)
    let query4 = new AV.Query('Song')
    query4.contains('noun', value)
    $('.hotResearch').hide()
    $('.u-svg-empty').addClass('active')
    $('.searchContent').html(`<h3>搜索“${value}”</h3>`).show()
    return AV.Query.or(query1, query2, query3, query4).find()
  }

  function showSearchResult (results) {
    $('#searchResult').empty()
    if (results.length === 0) {
      $('#searchResult').html('<div>暂无搜索结果</div>')
      $('.searchContent').hide()
    } else {
      for (let i = 0; i < results.length; i++) {
        let song = results[i].attributes
        let li = template(song)
        $('#searchResult').append(li)
      }
    }
  }

  function searchResult (value) {
    if (value === '') {
      return (close())
    } else {
      searchSongs(value).then(showSearchResult)
    }
  }
})
