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