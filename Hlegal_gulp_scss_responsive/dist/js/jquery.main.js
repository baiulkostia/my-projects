$( document ).ready(function() {
    
    $('.box__btn').click(function(){
        $('.header-box__down').toggleClass('active');
    })
    


    $('.tabs-block__btn').click(function(e){
        e.preventDefault();
        const tab_id = $(this).attr('href');

        $('.tabs-block__btn').removeClass('active');
        $('.tabs-block__content').removeClass('active');

        $(this).addClass('active');
        $(tab_id).addClass('active');
    })

    $('.carousel').slick({
        dots: true
    });

});