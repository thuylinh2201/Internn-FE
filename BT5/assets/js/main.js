$(document).ready(function(){
    
    $('#js-navi').click(function(){
        $(this).parents('.header').toggleClass('active');
        $('body').toggleClass('on-navi');
    })

   
})