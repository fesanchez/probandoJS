$(document).ready(function(){
    $("p").dblclick(function(){
    $(this).hide("slow");
    }); 
    $("p").click(function(){
        $(this).css({
        "color": "red",
        "font-size": "2em"
        });
    });
    $("p").hover(function(){
        $(this).html("<a href='#'>Me convertí</a>");
        });
        });
});
    