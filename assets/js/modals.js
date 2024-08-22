// Get the modal
var modal = document.getElementById('myModal');
 
// Get the image and insert it inside the modal - use its "alt" text as a caption
var bceImg1 = document.getElementById('bce-img-1');
var modalBceImg1 = document.getElementById("bceimg");
var bceImg2 = document.getElementById('bce-img-2');
var bceImg3 = document.getElementById('bce-img-3');
var bceImg4 = document.getElementById('bce-img-4');
var bceImg5 = document.getElementById('bce-img-5');
var bceImg6 = document.getElementById('bce-img-6');
var bceImg7 = document.getElementById('bce-img-7');
var captionText = document.getElementById("caption");
bceImg1.onclick = function(){
    modal.style.display = "flex";
    modalBceImg1.style.display = "flex";
    modalBceImg1.src = this.src;
    modalBceImg1.alt = this.alt;
    captionText.innerHTML = this.alt;
}
bceImg2.onclick = function(){
    modal.style.display = "flex";
    modalBceImg1.style.display = "flex";
    modalBceImg1.src = this.src;
    modalBceImg1.alt = this.alt;
    captionText.innerHTML = this.alt;
}
bceImg3.onclick = function(){
    modal.style.display = "flex";
    modalBceImg1.style.display = "flex";
    modalBceImg1.src = this.src;
    modalBceImg1.alt = this.alt;
    captionText.innerHTML = this.alt;
}
bceImg4.onclick = function(){
    modal.style.display = "flex";
    modalBceImg1.style.display = "flex";
    modalBceImg1.src = this.src;
    modalBceImg1.alt = this.alt;
    captionText.innerHTML = this.alt;
}
bceImg5.onclick = function(){
    modal.style.display = "flex";
    modalBceImg1.style.display = "flex";
    modalBceImg1.src = this.src;
    modalBceImg1.alt = this.alt;
    captionText.innerHTML = this.alt;
}
bceImg6.onclick = function(){
    modal.style.display = "flex";
    modalBceImg1.style.display = "flex";
    modalBceImg1.src = this.src;
    modalBceImg1.alt = this.alt;
    captionText.innerHTML = this.alt;
}
bceImg7.onclick = function(){
    modal.style.display = "flex";
    modalBceImg1.style.display = "flex";
    modalBceImg1.src = this.src;
    modalBceImg1.alt = this.alt;
    captionText.innerHTML = this.alt;
}
 
 
// When the user clicks on <span> (x), close the modal
modal.onclick = function() {
    modalBceImg1.className += " out";
    setTimeout(function() {
       modal.style.display = "none";
       modalBceImg1.className = "modal-content";
     }, 400);
    
 }  