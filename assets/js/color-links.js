// declare it
// var dkbgLinks = document.querySelectorAll('.dkbg-link'), i;
// var ltbgLinks = document.querySelectorAll('.ltbg-link'), j;
// var bgBtns = document.querySelectorAll('a.button'), k;
// var dkbgBorder = document.querySelectorAll('.dkbg-border'), l;
// var imgsAll = document.querySelectorAll('img');
var ltbgAll = document.querySelectorAll('.ltbg-link');
var dkbgAll = document.querySelectorAll('.dkbg-link');
var bgBtnsAll = document.querySelectorAll('.button');
// console.log('sees color-links.js file');


const colorLtBgLinks = () => {
	[].forEach.call(ltbgAll, el => {
		el.classList.add("color");
		console.log('ltbg link');
	})
}
const colorDkBgLinks = () => {
	[].forEach.call(dkbgAll, el => {
		el.classList.add("color");
		console.log('dkbg link');
	})
}
const colorBtnBgLinks = () => {
	[].forEach.call(bgBtnsAll, el => {
		el.classList.add("bgcolor");
		console.log('should add class bgcolor here');
	})
	console.log('sees function');
}
const saturateAll = () => {
	colorLtBgLinks();
	colorDkBgLinks();
	colorBtnBgLinks();
}
const decolorLtBgLinks = () => {
	[].forEach.call(ltbgAll, el => {
		el.classList.remove("color");
	})
}
const decolorDkBgLinks = () => {
	[].forEach.call(dkbgAll, el => {
		el.classList.remove("color");
	})
}
const decolorBtnBgLinks = () => {
	[].forEach.call(bgBtnsAll, el => {
		el.classList.remove("bgcolor");
		console.log('should remove class bgcolor here');
	})
}
const desaturateAll = () => {
	decolorLtBgLinks();
	decolorDkBgLinks();
	decolorBtnBgLinks();
}
const hoverLtBg = () => {
	[].forEach.call(ltbgAll, el => {
		el.addEventListener("mouseover", colorLtBgLinks);
		el.addEventListener("mouseout", decolorLtBgLinks);
	})
}
const hoverDkBg = () => {
	[].forEach.call(dkbgAll, el => {
		el.addEventListener("mouseover", colorDkBgLinks);
		el.addEventListener("mouseout", decolorDkBgLinks);
	})
}
const hoverBtnBgLinks = () => {
	[].forEach.call(bgBtnsAll, el => {
		el.addEventListener("mouseover", colorBtnBgLinks);
		el.addEventListener("mouseout", decolorBtnBgLinks);
	})
}

// window.addEventListener("load", function () {
// 	hoverLtBg();
// 	hoverDkBg();
// 	hoverBtnBgLinks();
// });

