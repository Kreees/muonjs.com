window.chapters = [];
window.ChapterWidgetView = m.WidgetView.extend {
  rendered: ->
    currentRoute = "-1"
    tutorialSection = this.m.getProjection("tutorial_section").type
    tutorialChapter = this.m.getProjection("tutorial_chapter").type.replace("_"+tutorialSection,"")

    animation_flag = false

    self = this

    @routeHandler = (a,b)=>
      return if tutorialChapter != b[1] || tutorialSection != b[0]
      elTo = @$(".title#"+b[2])
      animation_flag = true
      self.m.setProjection("chapter_link","/"+b.join("/"))
      targetTop = 0
      targetTop = elTo.offset().top - 70 if elTo[0]
      $("body, html").animate({"scrollTop": targetTop} ,1000,"swing", ->
        animation_flag = false
        self.m.setProjection("chapter_link","/"+b.join("/"))
      )
    m.router.on("route",@routeHandler)

    @scrollHandler = _.throttle(=>
      return if animation_flag
      lowest = 1000000
      element = @el
      element_top = 0
      @$("h5.title, h4.title, h3.title").each( ->
        _top = $(this).offset().top - $(window).scrollTop()
        top = Math.abs(_top)
        if lowest > top
          element_top = _top
          lowest = top
          element = this
      )
      if element_top > 250
        el = $(element).prevAll("h5.title, h4.title, h3.title")[0]
        if el
          element = el
          element_top = $(el).offset().top - $(window).scrollTop()
          lowest = Math.abs(element_top - 100)
      return if currentRoute == element.id
      currentRoute = element.id
      new_route = "/"+tutorialSection+"/"+tutorialChapter+"/"+element.id
      new_route = new_route.replace(/\/$/,"")
      m.router.navigate("/tutor"+new_route,{trigger: false})
      this.m.setProjection("chapter_link",new_route)
    ,300)
    setTimeout(_.partial(@routeHandler,null,m.router.path().replace(/^\/tutor\//,"").split("/")),200)
    window.addEventListener("scroll",@scrollHandler,false)
    _.defer(prettyPrint)

  beforeRemove: ->
    window.removeEventListener("scroll",@scrollHandler)
    m.router.off("route",@routeHandler)
  beforeReload: ->
    window.removeEventListener("scroll",@scrollHandler)
    m.router.off("route",@routeHandler)
  events: {
    "mouseover *[data-hover]": (e)->
      $(e.currentTarget.getAttribute("data-hover")).css({
        "background-image":"none"
        "background-color":"rgba(128,255,128,.3)"
        "box-shadow":"rgba(128,255,128,.3) 0 0 20px"
      })
    "mouseout *[data-hover]": (e)->
      $(e.currentTarget.getAttribute("data-hover")).css({
        "background-image": ""
        "background-color": ""
        "box-shadow": ""
      });
  }
}