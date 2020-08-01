const modal = document.getElementById("myModal");
const imgsAll = document.querySelectorAll("img.gallery");
const mimgsAll = document.querySelectorAll("img.modal-content");
// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

const removeDisplay = () => {
    [].forEach.call(mimgsAll, el => {
        el.classList.remove("show-modal");
    });
}

imgsAll.forEach((el, i) => {
    el.addEventListener('click', () => {
        modal.style.display = "block";
        removeDisplay();
        mimgsAll[i].classList.add('show-modal');
        mimgsAll[i].src = el.src;
    });
})
// click anywhere on the modal to close it
modal.onclick = function() {
  modal.style.display = "none";
}