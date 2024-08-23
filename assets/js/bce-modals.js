// Get the modal
var modal = document.getElementById('myModal');
 
// Get the image and insert it inside the modal - use its "alt" text as a caption
var bceImg1 = document.getElementById('bce-img-1');
var modalImg = document.getElementById("modal-img");
var bceImg2 = document.getElementById('bce-img-2');
var bceImg3 = document.getElementById('bce-img-3');
var bceImg4 = document.getElementById('bce-img-4');
var bceImg5 = document.getElementById('bce-img-5');
var bceImg6 = document.getElementById('bce-img-6');
var bceImg7 = document.getElementById('bce-img-7');
var captionText = document.getElementById("caption");
bceImg1.onclick = function(){
    modal.style.display = "flex";
    modalImg.style.display = "flex";
    modalImg.src = this.src;
    modalImg.alt = this.alt;
    captionText.innerHTML = this.alt;
}
bceImg2.onclick = function(){
    modal.style.display = "flex";
    modalImg.style.display = "flex";
    modalImg.src = this.src;
    modalImg.alt = this.alt;
    captionText.innerHTML = this.alt;
}
bceImg3.onclick = function(){
    modal.style.display = "flex";
    modalImg.style.display = "flex";
    modalImg.src = this.src;
    modalImg.alt = this.alt;
    captionText.innerHTML = this.alt;
}
bceImg4.onclick = function(){
    modal.style.display = "flex";
    modalImg.style.display = "flex";
    modalImg.src = this.src;
    modalImg.alt = this.alt;
    captionText.innerHTML = this.alt;
}
bceImg5.onclick = function(){
    modal.style.display = "flex";
    modalImg.style.display = "flex";
    modalImg.src = this.src;
    modalImg.alt = this.alt;
    captionText.innerHTML = this.alt;
}
bceImg6.onclick = function(){
    modal.style.display = "flex";
    modalImg.style.display = "flex";
    modalImg.src = this.src;
    modalImg.alt = this.alt;
    captionText.innerHTML = this.alt;
}
bceImg7.onclick = function(){
    modal.style.display = "flex";
    modalImg.style.display = "flex";
    modalImg.src = this.src;
    modalImg.alt = this.alt;
    captionText.innerHTML = this.alt;
}
 
 
// When the user clicks on <span> (x), close the modal
modal.onclick = function() {
    modalImg.className += " out";
    setTimeout(function() {
       modal.style.display = "none";
       modalImg.className = "modal-content";
     }, 400);
    
 }  