$(function(){ /*html 링크 상단에 쓸때 적용*/

    $('.main_slider').on('init reInit afterChange', function(){
    var here = $('.slick-current')
    here.addClass('on').siblings().removeClass('on')
    })

    $('.main_slider').slick({
        arrows: false,
        autoplay: true,
        pauseOnHover: false, /* 마우스를 올려도 작동 */
        pauseOnFocus: false,
        fade: true,
    })

   
})

