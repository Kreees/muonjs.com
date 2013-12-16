var Q = require('q'),
    _ = require("underscore"),
    socialCheck = require("./_helper/social_check"),
    crypto = require("crypto");

var sup = m.super;
module.exports = sup.extend({
    actions: {
        "create": function(req,res){
            var md5 = crypto.createHash("md5");
            var dfd = Q.defer();
            var _this = this;
            this.m.models.social_user.db.find({socialType: this.data.socialType,socialId: this.data.socialId}).limit(1)
                .then(function(user){
                    user = user[0];
                    if (!user) return dfd.reject([404,"User doesn't exists"]);
                    socialCheck(_this.data)
                        .then(function(){
                            new _this.model({
                                "user": user,
                                "created": new Date(),
                                "last_view": new Date(),
                                "session_id": md5.update(user+new Date().toISOString()).digest("hex"),
                                "expires": new Date(Date.now() + 1000*3600*24*30)
                            }).save().then(function(a){
                                res.cookie(
                                    _this.cookieName,
                                    a.get("session_id"),
                                    req.body.remember?{expires: new Date(Date.now() + 1000000000000)}:{});
                                dfd.resolve(a)
                        },dfd.reject).done();
                    },dfd.reject).done();;
                });
            return dfd.promise;
       }
   }
});