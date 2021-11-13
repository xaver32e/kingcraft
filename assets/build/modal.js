var modal = document.getElementById("video");
var vidbtn = document.getElementById("vidbtn");
var span = document.getElementsByClassName("close")[0];

function showVideo(){
  modal.style.display = "block";
}


span.onclick = function() {
  modal.style.animation = "fade-out 0.5s ease"
  setTimeout(() => {
  modal.style.display = "none";
  }, 400);
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.animation = "fade-out 0.5s ease"
  setTimeout(() => {
  modal.style.display = "none";
  }, 400);
  }
}