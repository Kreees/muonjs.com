m.ChapterDataWidgetView = m.WidgetView.extend {
  events: {
    "mouseover *[data-hover]": (e)->
      $(e.currentTarget.dataset.hover).addClass("global_hover");
    "mouseout *[data-hover]": (e)->
      $(e.currentTarget.dataset.hover).removeClass("global_hover");
  }
}