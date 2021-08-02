$(window).on('load', function(){
    "use strict";

        $(".loading-screen .sk-folding-cube").fadeOut(3000, function(){
                $(this).parent().fadeOut(1000, function (){
                        $("body").css("overflow" , "auto");
                        $(this).remove();
                });
        });
});