const menuToggle = document.querySelector(".navbar-nav");
document.querySelector("#menu").onclick = () =>{
    menuToggle.classList.toggle('active');
};

const menuHamb = document.querySelector('#menu');
document.addEventListener("click", function(e){
    if(!menuHamb.contains(e.target) && !menuToggle.contains(e.target)){
        menuToggle.classList.remove('active');
    }
});