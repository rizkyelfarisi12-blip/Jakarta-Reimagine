// Navbar scroll effect
const header = document.getElementById("header");

window.addEventListener("scroll", () => {

    if(window.scrollY > 80){

        header.classList.add("scrolled");

    }else{

        header.classList.remove("scrolled");

    }

});

const navButtons = document.querySelectorAll(".nav-btn");

navButtons.forEach(button=>{

    button.addEventListener("click",()=>{

        navButtons.forEach(btn=>btn.classList.remove("active"));

        button.classList.add("active");

    });

});