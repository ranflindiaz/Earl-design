const btnOpenSlideMenu = document.querySelector("#side-menu");
const openSlideIcon = document.querySelector(".icon-circle-right");
const btnclosedSlideMenu = document.querySelector("#closed-side-menu");

openSlideIcon.addEventListener("mouseenter", (e) =>{
    document.querySelector("#side-menu").style.width = "245px";
    e.target.style.transition = "0.5s";
    e.target.style.display = "none";
    
});

const closedSlideMenu = () => {
    btnOpenSlideMenu.style.width = "0";
    document.querySelector("#main").style.marginLeft = "0";
    openSlideIcon.style.transition ="0.5s";
    openSlideIcon.style.display = "block";
    
}