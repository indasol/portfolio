$(document).ready(function () {
  $(".hammenu").on("click", function (event) {
    $("#menu").addClass("open").css("display", "");
    $("html").css({ overflow: "hidden" });
    $("#menu").css({ height: "100vh", overflow: "auto" });
  });

  $(".close_ham").on("click", function (event) {
    $("#menu").removeClass("open").css("display", "none");
    $("html").css({ overflow: "auto" });
  });

  $(".page_cover").on("click", function (event) {
    if ($("#menu").has(event.target).length === 0) {
      $(".close_ham").click();
    }
  });

  $("button.jca-user-out-btn").on("click", function (event) {
    window.open("https://member.lge.co.kr/auth/withdraw.do");
  });

  var document_height = $(document).height();

  //20220623 pc mo 식별 클래스 추가
  var width = $(window).width();
  if (width <= 720) {
    $("body").removeClass("pc");
    $("body").addClass("mobile");
  } else {
    $("body").removeClass("mobile");
    $("body").addClass("pc");
  }

  //20220623 리사이즈 스크립트 추가
  $(window).resize(function () {
    width = $(window).width();
    document_height = $(document).height();
  });

  //220623 삭제요청
  // window.addEventListener("scroll",function(){
  //     var top = $(window).scrollTop();
  //     if( top - document_height <= - 1500){
  //         $(".fixedArea").removeClass("no-active");
  //     }else if(top - document_height > - 1500){
  //         $(".fixedArea").addClass("no-active");

  //     }
  // });

  //20220622 타겟 추가
  $(
    "[data-element = select-box], [data-element=check-box], [data-element=accordian-element]"
  ).on("click", function () {
    if ($(this).hasClass("is-active")) {
      $(this).removeClass("is-active");
    } else {
      $(this).addClass("is-active");
    }
  });

  //20220802 피씨에만 디스플레이
  $("[data-element = select-box-type02]").on("click", function () {
    if ($("body").width() <= 768) {
      $(".modal--mo").addClass("is-open");
    } else {
      $(".modal--mo").removeClass("is-open");
      if ($(this).hasClass("is-active")) {
        $(this).removeClass("is-active");
      } else {
        $(this).addClass("is-active");
      }
    }
  });

  //20220802 라디오박스 추가
  $("[data-element = radio-box]").on("click", function () {
    $(this)
      .parents(".list-section")
      .find("[data-element = radio-box]")
      .removeClass("is-active");
    if ($(this).hasClass("is-active")) {
      $(this).removeClass("is-active");
    } else {
      $(this).addClass("is-active");
    }
  });

  //20220622 셀렉트박스 클릭시 라벨삭제
  $(".item__sub-item--email .select-box").on("click", function () {
    if ($(this).find("label").length > 0) {
      $(this).find("label").remove();
    }
  });

  $("[data-element=delete__product]").on("click", function () {
    if ($(this).parent(".product-list__item").length > 0) {
      $(this).parent(".product-list__item").remove();
    }
  });

  $("[data-element=select-box__item]").on("click", function () {
    var text = $(this).text();
    $(this).parents(".select-box").find(".selected").text(text);
    $(this).parents(".select-box").find(".selected").attr("value", text);
  });

  //20220622 타겟 수정
  $(".btn--plus").on("click", function () {
    var target = $(this).parent().find(".num");
    var num = target.text();

    num = Number(num);
    num++;

    target.text(num);
  });

  //20220622 타겟 수정
  $(".btn--minus").on("click", function () {
    var target = $(this).parent().find(".num");
    var num = target.text();
    num = Number(num);
    if (num <= 1) {
      return false;
    }
    num--;

    target.text(num);
  });

  $(".tab ul li").on("click", function () {
    $(".tab ul li").removeClass("is-active");
    $(this).addClass("is-active");
  });

  var delta;

  $(window).on("scroll", function () {
    $(window).scrollTop() != 0
      ? $("body").addClass("is-scroll")
      : $("body").removeClass("is-scroll");
  });
});

function fncPurchasePrd() {
  $("#optionSelectModal").addClass("is-open");
}

function fncModalClose(obj) {
  $(obj).parents(".modal").removeClass("is-open");
}
