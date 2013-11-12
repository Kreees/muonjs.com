module.exports = m.rest.extend({
	permissions: ["all"],
	decorator: false,
	actions: {
		"create":function(req,res){
			return m.rest.actions.create.apply(this,arguments);
		},
		"edit":function(req,res){
			return m.rest.actions.edit.apply(this,arguments);
		},
		"get":function(req,res,id){
			return m.rest.actions.get.apply(this,arguments);
		},
		"delete":function(req,res,id){
			return m.rest.actions.delete.apply(this,arguments);
		},
		"index":function(req,res){
			return m.rest.actions.index.apply(this,arguments);
		},
		"search":function(req,res){
			return m.rest.actions.search.apply(this,arguments);
		}
	}
});
