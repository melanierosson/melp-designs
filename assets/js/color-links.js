// declare it
var dkbgLinks = document.querySelectorAll('.dkbg-link'), i;
var ltbgLinks = document.querySelectorAll('.ltbg-link'), j;
var dkbgBorder = document.querySelectorAll('.dkbg-border'), k;
var imgsAll = document.querySelectorAll('img');
var portfDescrAll = document.querySelectorAll('div.portfolio-descr');
// const dkbgClassList = ['pink', 'orange', 'teal', 'green', 'yellow', 'blue', 'purple'];
// const ltbgClassList = ['purple', 'blue', 'pink', 'rylblue', 'orange', 'teal', 'green'];
// let dkbgColorClass = "";
// let ltbgColorClass = "";


const saturateImgs = () => {
	[].forEach.call(imgsAll, el => {
		el.classList.add("saturate");
	})
}
const saturatePrtfDescr = () => {
	[].forEach.call(portfDescrAll, el => {
		el.classList.add("saturate");
	})
}
const saturateAll = () => {
	saturateImgs();
	saturatePrtfDescr();
}
const hoverPrtfDescr = () => {
	[].forEach.call(portfDescrAll, el => {
		el.addEventListener("hover", saturateAll);
	})
}
const hoverImgs = () => {
	[].forEach.call(imgsAll, el => {
		el.addEventListener("hover", saturateAll);
	})
}

window.addEventListener("load", function () {
	hoverPrtfDescr();
	hoverImgs();
});

// plan it
// function dkbgRandom() {
// 	dkbgColorClass = dkbgClassList[Math.floor(Math.random() * dkbgClassList.length)];
// 	return dkbgColorClass;
// }
// function ltbgRandom() {
// 	ltbgColorClass = ltbgClassList[Math.floor(Math.random() * ltbgClassList.length)];
// 	return ltbgColorClass;
// }

// do it

// window.addEventListener("load", function() {
// 	for (i = 0; i < dkbgLinks.length; ++i) {
	//   dkbgRandom();
	//   dkbgLinks[i].classList.add(dkbgColorClass);
// 	}
// });
// window.addEventListener("load", function() {
// 	for (j = 0; j < ltbgLinks.length; ++j) {
	//   ltbgRandom();
	//   ltbgLinks[j].classList.add(ltbgColorClass);
// 	}
// });
// window.addEventListener("load", function() {
// 	for (j = 0; j < dkbgBorder.length; ++j) {
// 	  dkbgRandom();
// 	  dkbgBorder[j].classList.add(dkbgColorClass);
// 	}
// });

