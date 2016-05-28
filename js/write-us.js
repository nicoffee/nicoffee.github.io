var link = document.querySelector(".write-us-btn");
var close = document.querySelector(".modal-content-close");
var popup = document.querySelector(".modal-content");

link.addEventListener("click", function(event) {
    event.preventDefault();
    popup.classList.add("modal-content-show");
});

close.addEventListener("click", function(event) {
    event.preventDefault();
    popup.classList.remove("modal-content-show");
});