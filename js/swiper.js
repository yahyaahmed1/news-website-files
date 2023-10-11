
// video section perview
let m = window.matchMedia("(max-width: 476px)")
let t = window.matchMedia("(max-width: 767px)")
let slidesView = (cards) => {
  var swiper = new Swiper(".swiper", {
    slidesPerView: cards, // the number of cards viewed per slide
    spaceBetween: 30, // the space between cards
    autoplay: true, // auto play carousel
    loop: true, // repeat carousel when end
    pagination: {
      el: ".swiper-pagination",
      clickable: true, // to allow click on indicators
    },
  });
}
const vidPerview = () => {
  if (m.matches) {
    slidesView(1)
  }
  else if (t.matches) {
    slidesView(2)
  }
  else {
    slidesView(3)
  }
}
vidPerview()
t.onchange = (t) => {
  vidPerview(t)
}
m.onchange = (m) => {
  vidPerview(m)
}
