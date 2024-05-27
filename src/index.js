import "./style.css";
//import images
import Icon from "./assets/battleship.png";
import Icon2 from "./assets/todo-listV2.png";
import Icon5 from "./assets/todo-list.png";
import Icon3 from "./assets/peek-a-booo.png";
import Icon4 from "./assets/weather-app.png";
// create images
const projectCards = [...document.querySelectorAll(".project-card")];
const myIcon = new Image();
const myIcon2 = new Image();
const myIcon3 = new Image();
const myIcon4 = new Image();
const myIcon5 = new Image();
myIcon.src = Icon;
myIcon2.src = Icon2;
myIcon3.src = Icon3;
myIcon4.src = Icon4;
myIcon5.src = Icon5;
projectCards[0].prepend(myIcon);
projectCards[2].prepend(myIcon3);
projectCards[3].prepend(myIcon4);
//
let body = document.body,
  html = document.documentElement;

let height = Math.max(
  body.scrollHeight,
  body.offsetHeight,
  html.clientHeight,
  html.scrollHeight,
  html.offsetHeight
);

//set an observer using itersectionObserver API to check if an element is visible during scrolling

const intersectionCallback = (entries) => {
  entries.forEach((entry) => {
    let elem = entry.target;
    if (entry.isIntersecting) {
      if (elem.classList.length === 1) {
        elem.classList.add("active");
      }
    } else {
      elem.classList.remove("active");
    }
  });
};

let options = {
  root: null,
  rootMargin: "5px",
  threshold: 0.9,
};
let observer = new IntersectionObserver(intersectionCallback, options);

//checks if the device is touch screen and adds the image flip as a tap
// and the observer to make the project cards glow when visible
if (
  "ontouchstart" in window ||
  navigator.maxTouchPoints > 0 ||
  navigator.msMaxTouchPoints > 0
) {
  projectCards.forEach((elem) => {
    observer.observe(elem);
  });
  document.querySelector(".About-me-front").addEventListener("click", (e) => {
    document.querySelector(".About-me-inner").style.transform =
      "rotateY(180deg)";
  });
  document.querySelector(".About-me-back").addEventListener("click", (e) => {
    document.querySelector(".About-me-inner").style.transform = "rotateY(0deg)";
  });
}
// checks width and adds the better sized image
if (window.innerWidth < 1024) {
  projectCards[1].prepend(myIcon2);
} else {
  projectCards[1].prepend(myIcon5);
}

[...document.querySelectorAll(".lines")].forEach((elem) => {
  elem.style.height = height + "px";
});

// fill progress bar while scrolling
window.onscroll = function () {
  fillBar();
};
function fillBar() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  [...document.querySelectorAll(".progress-bar")].forEach((elem) => {
    elem.style.height = scrolled + "%";
  });
}
