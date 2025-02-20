$(document).ready(function () {
  $(".slickContainer ul").slick({
    arrows: true,
    infinite: true,
    slidesToShow: 3,
    autoplay: true,
    autoplaySpeed: 1500,
    swipe: true,
    touchMove: true,
    touchThreshold: 8,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  });
});
