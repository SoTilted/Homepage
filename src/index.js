import "./style.css";
import Icon from "./assets/test.png"
const myIcon = new Image();
myIcon.src = Icon
let options = {
  root: null,
  rootMargin: "0px",
  threshold: 0.95,
};
const intersectionCallback = (entries) => {
  entries.forEach((entry) => {
    let elem = entry.target;
    console.log(elem, entry.isIntersecting);
    if (entry.isIntersecting) {
      console.log(elem, elem.classList.length);
      if (elem.classList.length === 1) {
        elem.classList.add("active");
        console.log(elem, elem.classList.length);
      }
    } else {
      elem.classList.remove("active");
    }
  });
};

let observer = new IntersectionObserver(intersectionCallback, options);
window.onscroll = function () {
  myFunction();
};
let projectCards = [...document.querySelectorAll(".project-card")];
projectCards.forEach((elem) => {
  observer.observe(elem);
});

function myFunction() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("myBar").style.height = scrolled + "%";
  document.getElementById("myBar2").style.height = scrolled + "%";
  document.getElementById("myBar3").style.height = scrolled + "%";
}

document.querySelector(".About-me-front").addEventListener("click", (e) => {
  document.querySelector(".About-me-inner").style.transform = "rotateY(180deg)";

});

document.querySelector(".About-me-back").addEventListener("click", (e) => {
    document.querySelector(".About-me-inner").style.transform = "rotateY(0deg)";
  
  });
  document.querySelector(".project-card").prepend(myIcon) 