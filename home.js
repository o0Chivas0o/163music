//tab组件

$('.tabs').on('click','li',function(e){
    var $li = $(e.currentTarget);
    var index = $li.index();
    $li.addClass('active').siblings().removeClass('active');
    $('.tabContent').children().eq(index).addClass('active').siblings().removeClass('active')
});


//AV.js
var APP_ID = 'Eix3vKYRx3siO2vV8s30yAPG-gzGzoHsz';
var APP_KEY = '24qwRAbG2s0ei8lLEwd8z1wi';

AV.init({
    appId: APP_ID,
    appKey: APP_KEY
});
//首页推荐歌单
let $olPlayList = $('ol#playList');
var query = new AV.Query('Playlist');
query.find().then(function (results) {
    $('div#loading-img').remove();
    for (var i = 0; i < results.length; i++) {
        let Playlist = results[i].attributes;
        let li = `
                        <li>
                            <div class="cover">
                                <img src="${Playlist.url}" alt="">
                                <span>${Playlist.hotnumber}</span>
                            </div>
                            <p>${Playlist.description}</p>
                        </li>
        `;
        $olPlayList.append(li)
    }
}, function (error) {
        alert('获取歌曲失败')
});


//首页推荐歌曲
let $olSongs = $('ol#songs');
var query = new AV.Query('Song');
query.find().then(function (results) {
    $('div#loading-img').remove();
    for (var i = 0; i < results.length; i++){
        let Song = results[i].attributes;
        let li = `
                        <li>
                          <a href="./play.html?id=">
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
                        </li>
                 `;
        $olSongs.append(li)
    }
}, function (error) {
    alert('获取歌曲失败')
});

//热歌榜
let $olhotSongs = $('ol#hotSongs');
var query = new AV.Query('Song');
query.find().then(function (results) {
    $('div#loading-img').remove();
    for (var i = 0; i < results.length; i++) {
        let Song = results[i].attributes;
        if (i< 9)  {
            let li = `
                    <li>
                            <a href="#">
                                <div class="number">0${i+1}</div>
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
                 `;
            $olhotSongs.append(li)
        }
        else {
            let li = `
                    <li>
                            <a href="#">
                                <div class="number">${i+1}</div>
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
                 `;
            $olhotSongs.append(li)
        }
    }
}, function (error) {
    alert('获取歌曲失败')
});

//搜索歌曲

let timer = null; //设置闹钟
$('input#search').on('input',function (e) {
    if(timer){window.clearTimeout(timer)}
    timer = setTimeout(function(){
        timer = null;
        let $input = $(e.currentTarget);
        let value = $input.val().trim();
        if(value===''){return (close())}
        var query1 = new AV.Query('Song');
        query1.contains('name', value);
        var query2 = new AV.Query('Song');
        query2.contains('singer', value);
        var query3 = new AV.Query('Song');
        query3.contains('album', value);
        var query4 = new AV.Query('Song');
        query4.contains('noun', value);
        var query = AV.Query.or(query1, query2,query3,query4);
        $('.hotResearch').hide();
        $('.u-svg-empty').addClass('active');
        $('.searchContent').html(`<h3>搜索“${value}”</h3>`).show();
        query.find().then(function(results){
            $('#searchResult').empty();
            if(results.length === 0){
                $('#searchResult').html('<div>暂无搜索结果</div>')
                $('.searchContent').hide()
            }else{
                for(var i=0; i<results.length; i++){
                    let song = results[i].attributes;
                    let li = `
                    <li>
                     <a href="#">
                        <i class="u-svg u-svg-search"></i>
                        <span class="songName">${song.name}</span>
                     </a>
                    </li>
                    `;
                    $('#searchResult').append(li)
                }
            }
        })
    },300)
});

//封装close
var close = function(){
    $('#search').val('');
    $('.u-svg-empty').removeClass('active');
    $('#searchResult').empty();
    $('.hotResearch').show();
    $('.searchContent').hide();
    $('#hot-list').hide()
};

//清空input按钮
$('.u-svg-empty').on('click', function () {
        close()
});

//点击热门搜索
$('.hotResearch> ul').on('click', 'li', function (e) {
    let $ul = $(e.currentTarget);
    $('#search').val($ul.text());
    var value = $('#search').val();
    var query1 = new AV.Query('Song');
    query1.contains('name', value);
    var query2 = new AV.Query('Song');
    query2.contains('singer', value);
    var query = AV.Query.or(query1, query2);
    $('.hotResearch').hide();
    $('.u-svg-empty').addClass('active');
    query.find().then(function (results){
        for (var i = 0; i<results.length; i++){
            $('#hot-list').empty();
            $('#hot-list').show();
            let song = results[i].attributes;
            let li =`
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
                 `;
            $('#hot-list').append(li)
        }
    }, function (error) {
    })
});

//显示搜索
$('#searchResult').on('click','li',function() {
    $('#search').val($('span.songName').text());
    var value = $('span.songName').text();
    var query = new AV.Query('Song');
    query.contains('name', value);
    $('.searchContent').hide();
    query.find().then(function (results) {
        for (var i = 0; i < results.length; i++) {
            $('#searchResult').hide()
            let song = results[i].attributes;
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
    }, function (error) {
        console.log(error)
    })
});





/*热门歌曲列表*/
$('.hot-list > ol').on('click', 'li', function () {
    $('#search').val($(this).text());
    hot()
});

//封装hot
var hot = function () {
     $('.hot-list').hide();
     $('.hotResearch').hide();
     $('.u-svg-empty').addClass('active');
     $('#searchResults').empty();
     var value = $('#search').val();
};