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
            console.log(i)
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
$('input#search').on('input',function (e) {
    let $input = $(e.currentTarget);
    let value = $input.val().trim();
    if(value===''){return}
    var query = new AV.Query('Song');
    query.contains('name', value);
    query.find().then(function(results){
        $('#searchResult').empty();
        if(results.length === 0){
            $('#searchResult').html('暂无搜索结果')
        }else{
            for(var i=0; i<results.length; i++){
                let song = results[i].attributes;
                let li = `
                    <li data-id="${song.objectId}">
                     <a href="#">
                        <i class="u-svg u-svg-search"></i>
                        <span>
                         ${song.name} - ${song.singer}
                        </span>
                    </li>
                    `;
                $('#searchResult').append(li)
            }
        }
    })
});
