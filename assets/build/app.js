const navSlide = () => {
    const burger = document.querySelector(".burger");
    const nav = document.querySelector(".nav-links");
    const navLinks = document.querySelectorAll(".nav-links li")
    
    // Toggle Nav
    burger.addEventListener('click', ()=>{
        nav.classList.toggle('nav-active')

    // Animate Links
    navLinks.forEach((link, index) => {
        if(link.style.animation){
            link.style.animation = ''
        } else {
        link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.5}s`;
        }
    });
    // Burger Animation
    burger.classList.toggle('toggle')
  });

}


const btn = document.getElementById("topButton")
window.onscroll = function() {scrollFunction()};
function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        btn.style.display = "block";
        btn.style.animation = "in-right 0.7s ease"
    } else {
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

navSlide()
