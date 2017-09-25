requirejs .config({
  paths: {
    jquery: '../vendors/jquery.min',
    av: '../vendors/av-min'
  }
})

require(['./avReset', './tabs', './loadPage', './loadSongs',
  './loadHotSongs','./search', './hotSearch'],
function (avReset, tabs, loadSongs, loadPage, loadHotSongs, search) {
  avReset()
  tabs('.tabs')
  loadSongs()
  loadPage()
  loadHotSongs()
  search()
})
