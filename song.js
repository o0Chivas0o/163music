//正则获取歌曲id
function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}


let id =getParameterByName('id');
var query = new AV.Query('Song');
query.get(id).then(function (song) {
    let cover = song.attributes.cover
    let singer = song.attributes.singer
    let name =song.attributes.name
    let img = `<img class="cover" src="${cover}" alt="封面图片">`
    let {url,lyric} = song.attributes
    $('.circle').append(img)
    $('.bg').css('background-image',`url(${cover})`,'background-size',`cover`)
    let h2 = `<h2>${name} - ${singer}</h2>`
    $('.lyric > .name').append(h2)
    let audio = document.createElement('audio')
    audio.src = url
    $('body').append(audio)
    $('.pointer').addClass('pause')
    $('.bofang').on('click',function(){
        audio.play()
        $('.circle').addClass('playing').removeClass('pause')
        $('.pointer').removeClass('pause')
        $('.bofang').addClass('active')
        $('.zanting').addClass('active')
    })
    $('.zanting').on('click',function(){
        audio.pause()
        $('.circle').removeClass('playing').addClass('pause')
        $('.pointer').addClass('pause')
        $('.bofang').removeClass('active')
        $('.zanting').removeClass('active')
    })
    audio.loop = false
    audio.addEventListener('ended',function(){
        $('.circle').removeClass('playing')
        $('.pointer').addClass('pause')
        $('.zanting').addClass('active')
    },false)
    let array = []
    let parts = lyric.split('\n')
    parts.forEach(function(string,index){
        let xxx = string.split(']')
        xxx[0] = xxx[0].substring(1)
        let regex = /(\d+):([\d.]+)/
        let matches = xxx[0].match(regex)
        let minute = +matches[1]
        let seconds = +matches[2]
        array.push({
            time: minute*60+seconds,
            lyric: xxx[1]
        })
    })
    let $lyric = $('.lyric > .songLyric')
    array.map(function(song){
        if(!song){return}
        let $p =$('<p/>')
        $p.attr('data-time',song.time).text(song.lyric)
        $p.appendTo($lyric.children('.lines'))
    })
    setInterval(function() {
        let $lines = $('.lines >p')
        let current = audio.currentTime
        let $whichLine
        for(var i=0;i<$lines.length;i++){
            let currentLineTime = $lines.eq(i).attr('data-time');
            let nextLineTime = $lines.eq(i+1).attr('data-time');
            if($lines.eq(i+1).length !==0 && currentLineTime < current && nextLineTime > current){
                $whichLine = $lines.eq(i)
            }
            if($whichLine){
                $whichLine.addClass('active').prev().removeClass('active')
                let top = $whichLine.offset().top;
                let linesTop = $('.lines').offset().top;
                let delta = Math.floor(top - linesTop - $('.songLyric').height()/4)
                $('.lines').css('transform',`translateY(-${delta}px)`)
            }
        }
    },300)
})