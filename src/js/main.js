import "flowbite";
import { Carousel, initTWE } from "tw-elements";


document.addEventListener("DOMContentLoaded", function () {
  initTWE({ Carousel });

  document.getElementById("toggle").addEventListener("click", function () {
  
    if (localStorage.currentTheme === "dark") {
      localStorage.currentTheme = "light";
    } else {
      localStorage.currentTheme = "dark";
    }

   
    document.documentElement.classList.toggle(
      "dark",
      localStorage.currentTheme === "dark" ||
        (!("theme" in localStorage) &&
          window.matchMedia("(prefers-color-scheme: dark)").matches)
    );
  });
});


import {
  Carousel,
  initTWE,
} from "tw-elements";

initTWE({ Carousel });