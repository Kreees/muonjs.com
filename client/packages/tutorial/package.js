module.exports = {
    "useAppLayout": true,
    pages: ["*"],
    routes: [
        {
            route: "",
            redirect: "start"
        },
        {
            route: "start"
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
            this.m.setProjection("tutorial_index",{view:type+"_summary"});
        },
        "chapter": function(type,id,sub){
            var _this = this;
            this.index(type);
            if (this.chapterType != id){
                this.chapterType  = id;
                this.m.setProjection("tutorial_chapter",{
                    view: id.replace(/-/g,'_')+"_"+type+"_chapter",
                    index: type+"_index"
                });
            }
            setTimeout(function(){
                _this.currentPage.focus(sub);
            },300);
        }
    }
};