// Get the modal
var modal = document.getElementById('myModal');
 
// Get the image and insert it inside the modal - use its "alt" text as a caption
var autoImg1 = document.getElementById('auto-img-1');
var modalImg = document.getElementById("modal-img");
var autoImg2 = document.getElementById('auto-img-2');
// var autoImg3 = document.getElementById('auto-img-3');
// var autoImg4 = document.getElementById('auto-img-4');
// var autoImg5 = document.getElementById('auto-img-5');
// var autoImg6 = document.getElementById('auto-img-6');
// var autoImg7 = document.getElementById('auto-img-7');
var captionText = document.getElementById("caption");
autoImg1.onclick = function(){
    modal.style.display = "flex";
    modalImg.style.display = "flex";
    modalImg.src = this.src;
    modalImg.alt = this.alt;
    captionText.innerHTML = this.alt;
}
autoImg2.onclick = function(){
    modal.style.display = "flex";
    modalImg.style.display = "flex";
    modalImg.src = this.src;
    modalImg.alt = this.alt;
    captionText.innerHTML = this.alt;
}
// autoImg3.onclick = function(){
//     modal.style.display = "flex";
//     modalImg.style.display = "flex";
//     modalImg.src = this.src;
//     modalImg.alt = this.alt;
//     captionText.innerHTML = this.alt;
// }
// autoImg4.onclick = function(){
//     modal.style.display = "flex";
//     modalImg.style.display = "flex";
//     modalImg.src = this.src;
//     modalImg.alt = this.alt;
//     captionText.innerHTML = this.alt;
// }
// autoImg5.onclick = function(){
//     modal.style.display = "flex";
//     modalImg.style.display = "flex";
//     modalImg.src = this.src;
//     modalImg.alt = this.alt;
//     captionText.innerHTML = this.alt;
// }
// autoImg6.onclick = function(){
//     modal.style.display = "flex";
//     modalImg.style.display = "flex";
//     modalImg.src = this.src;
//     modalImg.alt = this.alt;
//     captionText.innerHTML = this.alt;
// }
// autoImg7.onclick = function(){
//     modal.style.display = "flex";
//     modalImg.style.display = "flex";
//     modalImg.src = this.src;
//     modalImg.alt = this.alt;
//     captionText.innerHTML = this.alt;
// }
 
 
// When the user clicks on <span> (x), close the modal
modal.onclick = function() {
    modalImg.className += " out";
    setTimeout(function() {
       modal.style.display = "none";
       modalImg.className = "modal-content";
     }, 400);
    
 }  