(function($){
    $("body").delegate("div.editable[data-role='editable']","click",function(ev){
        if (this != ev.currentTarget) return;
        else $(this).editable();
    })
    $.fn.editable = function(options){
        options = options || {}
        var proc = function(flag){
            var _this = $(this)
            if (this.tagName == "P") var textarea = true;
            else var textarea = false;
            var inp = $("<textarea class='edit-input'/>");
//            else var inp = $("<input class='edit-input'type='text' />");
            var close = $("<div class='close'>&times;</div>");
            inp.val(_this.html());

//            if (textarea) {
//                inp.css({"font-weight":_this.css("font-weight")});
//            }
//            else {
//                inp.css({"font-size":_this.height() *.7,"font-weight":_this.css("font-weight")});
//            }
            close.css({"font-size":20});

            _this.addClass("edited").append(inp).append(close);
            inp.focus();
            close.click(onclose);
            function onclose(){
                inp.remove();
                close.remove();
                _this.removeClass("edited");
                _this.off("keydown.editable");
            }
            function onchange(){
                if (typeof options.change == 'funciton') options.change.call(this,inp.val());
                _this.trigger("changed",inp.val());
                onclose();
            }
            _this.on("keydown.editable",function(ev){
                if (ev.keyCode == 13){
                    ev.preventDefault();
                    onchange();
                }
                if (ev.keyCode == 27) onclose();
            })
        }
        this.filter(".editable").not(".edited").each(_.partial(proc,true));
//        this.find(".editable").not(".edited").each(_.partial(proc,false))
        return this;
    }
})(jQuery);