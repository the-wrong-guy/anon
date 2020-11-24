if(window.scrollY>=180){
    document.querySelector("nav.main-header").classList.add("nav-fade-in");
}
window.onscroll = ()=>{
    if(window.scrollY>=180){
        document.querySelector("nav.main-header").classList.add("nav-fade-in");
    }else{
        document.querySelector("nav.main-header").classList.remove("nav-fade-in");
    }
}

