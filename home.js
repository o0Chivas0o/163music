$('.tabs').on('click','li',function(e){
    var $li = $(e.currentTarget);
    var index = $li.index();
    $li.addClass('active').siblings().removeClass('active');
    $('.tabContent').children().eq(index).addClass('active').siblings().removeClass('active')
});

var APP_ID = 'Eix3vKYRx3siO2vV8s30yAPG-gzGzoHsz';
var APP_KEY = '24qwRAbG2s0ei8lLEwd8z1wi';

AV.init({
    appId: APP_ID,
    appKey: APP_KEY
});

let $olSongs = $('ol#songs');

var query = new AV.Query('Song');
query.find().then(function (results) {
    $('div#loading-img').remove();
    for (let i = 0; i < results.length; i++){
        let Song = results[i].attributes;
        let li = `
                        <li>
                            <h3>${Song.name}</h3>
                            <p>
                                <i class="sq">
                                    <svg class="icon" aria-hidden="true">
                                        <use xlink:href="#icon-sq"></use>
                                    </svg>
                                </i>
                                ${Song.singer}
                                    </p>
                            <a class="playButton" href="#">
                                <svg class="icon" aria-hidden="true">
                                    <use xlink:href="#icon-play"></use>
                                </svg>
                            </a>
                        </li>
                 `;
        $olSongs.append(li)
    }
}, function (error) {
    alert('获取歌曲失败')
});


$('input#search').on('input',function (e) {
    let $input = $(e.currentTarget);
    let value = $input.val().trim();
    if(value===''){return}
    var query = new AV.Query('Song');
    query.contains('name', value);
    query.find().then(function(results){
        $('#searchResult').empty();
        $('div#loading-img').remove();
        if(results.length === 0){
            $('#searchResult').html('暂无搜索结果')
        }else{
            for(var i=0; i<results.length; i++){
                let song = results[i].attributes;
                let li = `
                    <li data-id="${song.objectId}"> ${song.name} - ${song.singer} </li>
                    `;
                $('#searchResult').append(li)
            }
        }
    })
});