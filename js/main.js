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
