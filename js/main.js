var fadak = {};
fadak.Global = fadak.Global || {};
fadak.Global.init = function () {
  try {
    const emptyLinks = document.querySelectorAll('[href="#"]');
    emptyLinks.forEach((link) => {
      link.addEventListener("click", (e) => {
        e.preventDefault();
      });
    });
  } catch (error) {
    console.log("Error on fadak.Global.init() : " + error);
  }
};

fadak.Sliders = fadak.Sliders || {};
fadak.Sliders.init = function () {
  try {
    
    const home_hero_slider = new Swiper(".home_hero_slider", {
      spaceBetween: 30,
      // centeredSlides: true,
      loop: true,
      effect: "fade",
      crossFade: false,
      autoplay: {
        delay: 5000,
        disableOnInteraction: false,
      },
      pagination: {
        el: ".home_hero_slider .swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      on: {
        autoplayTimeLeft(s, time, progress) {
          progressCircle.style.setProperty("--progress", 1 - progress);
          progressContent.textContent = `${Math.ceil(time / 1000)} `;
        },
      },
    });

  } catch (error) {
    console.log("Error on fadak.Sliders.init() : " + error);
  }
};

// fadak.Global = fadak.Global || {};
// fadak.Global.init = function () {
//   try {

//   } catch (error) {
//     console.log("Error on fadak.Global.init() : " + error)
//   }
// }

window.addEventListener("DOMContentLoaded", function () {
  fadak.Global.init();
  fadak.ResizeHeaderMenu.init();
  fadak.Sliders.init();
  fadak.Accordion.init();
});
