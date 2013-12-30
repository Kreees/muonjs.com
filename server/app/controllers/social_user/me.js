var sup = m.super;

module.exports = sup.extend({
    dependencies: ["social_session"],
    actions: {
        "get": function(req,res,id) {
            return sup.actions.get.call(this,req,res,id);
        }
    }
})