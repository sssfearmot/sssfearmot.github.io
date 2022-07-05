$(function () {
    $('.slider').slick({
        dots: true,
        arrows: false,
        slidesToShow: 3,
    })

    $('.pb_tabpanel_body').slick({
        slidesToShow: 3,
        arrows: false,
    })

    $('.pb_tablist>li .tab').on('click', function (e) {
        e.preventDefault();
        $('.pb_tablist>li').removeClass('on');
        $(this).parent().addClass('on');
    })
})