module.exports = {
    "useAppLayout": true,
    pages: ["*"],
    ready: function(cb){
        cb();
    },
    routes: [
        {
            route: "",
            redirect: "general"
        },
        {
            route: ":type",
            callback: "index",
            page: 'index'
        },
        {
            page: "chapter",
            route: ":type/:id(/:sub)",
            callback: "chapter"
        }
    ],
    surrogate: {
        "index": function(type){
            if (this.indexType == type) return;
            this.indexType = type;
            this.m.setProjection("tutorial_section",{type: type});
        },
        "chapter": function(type,id,sub){
            var _this = this;
            this.index(type);
            if (this.chapterType != id){
                this.chapterType  = id;
                this.m.setProjection("tutorial_section",{type: type});
                this.m.setProjection("tutorial_chapter",{
                    type: id.replace(/-/g,'_')+"_"+type,
                });
            }
            setTimeout(function(){
                _this.currentPage.focus(sub);
            },300);
        }
    }
};