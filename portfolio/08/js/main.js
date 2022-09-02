const menBtn = document.querySelector('.menu_btn');
const navbar = document.querySelector('.nav');
const menu = document.querySelector('.menu');

const offset = 50;

menBtn.addEventListener('click', () => {
    menu.classList.toggle('menu-open');
});

window.addEventListener("scroll", () => {
    if (pageXOffset > offset) {
        navbar.classList.add('navbar-active');
    } else {
        navbar.classList.remove('navbar-active');
    }
})


// slider
const displacementSlider = function (opts) {

    let vertex = `
        varying vec2 vUv;
        void main() {
          vUv = uv;
          gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
        }
    `;

    let fragment = `
        
        varying vec2 vUv;

        uniform sampler2D currentImage;
        uniform sampler2D nextImage;

        uniform float dispFactor;

        void main() {

            vec2 uv = vUv;
            vec4 _currentImage;
            vec4 _nextImage;
            float intensity = 0.3;

            vec4 orig1 = texture2D(currentImage, uv);
            vec4 orig2 = texture2D(nextImage, uv);
            
            _currentImage = texture2D(currentImage, vec2(uv.x, uv.y + dispFactor * (orig2 * intensity)));

            _nextImage = texture2D(nextImage, vec2(uv.x, uv.y + (1.0 - dispFactor) * (orig1 * intensity)));

            vec4 finalTexture = mix(_currentImage, _nextImage, dispFactor);

            gl_FragColor = finalTexture;

        }
    `;

    let images = opts.images, image, sliderImages = [];;
    let canvasWidth = images[0].clientWidth;
    let canvasHeight = images[0].clientHeight;
    let parent = opts.parent;
    let renderWidth = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
    let renderHeight = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);

    let renderW, renderH;

    if (renderWidth > canvasWidth) {
        renderW = renderWidth;
    } else {
        renderW = canvasWidth;
    }

    renderH = canvasHeight;

    let renderer = new THREE.WebGLRenderer({
        antialias: false,
    });

    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setClearColor(0x23272A, 1.0);
    renderer.setSize(renderW, renderH);
    parent.appendChild(renderer.domElement);

    let loader = new THREE.TextureLoader();
    loader.crossOrigin = "anonymous";

    images.forEach((img) => {

        image = loader.load(img.getAttribute('src') + '?v=' + Date.now());
        image.magFilter = image.minFilter = THREE.LinearFilter;
        image.anisotropy = renderer.capabilities.getMaxAnisotropy();
        sliderImages.push(image);

    });

    let scene = new THREE.Scene();
    scene.background = new THREE.Color(0x23272A);
    let camera = new THREE.OrthographicCamera(
        renderWidth / -2,
        renderWidth / 2,
        renderHeight / 2,
        renderHeight / -2,
        1,
        1000
    );

    camera.position.z = 1;

    let mat = new THREE.ShaderMaterial({
        uniforms: {
            dispFactor: { type: "f", value: 0.0 },
            currentImage: { type: "t", value: sliderImages[0] },
            nextImage: { type: "t", value: sliderImages[1] },
        },
        vertexShader: vertex,
        fragmentShader: fragment,
        transparent: true,
        opacity: 1.0
    });

    let geometry = new THREE.PlaneBufferGeometry(
        parent.offsetWidth,
        parent.offsetHeight,
        1
    );
    let object = new THREE.Mesh(geometry, mat);
    object.position.set(0, 0, 0);
    scene.add(object);

    let addEvents = function () {

        let pagButtons = Array.from(document.getElementById('pagination').querySelectorAll('button'));
        let isAnimating = false;

        pagButtons.forEach((el) => {

            el.addEventListener('click', function () {

                if (!isAnimating) {

                    isAnimating = true;

                    document.getElementById('pagination').querySelectorAll('.active')[0].className = '';
                    this.className = 'active';

                    let slideId = parseInt(this.dataset.slide, 10);

                    mat.uniforms.nextImage.value = sliderImages[slideId];
                    mat.uniforms.nextImage.needsUpdate = true;

                    TweenLite.to(mat.uniforms.dispFactor, 1, {
                        value: 1,
                        ease: 'Expo.easeInOut',
                        onComplete: function () {
                            mat.uniforms.currentImage.value = sliderImages[slideId];
                            mat.uniforms.currentImage.needsUpdate = true;
                            mat.uniforms.dispFactor.value = 0.0;
                            isAnimating = false;
                        }
                    });

                    let slideTitleEl = document.getElementById('slide_title');
                    let slideStatusEl = document.getElementById('slide_status');
                    let nextSlideTitle = document.querySelectorAll(`[data-slide-title="${slideId}"]`)[0].innerHTML;
                    let nextSlideStatus = document.querySelectorAll(`[data-slide-status="${slideId}"]`)[0].innerHTML;

                    TweenLite.fromTo(slideTitleEl, 0.5,
                        {
                            autoAlpha: 1,
                            y: 0
                        },
                        {
                            autoAlpha: 0,
                            y: 20,
                            ease: 'Expo.easeIn',
                            onComplete: function () {
                                slideTitleEl.innerHTML = nextSlideTitle;

                                TweenLite.to(slideTitleEl, 0.5, {
                                    autoAlpha: 1,
                                    y: 0,
                                })
                            }
                        });

                    TweenLite.fromTo(slideStatusEl, 0.5,
                        {
                            autoAlpha: 1,
                            y: 0
                        },
                        {
                            autoAlpha: 0,
                            y: 20,
                            ease: 'Expo.easeIn',
                            onComplete: function () {
                                slideStatusEl.innerHTML = nextSlideStatus;

                                TweenLite.to(slideStatusEl, 0.5, {
                                    autoAlpha: 1,
                                    y: 0,
                                    delay: 0.1,
                                })
                            }
                        });

                }

            });

        });

    };

    addEvents();

    window.addEventListener('resize', function (e) {
        renderer.setSize(renderW, renderH);
    });

    let animate = function () {
        requestAnimationFrame(animate);

        renderer.render(scene, camera);
    };
    animate();
};

imagesLoaded(document.querySelectorAll('img'), () => {

    document.body.classList.remove('loading');

    const el = document.getElementById('slider');
    const imgs = Array.from(el.querySelectorAll('img'));
    new displacementSlider({
        parent: el,
        images: imgs
    });

});


// change background header
function scrollHeader() {
    const header = document.querySelector('.nav')
    if (this.scrollY >= 50) header.classList.add('scroll-header');
    else header.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)

// the characters
const items = document.querySelectorAll('.item'),
    controls = document.querySelectorAll('.control'),
    headerItems = document.querySelectorAll('.item_header'),
    descriptionItems = document.querySelectorAll('.item_description'),
    activeDelay = .76,
    interval = 5000;

let current = 0;

const slider = {
    init: () => {
        controls.forEach(control => control.addEventListener('click', (e) => { slider.clickedControl(e) }));
        controls[current].classList.add('active');
        items[current].classList.add('active');
    },
    nextSlide: () => {
        slider.reset();
        if (current === items.length - 1) current = -1;
        current++;
        controls[current].classList.add('active');
        items[current].classList.add('active');
        slider.transitionDelay(headerItems);
        slider.transitionDelay(descriptionItems);
    },
    clickedControl: (e) => {
        slider.reset();
        clearInterval(intervalF);

        const control = e.target,
            dataIndex = Number(control.dataset.index);

        control.classList.add('active');
        items.forEach((item, index) => {
            if (index === dataIndex) {
                item.classList.add('active');
            }
        })
        current = dataIndex;
        slider.transitionDelay(headerItems);
        slider.transitionDelay(descriptionItems);
        intervalF = setInterval(slider.nextSlide, interval);
    },
    reset: () => {
        items.forEach(item => item.classList.remove('active'));
        controls.forEach(control => control.classList.remove('active'));
    },
    transitionDelay: (items) => {
        let seconds;

        items.forEach(item => {
            const children = item.childNodes;
            let count = 1,
                delay;

            item.classList.value === 'item-header' ? seconds = .015 : seconds = .007;

            children.forEach(child => {
                if (child.classList) {
                    item.parentNode.classList.contains('active') ? delay = count * seconds + activeDelay : delay = count * seconds;
                    child.firstElementChild.style.transitionDelay = `${delay}s`;
                    count++;
                }
            })
        })
    },
}

let intervalF = setInterval(slider.nextSlide, interval);
slider.init();


// count
const output = document.querySelector(".timer");

const space = setInterval(() => {
    const currentDate = new Date("2024-01-01");
    const todayTime = new Date();
    const distance = currentDate - todayTime;

    //Days
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    //Hours
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    //Minutes
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    //Seconds
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    output.innerHTML = days + "d &nbsp;&nbsp;" + hours + "h &nbsp;&nbsp;" + minutes + "m &nbsp;&nbsp;" + seconds + "s ";

    if (distance < 0) {
        clearInterval(space);
        output.innerHTML = "WELCOME!";
        output.style.textTransform = "uppercase";
    }
}, 1000);


// popup video
document.querySelectorAll('.video_content video').forEach(vid => {
    vid.onclick = () => {
        document.querySelector('.popup_video').style.display = 'block';
        document.querySelector('.popup_video video').src = vid.getAttribute('src')
    }
});

document.querySelector('.popup_video span').onclick = () => {
    document.querySelector('.popup_video').style.display = 'none';
}


// store
const data = [
    [
        "store1",
        "store2",
        "store3",
        "store4",
        "store5",
    ],
    [
        "오징어 게임 아레나 화이트 셔츠",
        "오징어 게임 커스텀 쵸이스 셔츠",
        "오징어 게임 아이콘 블랙 후드",
        "오징어 게임 플레이어 넘버 커스텀 셔츠",
        "오징어 게임 플레이어 넘버 패치 화이트 커스텀 셔츠",
    ],
    [
        "47,000",
        "54,000",
        "67,000",
        "54,000",
        "54,000",
    ],
    [
        "Size",
        "Size",
        "Size",
        "Size",
        "Size",
    ],
    [
        ["S", "M", "L", "XL"],
        ["S", "M", "L", "XL"],
        ["S", "M", "L", "XL"],
        ["S", "M", "L", "XL"],
        ["S", "M", "L", "XL"],
    ],
    [80, 76, 100, 65, 91]
];

const progText = document.querySelector(".progText");
const progress = document.querySelector(".progress");

function progressBar(percentage) {
    progText.innerText = 0;
    let count = 0;

    progress.style.transition = 50 * data[5][percentage] + "ms";
    progress.style.bottom = data[5][percentage] - 110 + "%";

    function updateCount() {
        const target = data[5][percentage];

        if (count < target) {
            count++;
            progText.innerText = count + "%";
            setTimeout(updateCount, 30);
        } else {
            progText.innerText = target + "%";
        }
    }
    updateCount();
}

progressBar(0);

const optionsList = document.querySelector('.options_list');
const options = document.querySelectorAll('.options_list > li');

optionsList.addEventListener('click', function (e) {
    if (e.target && e.target.classList.contains('option')) {
        for (let i = 0; i < optionsList.children.length; i++) {
            optionsList.children[i].classList.remove('option-active');
        }
        e.target.classList.add('option-active');
    }
});

const arrLeft = document.querySelector('.arrow-left');
const arrRight = document.querySelector('.arrow-right');
const img = document.querySelector('.product_image img');
const name = document.querySelector('.product_name');
const price = document.querySelector('.product_price');
const optionTitle = document.querySelector('.product_option_title');
const bg = document.querySelector('.panel_1');

let id = 0;
let li;

function storeSlider(id) {
    img.src = "img/store/" + data[0][id] + ".png";
    img.classList.add('fade-in');
    setTimeout(() => {
        img.classList.remove('fade-in');
    }, 850);
    name.innerText = data[1][id];
    price.innerText = data[2][id];
    optionTitle.innerText = data[3][id];
    for (let i = 0; i < data[4][id].length; i++) {
        li = document.createElement('li');
        li.innerHTML = data[4][id][i];
        li.classList.add('option');

        if (i === 0) {
            optionsList.innerHTML = "";
            li.classList.add('option-active');
        }

        optionsList.appendChild(li);
    }
    progressBar(id);
}

arrLeft.addEventListener('click', () => {
    id--;
    if (id < 0) {
        id = data[0].length - 1;
    }
    storeSlider(id);
});

arrRight.addEventListener('click', () => {
    id++;
    if (id > data[0].length - 1) {
        id = 0;
    }
    storeSlider(id);
});


// 3D card
const container = document.querySelector(".card_container")
const card = document.querySelector(".front_card")
const back = document.querySelector(".back")
const number = document.querySelector(".number")
let flip = false

container.addEventListener("mousemove", (e) => {
    if (!flip) {
        let xAxis = (window.innerWidth / 2 - e.pageX) / 25
        let yAxis = (window.innerHeight / 2 - e.pageY) / 25
        card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`
        back.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`
    }
})

container.addEventListener("mouseenter", (e) => {
    card.style.transition = 'none'
    back.style.transition = 'none'
})

card.addEventListener("mouseenter", (e) => {
    card.style.transition = 'none'
    back.style.transition = 'none'
})

container.addEventListener("mouseleave", (e) => {
    card.style.transition = 'all 0.5s ease'
    card.style.transform = `rotateY(0deg) rotateX(0deg)`
    back.style.transition = 'all 0.5s ease'
    back.style.transform = `rotateY(0deg) rotateX(0deg)`
    back.style.zIndex = '-1'
    flip = false
})

let a = 1
card.addEventListener('click', (e) => {
    card.style.transition = 'all 0.4s ease'
    card.style.transform = 'rotateY(180deg)'
    back.style.transition = 'all 0.4s ease'
    back.style.transform = 'rotateY(180deg)'
    back.style.zIndex = '2'
    flip = true
})

back.addEventListener('click', (e) => {
    card.style.transform = 'rotateY(0deg)'
    back.style.transform = 'rotateY(0deg)'
    back.style.zIndex = '-1'
    flip = false
})


// popup shop
document.querySelectorAll('.btn-primary').forEach(vid => {
    vid.onclick = () => {
        document.querySelector('.popups_container').style.display = 'block';
    }
});

document.querySelector('.popup_content span').onclick = () => {
    document.querySelector('.popups_container').style.display = 'none';
}
