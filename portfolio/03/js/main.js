$(function () {
    var carousel = $(".cos_carousel"),
        currdeg = 0;

    $(".left").on('click', { d: "n" }, rotate);
    $(".right").on('click', { d: "p" }, rotate);

    function rotate(e) {
        if (e.data.d == "n") {
            currdeg = currdeg - 36;
        }
        if (e.data.d == "p") {
            currdeg = currdeg + 36;
        }
        carousel.css({
            "-webkit-transform": "rotateY(" + currdeg + "deg)",
            "-moz-transform": "rotateY(" + currdeg + "deg)",
            "-o-transform": "rotateY(" + currdeg + "deg)",
            "transform": "rotateY(" + currdeg + "deg)"
        });
    }

    // $('.cos_move').click(function(){
    //     if($(this).hasClass('active')){
    //         $('.cos_move').removeClass('active');
    //     } else {
    //         $('.cos_move').removeClass('active');
    //         $(this).addClass('active');
    //     }
    // })

    // $('.cos_move').click(function(){
    //     $('.cos_move').not(this).removeClass('active');
    //     $(this).toggleClass('active');
    // })

    $('.btn_img').on('click', function () {
        $('.cos_slide').toggleClass('active')
    })

    $('.btn_more').on('click', function () {
        $('.btn_more_the').toggleClass('active')
    })

    $('.btn_more02').on('click', function () {
        $('.cos_filter_form').toggleClass('active')
    })

    $('.btn_more02').click(function () {
        if ($(this).hasClass("active")) {
            $(this).removeClass("active");
        } else {
            $(this).addClass("active");
        }
    })

    $('.cos_color').on('click', function () {
        $('.cos_hasg_tag').show('active')
    })

        // $('.btn_img').on('click', function(){
        //     $('.btn_img').removeClass('active');
        //     $('.btn_img').addClass('active');
        // })

        $('.btn_img').click(function(){
            $('.btn_img').not(this).removeClass('active');
            $(this).toggleClass('active');
        });
})