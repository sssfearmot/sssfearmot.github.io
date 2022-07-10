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

    // $('.btn_up').click(function () {
    //     $('.cos_move').show();
    // });
})