var open = document.querySelector(".open-btn");
var form = document.querySelector(".reserv-form");
var dark = document.querySelector(".dark-block-close");
var smalldark = document.querySelector(".small-dark-close");

open.addEventListener("click", function(def) {
	def.preventDefault();
	form.classList.add("reserv-form-open");
	dark.classList.add("dark-block-open");
	smalldark.classList.add("dark-block-open");
})

dark.addEventListener("click", function(def) {
	def.preventDefault();
	form.classList.remove("reserv-form-open");
	dark.classList.remove("dark-block-open");
	smalldark.classList.remove("dark-block-open");
})

smalldark.addEventListener("click", function(def) {
	def.preventDefault();
	form.classList.remove("reserv-form-open");
	dark.classList.remove("dark-block-open");
	smalldark.classList.remove("dark-block-open");
})