$(function () {
    var carousel = $(".cos_carousel"),
        currdeg = 0;

    $(".left").on('click', { d: "n" }, rotate);
    $(".right").on('click', { d: "p" }, rotate);

    function rotate(e) {
        if (e.data.d == "n") {
            currdeg = currdeg - 35;
        }
        if (e.data.d == "p") {
            currdeg = currdeg + 35;
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

        $('.btn_img').on('click', function(){
            $('.cos_slide').toggleClass('active')
        })

})