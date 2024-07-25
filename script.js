const navlinks = document.querySelectorAll(".nav-link");

const windowpathname = window.location.pathname;

navlinks.forEach(navlink => {
    if (navlink.href.includes(windowpathname)) {
        navlink.classList.add("active-link");
    }
});

var tablinks = document.getElementsByClassName("tab-link");

var tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname){
    for(tablink of tablinks){
        tablink.classList.remove("active-tab");
    }

    for(tabcontent of tabcontents){
        tabcontent.classList.remove("active-contents");
    }

    event.currentTarget.classList.add("active-tab");

    document.getElementById(tabname).classList.add("active-contents");
};

var sidemenu = document.getElementById("header");

function openmenu(){
    sidemenu.style.left = "0";
}

function closemenu(){
    sidemenu.style.left = "-120px";
}
