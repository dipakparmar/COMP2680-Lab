window.onload=function()
{

let mainNav = document.getElementById('js-menu');
let navBarToggle = document.getElementById('js-navbar-toggle');

navBarToggle.addEventListener('click', function () {
    
    mainNav.classList.toggle('active');
});

var SiteTitle = "TRU LEAP";
var FTitle = " | " + SiteTitle;
if(active_menu == "Home")
{
    document.title = active_menu + FTitle;
    document.getElementById("home").className += " active";
}
if(active_menu == "About")
{
    document.title = active_menu + FTitle;
    var setActiveClass = document.getElementById("about");
    setActiveClass.className = setActiveClass.className.replace(" active", "");
}
if(active_menu == "Events")
{
    document.title = active_menu + FTitle;
    var setActiveClass = document.getElementById("events");
    setActiveClass.className = setActiveClass.className.replace(" active", "");
}
if(active_menu == "Contact")
{
    document.title = active_menu + FTitle;
    var setActiveClass = document.getElementById("contact");
    setActiveClass.className = setActiveClass.className.replace(" active", "");
}

if(active_menu == "Blog")
{
    document.title = active_menu + FTitle;
    var setActiveClass = document.getElementById("blog");
    setActiveClass.className = setActiveClass.className.replace(" active", "");
}





}