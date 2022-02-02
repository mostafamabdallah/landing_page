$( document ).ready(function() {

    $('.box').on('click',function(){
        $('.box').removeClass('active');
        $(this).addClass('active');
        $('.tabsHeading').empty().append(`${$(this).find('h6').text()} With Soft Transitioning Effect`).hide()
        .fadeIn(1000);

    })
});