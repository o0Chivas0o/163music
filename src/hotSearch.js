// 封装close
define(['jquery','../vendors/av-min.js'],function($,AV){
  let close = function () {
    $('#search').val('')
    $('.u-svg-empty').removeClass('active')
    $('#searchResult').empty().show()
    $('.hotResearch').show()
    $('.searchContent').hide()
    $('#hot-list').hide()
  }

// 清空input按钮
  $('.u-svg-empty').on('click', function () {
    close()
  })

// 点击热门搜索
  $('.hotResearch> ul').on('click', 'li', function (e) {
    let $ul = $(e.currentTarget)
    $('#search').val($ul.text())
    var value = $('#search').val()
    var query1 = new AV.Query('Song')
    query1.contains('name', value)
    var query2 = new AV.Query('Song')
    query2.contains('singer', value)
    var query = AV.Query.or(query1, query2)
    $('.hotResearch').hide()
    $('.u-svg-empty').addClass('active')
    $('#searchResult').empty()
    query.find().then(function (results) {
      for (var i = 0; i < results.length; i++) {
        $('#hot-list').empty()
        $('#hot-list').show()
        if (results.length === 0) {
          $('#searchResult').html('<div>暂无搜索结果</div>')
          $('.searchContent').hide()
        } else {
          let song = results[i].attributes
          let li = `
                    <li>
                            <a href="./song.html?id=${results[i].id}">
                                <div class="song-info">
                                    <div class="hot-cont">
                                        <div class="hot-title">${song.name}</div>
                                        <div class="hot-info">
                                            <i class="sq">
                                                <svg class="icon" aria-hidden="true">
                                                    <use xlink:href="#icon-sq"></use>
                                                </svg>
                                            </i>
                                            ${song.singer} - ${song.album}
                                        </div>
                                    </div>
                                    <div class="play-button">
                                        <span class="btn"></span>
                                    </div>
                                </div>
                            </a>
                        </li>
                 `
          $('#hot-list').append(li)
        }
      }
    }, function (error) {
    })
  })

// 显示搜索
  $('.result').on('click', 'li', function (e) {
    let $li = $(e.currentTarget)
    let index = $li.index()
    $('#search').val($('.result span').eq(index).text())
    let value = $('.result span').eq(index).text()
    let query = new AV.Query('Song')
    query.contains('name', value)
    $('.searchContent').hide()
    query.find().then(function (results) {
      for (var i = 0; i < results.length; i++) {
        $('#hot-list').empty()
        $('#hot-list').show()
        let song = results[i].attributes
        let li = `
                        <li>
                            <a href="./song.html?id=${results[i].id}">
                                <div class="song-info">
                                    <div class="hot-cont">
                                        <div class="hot-title">${song.name}</div>
                                        <div class="hot-info">
                                            <i class="sq">
                                                <svg class="icon" aria-hidden="true">
                                                    <use xlink:href="#icon-sq"></use>
                                                </svg>
                                            </i>
                                            ${song.singer} - ${song.album}
                                        </div>
                                    </div>
                                    <div class="play-button">
                                        <span class="btn"></span>
                                    </div>
                                </div>
                            </a>
                        </li>
                     `
        $('#hot-list').append(li)

        $('#searchResult').hide()
      }
    }, function (error) {
    })
  })

  /* 热门歌曲列表 */
  $('.hot-list > ol').on('click', 'li', function () {
    $('#search').val($(this).text())
    hot()
  })

// 封装hot
  let hot = function () {
    $('#searchResult').empty()
    $('.hot-list').hide()
    $('.hotResearch').hide()
    $('.u-svg-empty').addClass('active')
    $('#searchResults').empty()
    let value = $('#search').val()
  }
})