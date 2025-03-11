// Get the modal
var modal = document.getElementById('myModal');
 
// Get the image and insert it inside the modal - use its "alt" text as a caption
var otherImg1 = document.getElementById('other-img-1');
var modalImg = document.getElementById("modal-img");
var otherImg2 = document.getElementById('other-img-2');
// var otherImg3 = document.getElementById('other-img-3');
// var otherImg4 = document.getElementById('other-img-4');
// var otherImg5 = document.getElementById('other-img-5');
var otherImg6 = document.getElementById('other-img-6');
var otherImg7 = document.getElementById('other-img-7');
// var otherImg8 = document.getElementById('other-img-8');
var captionText = document.getElementById("caption");
otherImg1.onclick = function(){
    modal.style.display = "flex";
    modalImg.style.display = "flex";
    modalImg.src = this.src;
    modalImg.alt = this.alt;
    captionText.innerHTML = this.alt;
}
otherImg2.onclick = function(){
    modal.style.display = "flex";
    modalImg.style.display = "flex";
    modalImg.src = this.src;
    modalImg.alt = this.alt;
    captionText.innerHTML = this.alt;
}
// otherImg3.onclick = function(){
//     modal.style.display = "flex";
//     modalImg.style.display = "flex";
//     modalImg.src = this.src;
//     modalImg.alt = this.alt;
//     captionText.innerHTML = this.alt;
// }
// otherImg4.onclick = function(){
//     modal.style.display = "flex";
//     modalImg.style.display = "flex";
//     modalImg.src = this.src;
//     modalImg.alt = this.alt;
//     captionText.innerHTML = this.alt;
// }
// otherImg5.onclick = function(){
//     modal.style.display = "flex";
//     modalImg.style.display = "flex";
//     modalImg.src = this.src;
//     modalImg.alt = this.alt;
//     captionText.innerHTML = this.alt;
// }
otherImg6.onclick = function(){
    modal.style.display = "flex";
    modalImg.style.display = "flex";
    modalImg.src = this.src;
    modalImg.alt = this.alt;
    captionText.innerHTML = this.alt;
}
otherImg7.onclick = function(){
    modal.style.display = "flex";
    modalImg.style.display = "flex";
    modalImg.src = this.src;
    modalImg.alt = this.alt;
    captionText.innerHTML = this.alt;
}
// otherImg8.onclick = function(){
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