speed = ""

window.IndexWidget = m.WidgetView.extend {
  rendered: ->
    top = @$el.css("top")
    left = @$el.css("left")
    @updateSelectedTitle = (a,title)=>
      el = @$("a[data-route='"+title+"']").parent()
      parent = el.parent()
      @$("li").not(el).removeClass("active")
      el.addClass("active")
      if parent.hasClass("subsection")
        parent.show(speed)
        parent.siblings("ol").hide(speed)
      else
        el.next("ol").show(speed);
        el.next("ol").siblings("ol").hide(speed);
    $(this.m).on("projection_updated.chapter_link",@updateSelectedTitle)

    ol = @$el
    positionTop = ol.offset().top
    positionLeft = ol.offset().left
    width = ol.outerWidth(true)

    fixedFlag = false

    @scrollHandler = =>
      if $(window).scrollTop() > positionTop - 50
        return if fixedFlag
        fixedFlag = true
        ol.css({
          "position": "fixed"
          "top": positionTop - 60
          "left": positionLeft
          "width": width
        })
      else
        return if !fixedFlag
        fixedFlag = false
        ol.css({
          "position": "static"
          "left": null
          "right": null
          "width": null
        })
    window.addEventListener("scroll",@scrollHandler,false)

  beforeRemove: ->
    $(this.m).off("projection_updated.chapter_link",@updateSelectedTitle)
    window.removeEventListener("scroll",@scrollHandler)
  beforeReload: ->
    $(this.m).off("projection_updated.chapter_link",@updateSelectedTitle)
    window.removeEventListener("scroll",@scrollHandler)
  events: {
    "click ol > ol": "selected_paragraph"
    "click div > ol > li a": "selected_chapter"
  }
  selected_paragraph: (e)->
    $(e.currentTarget).siblings("ol").hide(speed);
  selected_chapter: (e)->
    $(e.currentTarget).next("ol").show(speed);
    $(e.currentTarget).next("ol").siblings("ol").hide(speed);
}