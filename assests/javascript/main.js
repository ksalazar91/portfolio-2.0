$ = jQuery.noConflict();

var delay = (function(){
    var timer = 0;
    return function(callback, ms){
        clearTimeout (timer);
        timer = setTimeout(callback, ms);
    };
})();

if(requested != 'true'){



    if ($('.container.skills').size() > 0) {

        app.skills.init();
    }

}





