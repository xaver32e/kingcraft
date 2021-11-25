const navSlide = () => {
    const burger = document.querySelector(".burger");
    const nav = document.querySelector(".nav-links");
    const navLinks = document.querySelectorAll(".nav-links li")
    
    burger.addEventListener('click', ()=>{
        nav.classList.toggle('nav-active')

    navLinks.forEach((link, index) => {
        if(link.style.animation){
            link.style.animation = ''
        } else {
        link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.5}s`;
        }
    });
    burger.classList.toggle('toggle')
  });

}

const btn = document.getElementById("topButton")
window.onscroll = function() {scrollFunction()};
function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        btn.style.display = "block";
        btn.style.animation = "in-right 0.7s ease"
    } 
    else{
      btn.style.display = "none"
    }
    
  }

  function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    
  }

  function goLight(){
    const hero = document.getElementById("hero")
    hero.classList.toggle("parallax-image-dark")
    hero.style.transitionDuration = "0.5s"
  }

window.onload = function(){
  console.log("%cWebsite gemaakt door Jelte \nNooit persoonlijke informatie in console zetten.", 'background: #fff; color: #000')
  console.log("https://jeltevdv.nl")
  
}

// SERVER STATUS

let status = false
var display = document.getElementById("serverstatus")

  let url = "https://mcapi.us/server/status?ip=play.kingcraftmc.nl"
  let request = new XMLHttpRequest()
  request.open("GET", url)
  request.responseType = 'json';
  request.send()

  request.onload = function() {
    if(request.response.online == true){
      display.innerHTML = "online!"
      display.style.color = "#48C158"
    }
    else{
      display.innerHTML = "offline :("
      display.style.color = "#F35858"
    }
  }



function copyText(){
  navigator.clipboard.writeText("play.kingcraftmc.nl")
  var copiedText = document.getElementById("copied")
  copiedText.innerHTML = "IP Gekopieerd!"
  setTimeout(() => {
    copiedText.innerHTML = ""
  }, 7000);
  }


navSlide()
