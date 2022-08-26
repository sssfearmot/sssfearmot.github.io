let searchbar = document.querySelector(".eo");
let searchOffset = searchbar.offsetTop;
window.addEventListener("scroll", () => {
    (window.scrollY >= searchOffset) ?
        searchbar.classList.add("eofixed") :
        searchbar.classList.remove("eofixed")
});

var lastScrollTop = 0;
var delta = 5;
var fixBox = document.querySelector('.bottom_header');
var fixBoxHeight = fixBox.offsetHeight;
var didScroll;
window.onscroll = function (e) {
    didScroll = true;
};

setInterval(function () {
    if (didScroll) {
        hasScrolled();
        didScroll = false;
    }
}, 250);

function hasScrolled() {
    var nowScrollTop = window.scrollY;
    if (Math.abs(lastScrollTop - nowScrollTop) <= delta) {
        return;
    }
    if (nowScrollTop > lastScrollTop && nowScrollTop > fixBoxHeight) {
        fixBox.classList.add('run');
    } else {
        if (nowScrollTop + window.innerHeight < document.body.offsetHeight) {
            fixBox.classList.remove('run');
        }
    }
    lastScrollTop = nowScrollTop;
}