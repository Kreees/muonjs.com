m.ChapterWidgetView = m.WidgetView.extend {
  rendered: ->
    @scrollHandler = _.throttle(=>
      @$("h5")
    ,100);

    window.addEventListener("scroll",)
  removed: ->

}