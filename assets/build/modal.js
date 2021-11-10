var modal = document.getElementById("video");
var vidbtn = document.getElementById("vidbtn");
var span = document.getElementsByClassName("close")[0];

function showVideo(){
  modal.style.display = "block";
}


span.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
  modal.style.display = "none";
  }
}