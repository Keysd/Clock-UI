let $ = document.querySelector.bind(document);
let $ID = document.getElementById.bind(document);

const hr = $(".circle.hour");
const mn = $(".circle.minute");
const sc = $(".circle.second");

const hour = $("#hour");
const minute = $("#minute");
const second = $("#second");
const ampm = $("#ampm");

let au = $ID("tiktak");

setInterval(() => {
  const day = new Date();
  let hh = day.getHours();
  let mm = day.getMinutes();
  let ss = day.getSeconds();
  let am = hh < 12 ? "AM" : "PM";

  hr.style.transform = `rotateZ(${hh * 30 + mm / 2}deg`;
  mn.style.transform = `rotateZ(${mm * 6}deg)`;
  sc.style.transform = `rotateZ(${ss * 6}deg)`;

  hh = hh < 10 ? "0" + hh : hh;
  mm = mm < 10 ? "0" + mm : mm;
  ss = ss < 10 ? "0" + ss : ss;

  hour.textContent = hh;
  minute.textContent = mm;
  second.textContent = ss;
  ampm.textContent = am;
}, 1000);
