let swiperPopular = new Swiper('.popular_container', {
    loop: true,
    spaceBetween: 48,
    slidesPerView: "3",
    grabCursor: true,

    pagination: {
        el: ".swiper-pagination",
        dynamicBullets: true,
    },
});

let mixerFeatured = mixitup('.featured_content', {
    selectors: {
        target: '.featured_card'
    },
    animation: {
        duration: 300
    }
});

const linkFeatured = document.querySelectorAll('.featured_item')

function activeFeatured() {
    linkFeatured.forEach(l => l.classList.remove('active-featured'))
    this.classList.add('active-featured')
}
linkFeatured.forEach(l => l.addEventListener('click', activeFeatured))