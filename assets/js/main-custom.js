// declare
const portfolioImg = document.querySelector('.portfolio-img');
const portfolioDescr = document.querySelector('.portfolio-descr');

// plan it
function animLeftOnce() {
	return (
		this.style.transform = "translateX(10px)",
		setTimeout(function(){ 
			this.style.transform = "translateX(0px)"; 
		}, 500),
		console.log('running')
	)
}

// do it
portfolioImg.addEventListener("mouseover", function() {   
  this.portfolioImg.animLeftOnce();
}, false);

