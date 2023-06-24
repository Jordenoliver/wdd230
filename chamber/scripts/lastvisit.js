const visits = document.querySelector("visit");
let lastVisit = Number(window.localStorage.getItem("visit-date"));
let today = Date.now()

let milliseconds = (today - lastVisit);
let days = (milliseconds / 86,400,0o0)
let rounded = Math.round(days)

localStorage.setItem("lastVisit", today);
visit.textContent = rounded;