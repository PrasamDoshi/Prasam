const mobile_navbar=document.querySelector(".mobile_nav");
const mobile_navbar_list=document.querySelector(".list");
const nav_header=document.querySelector("header");

const toggleNavbar=()=>{
    nav_header.classList.toggle("active");
};

mobile_navbar.addEventListener('click',()=> toggleNavbar());
const toggleNavbar_2=()=>{
    nav_header.classList.remove("active");
};
mobile_navbar_list.addEventListener('click',()=> toggleNavbar_2());