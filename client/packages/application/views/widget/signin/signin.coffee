m.WidgetView.extend {
  "rendered":->
    console.log 1
  "events": {
    "click a": "toggle_opts"
    "connected [data-muon='signup_widget']": ->
      m.setProfile("authorized")
  }
  "toggle_opts": ->
    @$("a + div").toggleClass("visible")
}