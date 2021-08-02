const searchel = document.querySelector(".search");
const searchinputel = searchel.querySelector("input");

searchel.addEventListener("click",function(){
  searchinputel.focus();
});
searchinputel.addEventListener("focus",function(){
  searchel.classList.add("focused");
  searchinputel.setAttribute("placeholder","통합검색");
});
searchinputel.addEventListener("blur",function(){
  searchel.classList.remove("focused");
  searchinputel.setAttribute("placeholder","");
});

const badgeel = document.querySelector("header .badges");

window.addEventListener("scroll", _.throttle(function() {
  console.log(window.scrollY);
  if (window.scrollY > 500) {
//배지 숨기기

    gsap.to(badgeel, .6, {
      opacity: 0
      ,display: "none"
    });
  }
  else {
//배지 보이기
    gsap.to(badgeel, .6, {
      opacity: 1
      ,display: "block"
    });
  }
},300));
// _.throttle(함수,시간)

const fadeels = document.querySelectorAll(".visual .fade-in");
fadeels.forEach(function (a, index) {
  gsap.to(a, 1, {
    delay: (index + 1) * .7,
    opacity: 1
  });
});

// new Swiper(선택자, 옵션)
new Swiper(".notice-line .swiper-container", {
  direction: 'vertical',
  autoplay: true,
  loop: true
});

new Swiper(".promotion .swiper-container", {
  slidesPerView: 3, // 한 번에 보여줄 슬라이드 개수
  spaceBetween: 10, // 슬라이드 사이 여백
  centeredSlides: true, // 1번 슬라이드가 가운데 보이기
  loop: true,
  // autoplay: {
  //   delay: 5000
  // },
  pagination: {
    el: ".promotion .swiper-pagination", //페이지번호 선택자
    clickable: true  
  },
  navigation: {
    prevEl: ".promotion .swiper-prev",
    nextEl: ".promotion .swiper-next"
  }

});

const promotionEl = document.querySelector(".promotion");
const promotionToggleBtn = document.querySelector(".toggle-promoption");
let isHidePromotion = false;
promotionToggleBtn.addEventListener("click",function () {
  isHidePromotion = !isHidePromotion
  if (isHidePromotion) {
    //숨기처리
    promotionEl.classList.add("hide");
  }else {
    //보임처리
    promotionEl.classList.remove("hide");
  }
})

function random(min, max) {
  // `.toFixed()`를 통해 반환된 문자 데이터를,
  // `parseFloat()`을 통해 소수점을 가지는 숫자 데이터로 변환
  return parseFloat((Math.random() * (max - min) + min).toFixed(2))
}
function floatingObject(selelctor, delay, size) { 
  gsap.to(selelctor, //선택자
     random(1.5, 2.5), //애니메이션 동작시간
  { //옵션
    y: size,
    repeat: -1,
    yoyo: true,
    ease: Power1.easeInOut,
    delay: random(0, delay)
  }
  );
}
floatingObject(".floating1", 1, 15);
floatingObject(".floating2", .5, 15);
floatingObject(".floating3", 1.5, 20);