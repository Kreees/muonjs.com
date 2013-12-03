var sup = m.super;

module.exports = sup.extend({
    permissions: function(){
        var permissions = sup.permissions.call(this,arguments);
        return permissions.concat("search");
    }
})