// declare

const portfdescrRead = document.getElementById('portfdescr-read');
const portfimgRead = document.getElementById('portfimg-read');
const portfdescrArt = document.getElementById('portfdescr-art');
const portfimgArt = document.getElementById('portfimg-art');



// plan it
function animLeftOnce() {
	return 
		this.style.transform = "translateX(50px)",
		setTimeout(function(){ 
			this.style.transform = "translateX(0px)"; 
		}, 500),
		console.log('running')
};



// do it
portfimgRead.addEventListener("mouseover", function() {   
  this.classList.add('anim');
}, false);
portfimgRead.addEventListener("mouseout", function() {   
  this.classList.remove('anim');
}, false);

portfdescrRead.addEventListener("mouseover", function() {   
  this.classList.add('anim');
}, false);
portfdescrRead.addEventListener("mouseout", function() {   
  this.classList.remove('anim');
}, false);

portfimgArt.addEventListener("mouseover", function() {   
  this.classList.add('anim');
}, false);
portfimgArt.addEventListener("mouseout", function() {   
  this.classList.remove('anim');
}, false);

portfdescrArt.addEventListener("mouseover", function() {   
  this.classList.add('anim');
}, false);
portfdescrArt.addEventListener("mouseout", function() {   
  this.classList.remove('anim');
}, false);