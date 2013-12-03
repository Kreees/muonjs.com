createUser = ->
  console.log "Here"

m.WidgetView.extend {
  init: ->
#    this.m.model_social_user.get("me").then((user)=>
#      this.m.setProjection("socialUser",user)
#      m.setProfile("authorized")
#    ,=>
#      m.removeProfile("authorized")
#    )
  "events": {
    "click a.signin": "toggle_opts"
    "click a.logout": ->
      m.removeProfile("authorized")

    "connected [data-muon='signup_widget']": (e,r)->
      social = {}
      type = e.currentTarget.dataset.pack;
      if type == "MUON:social.facebook"
        console.log r
        social.accessToken = r.accessToken
        social.userId = r.userID
        social.type = "FB"
      if !social.type
        alert("Wrong social network type!")
        return;
      m_soc_user = this.m.models["social_user"]
      m_soc_session = this.m.models["social_user"]
      col = m_soc_user.collection({type:social.type,userId:social.userId});
      col.fetch().then(
        (users)=>
          if (users.models.length == 0)
            a = new m_soc_user(social);
            a.save().then(->
              a = new m_soc_session({social})
              a.save().then(->
                m.setProfile("authorized")
              ,->
                alert("Fail to create")
              )
            )
          else
            a = new m_soc_session({social})
            a.save().then(->
              m.setProfile("authorized")
            ,->
              alert("Fail to create")
            )
      )

  }
  "toggle_opts": ->
    @$("a + div").toggleClass("visible")
}