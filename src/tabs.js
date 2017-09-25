// tab组件
define(['jquery'], function ($) {
  return tabs
  function tabs (selectorOrDom) {
    let $tabs = $(selectorOrDom)
    $tabs.on('click', '.tabs-nav>li', function (e) {
      let $li = $(e.currentTarget)
      let index = $li.index()
      $li.addClass('active').siblings().removeClass('active')
      $li.closest('.tabs').find('.tabContent').children().eq(index)
        .addClass('active').siblings().removeClass('active')
    })
  }
})
