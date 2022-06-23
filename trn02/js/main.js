$(function () {
    $('.topBanner i').on('click', function () {
        $('.topBanner').slideUp();
    })

    $('.mainSlider').on('init afterChange', function (e, s, c) {
        var current = $('.slick-current')
        current.addClass('on').siblings().removeClass('on');
        $('.mainArrow i').removeClass('on');
        if (c === 1) {
            $('.mainArrow i').addClass('on')
        }
        $('.slideNum').text((c ? (c + 1) : 1) + " / " + s.slideCount);
    });


    $('.mainSlider').slick({
        arrows: false,
        //autoplay: true,
        dots: true,
        pauseOnHover: false,
        pauseOnFocus: false,
    });

    $('.mainArrow i:nth-child(1)').on('click', function () {
        $('.mainSlider').slick('slickPrev')
    })

    $('.mainArrow i:nth-child(2)').on('click', function () {
        $('.mainSlider').slick('slickNext')
    })

    $('#utb').YTPlayer({
        videoURL: 'http://youtu.be/BsekcY04xvQ',
        containment: '.utb',
        autoPlay: true,
        mute: true,
        startAt: 0,
        opacity: 1,
        showControls: false,
        playOnlyIfVisible: true,
    });

    $('.utb .zoom').on('click', function(e){
        e.preventDefault();
        $('#utb').YTPFullscreen()
    })

    $('.productSlider').slick({
        arrows: false,
        dots: true,
        slidesToShow: 5,
        centerMode: true,
    });

    $('.product .productArrows i:nth-child(1)').on('click', function(){
        $('.productSlider').slick('slickPrev')
    })
    $('.product .productArrows i:nth-child(2)').on('click', function(){
        $('.productSlider').slick('slickNext')
    })

    $('.tab_menu li').on('click', function(event){
        event.preventDefault();
        $('.tab_menu li').removeClass('on');
        $(this).addClass('on');
        var idx = $(this).index();
        $('.tab_content>div').removeClass('on');
        $('.tab_content>div').eq(idx).addClass('on');

        $('.right_content>li').removeClass('on');
        $('.right_content>li').eq(idx).addClass('on');
    })
})