const HOURHAND = document.querySelector("#hour");
const MINUTEHAND = document.querySelector("#minute");
const SECONDHAND = document.querySelector("#second");

let hrPosition = 30;
let minPosition = 6;
let secPosition = 6;

HOURHAND.style.transform = "rotate("+hrPosition+"deg)";
MINUTEHAND.style.transform = "rotate("+minPosition+"deg)";
SECONDHAND.style.transform = "rotate("+secPosition+"deg)";