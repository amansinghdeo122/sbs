const scroll = new LocomotiveScroll({
  el: document.querySelector('.wrapper'),
  smooth: true
});

var swiper = new Swiper('.swiper-container', {
  loop: true, // Loop through slides
  autoplay:true,
  autoplayTimeout:2000,
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
    delay: 2000,
    pauseOnMouseEnter: true // This replaces autoplayHoverPause
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  }
});