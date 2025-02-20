// 20220720 스크립트 전부 수정
var slickFlag;

$(document).ready(function(){
    $(".f01 .swiper-wrapper").slick({
        arrows:true,
        infinite:true,
        dots:true,
        autoplay:true,
        autoplaySpeed:2000,
        swipe:true,
        touchMove:true,
        touchThreshold:8
    });

    $(".f01 .artist_list").slick({
        arrows:true,
        infinite:true,
        slidesToShow: 8,
        dots:false,
        autoplay:true,
        autoplaySpeed:1500,
        swipe:true,
        touchMove:true,
        touchThreshold:8,
        responsive: [
            {
              breakpoint: 768,
              settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '40px',
                slidesToShow: 4,
              }
            }
        ]
    });

    if (window.innerWidth <= 768) {
        slickFlag = true;
        subBanner();
    }else{
        slickFlag = false;
        $(".swiper-container--mo .swiper-wrapper").slick('unslick');
    }

    $(window).on("resize",function(){
        if (window.innerWidth <= 768) {
            slickFlag = true;
            subBanner();
        }else{
            slickFlag = false;
            $(".swiper-container--mo .swiper-wrapper").slick('unslick');
        }
    });

});

function subBanner(){
    if(slickFlag == true){
        $(".swiper-container--mo .swiper-wrapper").slick({
            arrows:false,
            infinite:true,
            dots:true,
            autoplay:true,
            autoplaySpeed:2000,
            variableWidth:true,
        });
    }
}