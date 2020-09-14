let keys = [...document.querySelectorAll(".key")];
let keyboard = [65, 83, 68, 70, 71, 72, 74, 75, 76];
let sounds = [...document.querySelectorAll("audio")];
keys.forEach((key, i) => {
	key.onclick = function () {
		playing(i);
	};
	key.addEventListener("transitionend", () => key.classList.remove("playing"));
});

document.addEventListener("keydown", (e) => {
	key = keyboard.indexOf(e.keyCode);
	if (key != -1) {
		playing(key);
	}
});

function playing(index) {
	keys[index].classList.add("playing");
	sounds[index].currentTime = 0;
	sounds[index].play();
}
