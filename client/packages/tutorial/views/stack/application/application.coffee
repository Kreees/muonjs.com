m.ApplicationStackView.extend {
  target: "target",
  rendered: ->
    @routeHandler = (a,b,c)=>
      @$("[data-route='/"+b[0]+"']").parent().addClass("active").siblings().removeClass("active");
    m.router.on("route",@routeHandler)
  beforeRemove: ->
    m.router.off("route",@routeHandler)
}