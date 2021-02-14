const hourHand = document.getElementById('hour');
const minuteHand = document.getElementById('min');
const secondHand = document.getElementById('sec');

setInterval(() => {

	let date = new Date();

	let sec = date.getSeconds() / 60;
	let min = (date.getMinutes() + sec) / 60;
	let hour = (date.getHours() + min) / 12;

	secondHand.style.transform = "rotate(" + (sec * 360) + "deg)"
	minuteHand.style.transform = "rotate(" + (min * 360) + "deg)"
	hourHand.style.transform = "rotate(" + (hour * 360) + "deg)"

}, 1000);