speed = ""

window.IndexWidget = m.WidgetView.extend {
  rendered: ->
    top = @$el.css("top")
    left = @$el.css("left")
  removed: ->
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