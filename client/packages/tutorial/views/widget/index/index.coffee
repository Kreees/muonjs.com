speed = ""

window.IndexWidget = m.WidgetView.extend {
  rendered: ->
    top = @$el.css("top")
    left = @$el.css("left")
    offsetTop = @$el.offset().top
    offsetLeft = @$el.offset().left
    positionType = @$el.css("position");
    $(this.m).on("projection_update",->

    )
    @scrollListener = (ev)=>
      windowScroll = $(window).scrollTop();
      if windowScroll > offsetTop - 50
        @$el.css({
          position: "fixed",
          top: offsetTop - 50,
          left: offsetLeft,
        })
      else
        @$el.css({
          position: positionType,
          top: top,
          left: left
        })
    window.addEventListener("scroll",@scrollListener)
  removed: ->
    window.removeEventListener("scroll",@scrollListener)
  events: {
    "click ol > ol": "selected_paragraph"
    "click div > ol > li": "selected_chapter"
  }
  selected_paragraph: (e)->
    $(e.currentTarget).siblings("ol").hide(speed);
  selected_chapter: (e)->
    $(e.currentTarget).next().show(speed);
    $(e.currentTarget).next().siblings("ol").hide(speed);

}