const scroll = new LocomotiveScroll({
  el: document.querySelector('.wrapper'),
  smooth: true
});

var swiper = new Swiper('.swiper-container', {
  loop: true, // Loop through slides
  autoplay:true,
  autoplayTimeout: 6000,
  autoplayHoverPause:true,
  pagination: {
      el: '.swiper-pagination',
      clickable: true,
      
  },
  // navigation: {
  //     nextEl: '.swiper-button-next',
  //     prevEl: '.swiper-button-prev',
  // },
});

var swiper = new Swiper('.testimal-tow', {
  loop: true,
  autoplay: {
    delay: 3000,
    pauseOnMouseEnter: true // This replaces autoplayHoverPause
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  }
});
var tl = gsap.timeline();

tl.from(".header, .header-inn, .logo", {
  y: -30,
  opacity: 0,
  delay: 0.5,
  duration: 1,
  ease: "power2.out"
});
tl.from(".slider-bann-inn .left-sec", {
  x: -100,
  opacity: 0,
  duration: 1.5,
  ease: "power2.out",
} ,"bann");

tl.from(".slider-bann-inn .right-sec", {
  x: 100,
  opacity: 0,
  duration: 1.5,
  ease: "power2.out",
} ,"bann");
