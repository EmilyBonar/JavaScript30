let hands = [...document.querySelectorAll(".hand")]; //hour, minute, second
console.log(hands);
//setTime();

setInterval(() => {
	setTime();
}, 1000);

function setTime() {
	const now = new Date();
	const sec = now.getSeconds();
	const min = now.getMinutes();
	const hour = now.getHours();
	hands[0].style.transform = `rotate(${hour * 30 + 90 + (min / 60) * 30}deg)`;
	hands[1].style.transform = `rotate(${min * 6 + 90 + (sec / 60) * 6}deg)`;
	hands[2].style.transform = `rotate(${sec * 6 + 90}deg)`;
	console.log("tick");
}
