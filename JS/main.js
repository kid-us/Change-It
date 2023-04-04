const marketing = document.getElementById("marketing");
const programming = document.getElementById("programming");
const dataAnalyst = document.getElementById("data");
const language = document.getElementById("lang");
// pages

const marketingPage = document.getElementById("marketing-page");
const programmingPage = document.getElementById("programming-page");
const dataPage = document.getElementById("data-page");
const languagePage = document.getElementById("lang-page");

marketing.addEventListener("click", function () {
  marketing.classList.remove("bg-main");
  marketing.classList.add("bg-active");

  dataAnalyst.classList.remove("bg-active");
  language.classList.remove("bg-active");
  programming.classList.remove("bg-active");

  programming.classList.add("bg-main");
  dataAnalyst.classList.add("bg-main");
  language.classList.add("bg-main");
  //   pages
  marketingPage.classList.remove("hidden");
  programmingPage.classList.add("hidden");
  languagePage.classList.add("hidden");
  dataPage.classList.add("hidden");
});

programming.addEventListener("click", function () {
  programming.classList.remove("bg-main");
  programming.classList.add("bg-active");

  dataAnalyst.classList.remove("bg-active");
  marketing.classList.remove("bg-active");
  language.classList.remove("bg-active");

  marketing.classList.add("bg-main");
  dataAnalyst.classList.add("bg-main");
  language.classList.add("bg-main");
  //   pages
  programmingPage.classList.remove("hidden");
  marketingPage.classList.add("hidden");
  languagePage.classList.add("hidden");
  dataPage.classList.add("hidden");
});

dataAnalyst.addEventListener("click", function () {
  dataAnalyst.classList.remove("bg-main");
  dataAnalyst.classList.add("bg-active");

  language.classList.remove("bg-active");
  marketing.classList.remove("bg-active");
  programming.classList.remove("bg-active");

  programming.classList.add("bg-main");
  marketing.classList.add("bg-main");
  language.classList.add("bg-main");
  //   pages
  dataPage.classList.remove("hidden");
  marketingPage.classList.add("hidden");
  programmingPage.classList.add("hidden");
  languagePage.classList.add("hidden");
});

language.addEventListener("click", function () {
  language.classList.remove("bg-main");
  language.classList.add("bg-active");

  dataAnalyst.classList.remove("bg-active");
  marketing.classList.remove("bg-active");
  programming.classList.remove("bg-active");

  programming.classList.add("bg-main");
  dataAnalyst.classList.add("bg-main");
  marketing.classList.add("bg-main");
  //   pages
  languagePage.classList.remove("hidden");
  marketingPage.classList.add("hidden");
  programmingPage.classList.add("hidden");
  dataPage.classList.add("hidden");
});

// menu script
const menuBtn = document.getElementById("menu-btn");
const menuPage = document.getElementById("menu");
const overlay = document.getElementById("overlay");
const menuClose = document.getElementById("menu-close-btn");

menuBtn.addEventListener("click", function () {
  if (menuPage.classList.contains("hidden")) {
    menuPage.classList.remove("hidden");
    overlay.classList.remove("hidden");
    document.getElementById("body").style.overflow = "hidden";
  } else {
    menuPage.classList.add("hidden");
    overlay.classList.add("hidden");
    document.getElementById("body").removeAttribute("style");
  }
});

menuClose.addEventListener("click", function () {
  menuPage.classList.add("hidden");
  overlay.classList.add("hidden");
  document.getElementById("body").removeAttribute("style");
});

overlay.addEventListener("click", function () {
  menuPage.classList.add("hidden");
  overlay.classList.add("hidden");
  document.getElementById("body").removeAttribute("style");
});

// scroll btn script
const scrollBtn = document.getElementById("scroll-btn");

window.addEventListener("scroll", function () {
  if (window.scrollY > window.innerHeight) {
    scrollBtn.classList.remove("hidden");
  } else {
    scrollBtn.classList.add("hidden");
  }
});

scrollBtn.addEventListener("click", function () {
  window.scrollTo(0, 0);
});
