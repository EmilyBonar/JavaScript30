let inputs = document.querySelectorAll("input"); //spacing, blur, color
let body = document.querySelector("body");
inputs[0].addEventListener("input", (e) => {
	body.style.setProperty("--spacing", `${e.target.value}px`);
});
inputs[1].addEventListener("input", (e) => {
	body.style.setProperty("--blur", `${e.target.value}px`);
});
inputs[2].addEventListener("input", (e) => {
	body.style.setProperty("--color", `${e.target.value}`);
});
