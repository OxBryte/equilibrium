const line = document.querySelector(".timeline-innerline");

let i = 0;
let target1 = document.querySelector(".timeline ul");

const timeline_events = document.querySelectorAll("ul li");

function showTime(e) {
  e.setAttribute("done", "true");
  e.querySelector(".timeline-point").style.background = "blue";
  e.querySelector(".date").style.opacity = "100%";
  e.querySelector("p").style.opacity = "100%";
  e.querySelector("p").style.transform = "translateY(0px)";
}

// function slowLoop() {
//   setTimeout(function () {
//     showTime(timeline_events[i]);
//     i++;
//     if (i < timeline_events.length) {
//       slowLoop();
//     }
//   }, 800);
// }
