const images = [
    "img/nike.png",
    "img/adidas.png",
    "img/puma.png",
    "img/converse.png",
    "img/newbalance.png",
];

const texts = [
    [""],
    [""],
    [""],
    [""],
    [""],
]

mainSlider = new mainSlider({

    slideImages: images,
    itemsTitles: texts,

    backgroundDisplacementSprite: 'img/map-9.jpg',
    cursorDisplacementSprite: 'img/displace-circle.png',

    cursorImgEffect: true,
    cursorTextEffect: false,
    cursorScaleIntensity: 0.65,
    cursorMomentum: 0.14,

    swipe: true,
    swipeDistance: window.innerWidth * 0.4,
    swipeScaleIntensity: 2,

    slideTransitionDuration: 1,
    transitionScaleIntensity: 30,
    transitionScaleAmplitude: 160,

    nav: true,
    navElement: '.main-nav',

    imagesRgbEffect: true,
    imagesRgbIntensity: 0.9,
    navImagesRgbIntensity: 30,

    textsDisplay: true,
    textsSubTitleDisplay: true,
    textsTiltEffect: true,
    googleFonts: ['Playfair Display:700', 'Roboto:400'],
    buttonMode: false,
    textsRgbEffect: true,
    textsRgbIntensity: 0.03,
    navTextsRgbIntensity: 15,

    textTitleColor: 'white',
    textTitleSize: 125,
    mobileTextTitleSize: 125,
    textTitleLetterspacing: 3,

    textSubTitleColor: 'white',
    textSubTitleSize: 21,
    mobileTextSubTitleSize: 21,
    textSubTitleLetterspacing: 2,
    textSubTitleOffsetTop: 90,
    mobileTextSubTitleOffsetTop: 90,
});


//Getting all elements from the DOM
const imgContainer = document.querySelector('.showcase > div');
const img = document.querySelector('.showcase img');
const shadow = document.querySelector('.shadow');

const thumb = document.querySelectorAll('.thumbs img');
const title = document.querySelector('.titleText');
const desc = document.querySelector('.description');

const sizes = document.querySelectorAll('.sizes > li');
const stars = document.querySelectorAll('.stars span');
const price = document.querySelector('.price');
const colorBtn = document.querySelectorAll('.color');

const pag = document.querySelectorAll('.pag');
const prev = document.querySelector('.arr-left');
const next = document.querySelector('.arr-right');
const shoeNum = document.querySelector('.shoe-num');
const shoeTotal = document.querySelector('.shoe-total');

//Id Variables
let id = 1;
let colorType = 1;
let shoe = 1;

//Shoe Details / Data
const colors = [
    [
        '#ae001b',
        '#111111'
    ],
    [
        'linear-gradient(0deg, orange, red)',
        '#bda08e'
    ],
    [
        'linear-gradient(0deg, #00b8ea 0%, #e6882d 50%, #e56da6 100%)',
        'linear-gradient(0deg, #dae766, #b2afaa)'
    ],
];

const prices = ['150', '250', '175'];

const names = [
    ["Red Nike Jordan Max Aura 3", "Black Nike Jordan Max Aura 3"],
    ["Black/Orange Nike Air Max 95", "Beige/Gray Nike Air Max 95"],
    ["Colorful NIKE Jordan Delta 2 SP", "Gray NIKE Jordan Delta 2 SP"]
];

const descriptions = [
    ["나이키 조던 맥스 아우라 3 남성 운동화를 신고 걸으면서 도시의 도시 거리로 역사의 한 조각을 가져오세요. 풍부한 요르단 유산에 영감을 받은 이 모델은 농구화의 에너지와 클래식 스타일에 대한 인식을 바꾸는 룩을 가지고 있습니다."],
    ["나이키 에어 맥스 95 남성 운동화는 인체 해부학에서 영감을 받은 힘과 유동성으로 여러분을 감동시킵니다. 중앙 밑창은 이러한 운동화의 기초가 되는 반면, 구조화된 측면 패널은 견고하고 안정적인 구조를 제공합니다. 밑창의 유연한 절개로 발이 자연스럽게 움직일 수 있습니다."],
    ["조던 델타 2 SP 남성용 농구화는 내구성, 편안함, 조던 브랜드의 애티튜드 등 원하는 특성에 신선하고 대담한 접근 방식을 제공합니다. 같은 아이디어로 Delta 2 운동화의 첫 번째 모델은 재설계된 라인과 수정된 구성 요소를 받았습니다."]
];

const ratings = [4, 5, 3];

/*===== Functions =====*/
/*=====================*/
//Retriving image from folder path
function getImage(imgType, shoe, colorType, id, extension) {
    return 'img/' + imgType + '/shoe' + shoe + '-' + colorType + '/img' + id + '.' + extension;
}

//Reset Active State to buttons
function resetActive(element, elementClass, i) {
    for (let i = 0; i < element.length; i++) {
        element[i].classList.remove(elementClass + '-active');
    }
    element[i].classList.add(elementClass + '-active');
}

//Fire Animations
function animate(element, time, anim) {
    element.style.animation = anim;

    setTimeout(() => {
        element.style.animation = "none";
    }, time);
}

function assignColors(i, shoe) {
    colorBtn[i].style.background = colors[shoe - 1][i];
}

function resetStars(shoe) {
    for (let i = 0; i < stars.length; i++) {
        stars[i].innerText = "star_outline";
    }

    for (let i = 0; i < ratings[shoe]; i++) {
        stars[i].innerText = "star";
    }
}
/*=====================*/

//Changing Shoe Size
for (let i = 0; i < sizes.length; i++) {
    sizes[i].addEventListener('click', (e) => {
        resetActive(sizes, 'size', i);
    });
}

shoeTotal.innerText = "0" + pag.length;
shoeNum.innerText = "0" + shoe;
price.innerText = "$" + prices[0];
resetStars(shoe - 1);
title.innerText = names[0][0];
desc.innerText = descriptions[0];

//Changing Images
for (let i = 0; i < thumb.length; i++) {
    thumb[i].addEventListener('click', (e) => {
        id = i + 1;

        img.src = getImage("showcase", shoe, colorType, id, 'png');

        resetActive(thumb, 'thumb', i);

        animate(imgContainer, 550, "fade 500ms ease-in-out");
    });
}

for (let i = 0; i < colorBtn.length; i++) {
    assignColors(i, shoe);

    //Changing Colors
    colorBtn[i].addEventListener('click', () => {
        colorType = i + 1;

        setTimeout(() => {
            img.src = getImage("showcase", shoe, colorType, id, 'png');
        }, 450);

        for (let i = 0; i < thumb.length; i++) {
            thumb[i].src = getImage("thumbs", shoe, colorType, i + 1, 'jpg');
        }

        resetActive(colorBtn, 'color', i);

        title.innerText = names[shoe - 1][i];

        animate(img, 550, "jump 500ms ease-in-out");
        animate(shadow, 550, "shadow 500ms ease-in-out");
    });
}


/*===== Slider =====*/
function slider(shoe) {
    setTimeout(() => {
        img.src = getImage("showcase", shoe, colorType, id, 'png');
    }, 600);

    for (let i = 0; i < thumb.length; i++) {
        thumb[i].src = getImage("thumbs", shoe, colorType, i + 1, 'jpg');
    }

    for (let i = 0; i < colorBtn.length; i++) {
        assignColors(i, shoe);
    }

    resetActive(pag, 'pag', shoe - 1);

    desc.innerText = descriptions[shoe - 1];
    title.innerText = names[shoe - 1][colorType - 1];
    price.innerText = "$" + prices[shoe - 1];
    resetStars(shoe - 1);
    shoeNum.innerText = "0" + shoe;

    animate(img, 1550, "replace 1.5s ease-in");
    animate(shadow, 1550, "shadow2 1.5s ease-in");
}

//Previous Shoe
prev.addEventListener('click', () => {
    shoe--;
    if (shoe < 1) {
        shoe = pag.length;
    }
    slider(shoe);
});

next.addEventListener('click', () => {
    shoe++;
    if (shoe > pag.length) {
        shoe = 1;
    }
    slider(shoe);
});

//Pagination
for (let i = 0; i < pag.length; i++) {
    pag[i].addEventListener('click', () => {
        slider(i + 1);
        shoe = i + 1;
    });
}

// 3D card
VanillaTilt.init(document.querySelectorAll(".js-tilt"), {
    max: 25,
    speed: 400,
});

const card_sizes = document.querySelectorAll('.size');

for (let i = 0; i < sizes.length; i++) {
    sizes[i].addEventListener('click', () => {
        for (let i = 0; i < sizes.length; i++) {
            sizes[i].classList.remove('active');
        }
        sizes[i].classList.toggle('active');
    });
}

// header
const menu = document.querySelector(".menu");
const menuBtn = document.querySelector(".menu_btn");

menuBtn.addEventListener("click", () => {
    menu.classList.toggle('nav-toggle');
});

// play video
// $(document).ready(function () {
//     $('.popup-youtube').magnificPopup({
//         disableOn: 700,
//         type: 'iframe',
//         mainClass: 'mfp-fade',
//         removalDelay: 160,
//         preloader: false,

//         fixedContentPos: false
//     });
// });
