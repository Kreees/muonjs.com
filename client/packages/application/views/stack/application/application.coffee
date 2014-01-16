muon.ApplicationStackView.extend {
  target: "target",
  rendered: ->
    @routeHandler = ()=>
      path = m.router.path();
      path = path.substr(1);
      if (path.indexOf("/") != -1)
        path = path.substring(0,path.indexOf("/"));
      @$("[data-route='//"+path+"']").parent().addClass("active").siblings().removeClass("active");
    m.router.on("route",@routeHandler)
    @routeHandler();
  beforeRemove: ->
    m.router.off("route",@routeHandler)
}