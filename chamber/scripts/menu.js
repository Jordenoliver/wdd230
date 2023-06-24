const navbutton = document.querySelector("#nav-button");
const navitems = document.querySelectorAll(".nav-item");

navbutton.addEventListener("click", () => {
	navitems.forEach((item) => item.classList.toggle("open"));
	navbutton.classList.toggle("close");
});