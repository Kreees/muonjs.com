m.PageLayoutView.extend {
  events: {
    "click a#debug_tubmpler": "toggle_debug"
  }
  toggle_debug: ->
    m.set_debug(!m.is_debug())
}