var Q = require("q");
var sup = m.super;
var socialCheck = require("./_helper/social_check")
var _ = require("underscore");

module.exports = sup.extend({
    dependencies: ["social_session"],
    permissions: function(){
        var dfd = Q.defer();
        Q.when(sup.permissions.call(this,arguments)).then(function(proms){
            dfd.resolve(proms.concat(["search","get","create"]));
        },dfd.reject);
        return dfd.promise;
    },
    actions: {
        create: function(req,res){
            var dfd = Q.defer();
            var _this = this;
            socialCheck(this.data).then(function(){
                _this.data.nick = _this.data.socialType + _this.data.socialId;
                _this.model.db.find({}).then(function(a){
                    sup.actions.create.apply(_this,arguments).then(dfd.resolve,dfd.reject);
                }).done();
            },dfd.reject).done();
            return dfd.promise;
        }
    }
});