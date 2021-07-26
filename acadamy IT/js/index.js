$(document).ready(function(){
    $(".bars").click(function(){
        $('.responsive-menu').show().animate({right:'0'},500)
        $("html").append('<div class="back-container"></div>')
        $(".back-container").click(function(){
            $(".responsive-menu").animate({right:'-500px'},500)
            $(this).remove()
        })
    })
})
