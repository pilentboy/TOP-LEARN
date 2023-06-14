

if(window.innerWidth >=1284){
  var swiper = new Swiper(".mySwiper", {
    pagination: {
      el: ".swiper-pagination",
    },
    slidesPerView:3,
    loop: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: true
    }
});
}else{
  var swiper = new Swiper(".mySwiper", {
    pagination: {
      el: ".swiper-pagination",
    },
    slidesPerView:1,
    loop: true,
    autoplay: {
      delay: 2000,
      disableOnInteraction: true
    }
});
}

window.addEventListener("resize",()=>{
  if(window.innerWidth >= 1284){
      var swiper = new Swiper(".mySwiper", {
        pagination: {
          el: ".swiper-pagination",
        },
        slidesPerView:3,
        loop: true,
        autoplay: {
          delay: 3000,
          disableOnInteraction: true
        }
    });
  }else{
    var swiper = new Swiper(".mySwiper", {
      pagination: {
        el: ".swiper-pagination",
      },
      slidesPerView:1,
      loop: true,
      autoplay: {
        delay: 2000,
        disableOnInteraction: true
      }
  });
  }


})

