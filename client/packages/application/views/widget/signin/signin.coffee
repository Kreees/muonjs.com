createUser = ->
  console.log "Here"

m.WidgetView.extend {
  init: ->
    this.m.model_social_user.get("me").then((user)=>
      this.m.setProjection("socialUser",user)
      m.setProfile("authorized")
    ,=>
      m.removeProfile("authorized")
    )
  "events": {
    "click a.signin": "toggle_opts"
    "click a.logout": "logout"
    "connected [data-muon='signup_widget']": "login"
  }
  "logout": ->
    new this.m.model_social_session({_id: "me"}).destroy();
    m.removeProfile("authorized")
  "login": (e,r)->
      self = this;
      self.$el.addClass("loading");
      social = {};
      type = e.currentTarget.dataset.pack;
      if type == "MUON:social.facebook"
        social.accessToken = r.accessToken
        social.socialId = r.userID
        social.socialType = "FB"
      if !social.socialType
        alert("Wrong social network type!")
        return;
      userModel = this.m.models["social_user"]
      sessionModel = this.m.models["social_session"]
      col = userModel.collection({socialType:social.socialType,socialId:social.socialId});
      col.fetch().then(
        (users)=>
          if (users.models.length == 0)
            a = new userModel(social);
            a.save().then(->
              a = new sessionModel(social)
              a.save().then(->
                m.setProfile("authorized")
              ,->
                alert "something goes wrong"
              )
            )
          else
            a = new sessionModel(social)
            a.save().then(->
              m.setProfile("authorized")
            ,->
              alert("Fail to create")
            )
      )
  "toggle_opts": ->
    @$("a + div").toggleClass("visible")
}