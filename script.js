'use strict';


/* mobile  navbar toggle bar*/

const navbar=document.querySelector("[data-navbar]");
const navToggler= document.querySelector("[data-nav-toggler]")

navToggler.addEventListener("click",function(){
    navbar.classList.toggle("active");
    this.classList.toggle("active");
});