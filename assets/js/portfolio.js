// declare

const portfdescrMils = document.getElementById('portfdescr-mils');
const portfimgMils = document.getElementById('portfimg-mils');
const portfdescrBusters = document.getElementById('portfdescr-busters');
const portfimgBusters = document.getElementById('portfimg-busters');
const portfdescrRecWidgt = document.getElementById('portfdescr-recwidgit');
const portfimgRecWidgt = document.getElementById('portfimg-recwidgit');
const portfdescrDetPanem = document.getElementById('portfdescr-detailpanem');
const portfimgDetPanem = document.getElementById('portfimg-detailpanem');



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
portfimgMils.addEventListener("mouseover", function() {   
  this.classList.add('anim');
}, false);
portfimgMils.addEventListener("mouseout", function() {   
  this.classList.remove('anim');
}, false);

portfdescrMils.addEventListener("mouseover", function() {   
  this.classList.add('anim');
}, false);
portfdescrMils.addEventListener("mouseout", function() {   
  this.classList.remove('anim');
}, false);

portfimgBusters.addEventListener("mouseover", function() {   
  this.classList.add('anim');
}, false);
portfimgBusters.addEventListener("mouseout", function() {   
  this.classList.remove('anim');
}, false);

portfdescrBusters.addEventListener("mouseover", function() {   
  this.classList.add('anim');
}, false);
portfdescrBusters.addEventListener("mouseout", function() {   
  this.classList.remove('anim');
}, false);

portfimgRecWidgt.addEventListener("mouseover", function() {   
  this.classList.add('anim');
}, false);
portfimgRecWidgt.addEventListener("mouseout", function() {   
  this.classList.remove('anim');
}, false);

portfdescrRecWidgt.addEventListener("mouseover", function() {   
  this.classList.add('anim');
}, false);
portfdescrRecWidgt.addEventListener("mouseout", function() {   
  this.classList.remove('anim');
}, false);

portfimgDetPanem.addEventListener("mouseover", function() {   
  this.classList.add('anim');
}, false);
portfimgDetPanem.addEventListener("mouseout", function() {   
  this.classList.remove('anim');
}, false);

portfdescrDetPanem.addEventListener("mouseover", function() {   
  this.classList.add('anim');
}, false);
portfdescrDetPanem.addEventListener("mouseout", function() {   
  this.classList.remove('anim');
}, false);