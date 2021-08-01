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