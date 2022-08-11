console.clear();

var birds = gsap.utils.toArray(".birds");

var airfield = document.querySelector("#airfield"),
    airfieldWidth = airfield.offsetWidth,
    airfieldHeight = airfield.offsetHeight;

gsap.set(birds, {xPercent: -50, yPercent: -50});

// x/y values for how far away from the center they can move
var dx = airfieldWidth  * 0.4;
var dy = airfieldHeight * 0.5;

// Animate our properties individually - by osublake
tweenProperty(birds[0], "scale", 0.2, 0.8);
tweenProperty(birds[0], "x", -dx, dx);
tweenProperty(birds[0], "y", -dy, dy);

tweenProperty(birds[1], "scale", 0.5, 1.2);
tweenProperty(birds[1], "x", -dx, dx);
tweenProperty(birds[1], "y", -dy, dy);

tweenProperty(birds[2], "scale", 0.4, 0.9);
tweenProperty(birds[2], "x", -dx, dx);
tweenProperty(birds[2], "y", -dy, dy);

function tweenProperty(target, prop, min, max) {
  
  gsap.to(target, {
    [prop]: gsap.utils.random(min, max), 
    duration: "random(3, 6)", ease:'none', 
    onComplete: tweenProperty,
    onCompleteParams: [target, prop, min, max],
  });
}

// Animation of the wings =======================================  
var birdsFly = document.querySelectorAll('.birdsFly')

gsap.set(birdsFly,{fill:'green'});

gsap.to(birdsFly, {
  morphSVG: gsap.utils.wrap(["#bird1fly02", "#bird2fly02", "#bird3fly02"]),
  duration: "random(0.1, 0.4)", ease: 'power.inOut',
  stagger:0.3,
  repeat: -1, yoyo: true,
  repeatRefresh: true,
  //repeatDelay: 0.07,
});

// ==== audio part=====
var audioplay = document.createElement('audio');
audioplay.setAttribute('src', 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/174563/moewe.ogg');
audioplay.loop = true;
audioplay.preload = "auto"; 

window.addEventListener("mouseover", () => {
  audioplay.play();
});
window.addEventListener("mouseout", () => {
  audioplay.pause();
});