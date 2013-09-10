module.exports = {
    "use_app_layout": true,
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
            if (this.index_type == type) return;
            this.index_type = type;
            this.m.set_projection("tutorial_index",{view:type+"_summary"});
        },
        "chapter": function(type,id,sub){
            var _this = this;
            this.index(type);
            if (this.chapter_type != id){
                this.chapter_type  = id;
                this.m.set_projection("tutorial_chapter",{
                    view: id.replace(/-/g,'_')+"_"+type+"_chapter",
                    index: type+"_index"
                });
            }
            setTimeout(function(){
                _this.current_page.focus(sub);
            },300);
        }
    }
};