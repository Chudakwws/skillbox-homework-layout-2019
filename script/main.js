const swiper = new Swiper('.swiper', {
    
    loop: true,
    slidesPerView: 3,
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
    },
    breakpoints: {
      1024: {
        slidesPerView: 3,
      },

      320: {
        slidesPerView: 1,
        navigation: false,

      },
    },
    
});