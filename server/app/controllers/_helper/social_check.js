var Q = require("q"),
    _ = require("underscore"),
    httpsGet = require("https").get,
    httpGet = require("http").get;

module.exports = function(descr){
    var dfd = Q.defer();
    var url,getMethod;
    switch(descr.socialType){
        case "FB":
            url = "https://graph.facebook.com/"+descr.socialId+"?access_token="+descr.accessToken;
            getMethod = httpsGet;
            break;
        default:
            m.log("Bad request");
            return _.defer(dfd.reject,[400,"Unknown social network type"]);
    }

    var res = getMethod(url,function(res){
        if (res.statusCode != 200) dfd.reject([res.statusCode,res.responseText]);
        else dfd.resolve();
    }).on("error", _.partial(dfd.reject,[403,"Access to the Social account is not allowed"]))
    return dfd.promise;
}