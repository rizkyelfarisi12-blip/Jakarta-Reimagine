function initMain(){

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

    const menuToggle=document.getElementById("menuToggle");
    const navMenu=document.getElementById("navMenu");
    const menuOverlay=document.getElementById("menuOverlay");

    menuToggle.onclick=()=>{

        navMenu.classList.toggle("active");

        menuOverlay.classList.toggle("active");

        menuToggle.innerHTML=
            navMenu.classList.contains("active")
            ?"✕"
            :"☰";

    };

    menuOverlay.onclick=()=>{

        navMenu.classList.remove("active");
        menuOverlay.classList.remove("active");
        menuToggle.innerHTML="☰";

    };

    document.querySelectorAll("#navMenu a").forEach(link=>{

        link.onclick=()=>{

            navMenu.classList.remove("active");
            menuOverlay.classList.remove("active");
            menuToggle.innerHTML="☰";

        };

    });

}