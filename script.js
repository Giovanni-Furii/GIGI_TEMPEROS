const homeSection= document.querySelector(".home-btn")
const temperoSection=document.querySelector(".tempero")
const ervasSection = document.querySelector(".ervas")
const capsulasSection=document.querySelector(".capsulas")

homeSection.addEventListener('click' ,function(e){
  el = e.target;
    if(el.classList.contains('home-btn')){

    var home=document.querySelector(".home")
    var imgContainer =document.querySelector(".tempero-container")
    var imgContainer2 =document.querySelector(".tempero-container2")
    var ervasContainer =document.querySelector(".ervas-container")
    var ervasContainer2 =document.querySelector(".ervas-container2")
    var capsulasContainer =document.querySelector(".capsulas-container")
    var capsulasContainer2 =document.querySelector(".capsulas-container2")

    home.style.display='flex'
    imgContainer.style.display='none'
    imgContainer2.style.display='none'
    ervasContainer.style.display='none'
    ervasContainer2.style.display='none'
    capsulasContainer.style.display='none'
    capsulasContainer2.style.display='none'
    }
} )


temperoSection.addEventListener('click' ,function(e){
  el = e.target;
    console.log(el);
    if(el.classList.contains('tempero')){

    var home=document.querySelector(".home")
    var imgContainer =document.querySelector(".tempero-container")
    var imgContainer2 =document.querySelector(".tempero-container2")
    var ervasContainer =document.querySelector(".ervas-container")
    var ervasContainer2 =document.querySelector(".ervas-container2")
    var capsulasContainer =document.querySelector(".capsulas-container")
    var capsulasContainer2 =document.querySelector(".capsulas-container2")

    home.style.display='none'
    imgContainer.style.display='flex'
    imgContainer2.style.display='flex'
    ervasContainer.style.display='none'
    ervasContainer2.style.display='none'
    capsulasContainer.style.display='none'
    capsulasContainer2.style.display='none'
    }
} )

ervasSection.addEventListener('click', 
function(e) { 
    el = e.target;
    if(el.classList.contains('ervas')){

    var home=document.querySelector(".home")
    var imgContainer =document.querySelector(".tempero-container")
    var imgContainer2 =document.querySelector(".tempero-container2")
    var ervasContainer =document.querySelector(".ervas-container")
    var ervasContainer2 =document.querySelector(".ervas-container2")
    var capsulasContainer =document.querySelector(".capsulas-container")
    var capsulasContainer2 =document.querySelector(".capsulas-container2")

    home.style.display='none'
    imgContainer.style.display='none'
    imgContainer2.style.display='none'
    ervasContainer.style.display='inline-block'
    ervasContainer2.style.display='inline-block'
    capsulasContainer.style.display='none'
    capsulasContainer2.style.display='none'
    }
}
)


capsulasSection.addEventListener('click' ,function(e){
  el = e.target;
    if(el.classList.contains('capsulas')){

      var home=document.querySelector(".home")
    var imgContainer =document.querySelector(".tempero-container")
    var imgContainer2 =document.querySelector(".tempero-container2")
    var ervasContainer =document.querySelector(".ervas-container")
    var ervasContainer2 =document.querySelector(".ervas-container2")
    var capsulasContainer =document.querySelector(".capsulas-container")
    var capsulasContainer2 =document.querySelector(".capsulas-container2")

    home.style.display='none'
    imgContainer.style.display='none'
    imgContainer2.style.display='none'
    ervasContainer.style.display='none'
    ervasContainer2.style.display='none'
    capsulasContainer.style.display='flex'
    capsulasContainer2.style.display='flex'
    }
} )


window.addEventListener('scroll', function() {
  var menu = document.getElementById('menu');
  if (window.scrollY > 0) {
    menu.classList.add('scroll');
  } else {
    menu.classList.remove('scroll');
  }
});