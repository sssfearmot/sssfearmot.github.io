let searchbar = document.querySelector(".eo");
let searchOffset = searchbar.offsetTop;
window.addEventListener("scroll", () => {
    (window.scrollY >= searchOffset) ?
    searchbar.classList.add("eofixed") :
    searchbar.classList.remove("eofixed")
});