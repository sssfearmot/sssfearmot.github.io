var swiperPopular = new Swiper('.popular_container', {
    loop: true,
    spaceBetween: 24,
    slidesPerView: "3",
    grabCursor: true,

    pagination: {
        el: ".swiper-pagination",
        dynamicBullets: true,
    },
});