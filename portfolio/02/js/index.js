$(function () {
    $('.slider').slick({
        dots: true,
        arrows: false,
        slidesToShow: 3,
    })

    $('.pb_tabpanel_body').slick({
        slidesToShow: 1,
        // centerMode: true,
        // dots:true,
        arrows: false,
    })

    $('.pb-table .pb_tabpanel i:nth-child(1)').on('click', function () {
        $('.pb_tabpanel_body').slick('slickPrev')
    })

    $('.pb-table .pb_tabpanel i:nth-child(2)').on('click', function () {
        $('.pb_tabpanel_body').slick('slickNext')
    })

    $('.pb_tablist>li').on('click', function () {
        var idx = $(this).index();
        $('.pb_tabpanel>li').removeClass('on');
        $('.pb_tabpanel>li').eq(idx).addClass('on');
        $('.pb_tablist>li').removeClass('on');
        $(this).addClass('on');
    });

    // $('#lang_select').on('change', function(){
    //     console.log($(this), $(this).val)
    //     var lnk = $(this).val();
    //     if(lnk) window.open(lnk)
    // })
})