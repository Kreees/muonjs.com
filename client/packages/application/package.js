module.exports = {
    "dependencies": [],
    "use_app_layout": true,
    "pages": ["*"],
    "models": ["social_*"],
    routes:[
        {
            route:"",
            redirect: "home"
        },
        {route: "home"},
        {route: "downloads"},
        {
            route: "tutor",
            package: "tutorial"
        },
        {route: "doc"},
        {route: "contacts"},
        {route: "examples"},
        {route: "progress"},
        {
            route: "admin",
            package: "MUON:admin"
        }

    ],
    "ready": function(callback){
        callback && callback();
    }
};