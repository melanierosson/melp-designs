const nameLinesAll = document.querySelectorAll("p.name-line");

const removeAnim = () => {
	[].forEach.call(nameLinesAll, el => {
		el.classList.remove("active");
	});
}

nameLinesAll.forEach((el, i) => {
	el.addEventListener('click', () => {
        el.classList.add('active');
        setTimeout(function () { el.classList.remove('active'); }, 3100);
    });
    el.addEventListener('mouseover', () => {
        el.classList.add('active');
    });
    el.addEventListener('mouseout', () => {
        setTimeout(function () { el.classList.remove('active'); }, 3100);
    });
})