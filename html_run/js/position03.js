$(function () {
    $('header i').on('click', function () {
        $('.cover').toggleClass('on')
    })
    $('.cover a').on('click', function () {
        $('.cover').toggleClass('on')
        this('cover a').toggleClass('on')
    })

})