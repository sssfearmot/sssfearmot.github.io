// swiper
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

// mixitup
let mixerFeatured = mixitup('.featured_content', {
    selectors: {
        target: '.featured_card'
    },
    animation: {
        duration: 300
    }
});

// active-featured
const linkFeatured = document.querySelectorAll('.featured_item')

function activeFeatured() {
    linkFeatured.forEach(l => l.classList.remove('active-featured'))
    this.classList.add('active-featured')
}
linkFeatured.forEach(l => l.addEventListener('click', activeFeatured))

// change background header
function scrollHeader() {
    const header = document.querySelector('.header')
    if (this.scrollY >= 50) header.classList.add('scroll-header');
    else header.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)

// // active link
// const section = document.querySelectorAll('section[id]')

// function scrollActive() {
//     const scrollY = window.pageYOffset

//     section.forEach(current => {
//         const sectionHeight = current.offsetHeight,
//         sectionTop = current.offsetTop - 58,
//         sectionId = current.getAttribute('id')

//         if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
//             document.querySelector('.nav_menu a [hredf*=' + sectionId + ']').classList.add('active-link')
//         }else{
//             document.querySelector('.nav_menu a [href*=' + sectionId + ']').classList.remove('active-link')
//         }
//     })
// }
// window.addEventListener('scroll', scrollActive)

const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400,
    // reset: true
})


sr.reveal(`.home_data h2`)
sr.reveal(`.home_data strong`,{delay: 500})
sr.reveal(`.home_data p`, {delay: 600})
sr.reveal(`.home_container img`, {delay: 800})
sr.reveal(`.home_car_data`, {delay: 900, interval: 100, origin: 'bottom'})
sr.reveal(`.home_container a`, {delay: 1000, origin: 'bottom'})