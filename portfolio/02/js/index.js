$(function () {
    $('.slider').slick({
        dots: true,
        arrows: false,
        slidesToShow: 3,
    })

    $('.pb_tabpanel_body').slick({
        centerMode: true,
        arrows: true,
    })

    $('.pb_tablist>li .tab').on('click', function (e) {
        e.preventDefault();
        $('.pb_tablist>li').removeClass('on');
        $(this).parent().addClass('on');
    })
})