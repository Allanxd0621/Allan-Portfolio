const menuBtn = document.getElementById('menuToggle');
const exit = document.getElementById('exitMenu');
const menuHidden = document.querySelector('.menu');



menuBtn.addEventListener("click" , function(){

menuHidden.classList.toggle("menuVisible");

});

exit.addEventListener("click" , function (){

menuHidden.classList.remove("menuVisible")

});