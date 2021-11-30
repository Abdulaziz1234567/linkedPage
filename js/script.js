$(function () {
    $('.open-menu').click(function () {
        $('.menu-links').css({
            transform: 'translate(0%, 0%)'
        });    
        $('.box').css({
            transform: 'translate(0%, 0%)'
        });

    });
    $('.close-menu').click(function () {
        $('.menu-links').css({
            transform: 'translate(100%, -100%)'
        });
        $('.box').css({
            transform: 'translate(100% , 100%)'
        });
    });
    $('.box').click(function () {
        $('.menu-links').css({
            transform: 'translate(100%, -100%)'
        });
        $('.box').css({
            transform: 'translate(100% , 100%)'
        });
    });
})