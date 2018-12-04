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
    document.getElementById("home").classList.add('activemenu'); 
}
if(active_menu == "About")
{
    document.title = active_menu + FTitle;
    document.getElementById("about").classList.add('activemenu');

}
if(active_menu == "Events")
{
    document.title = active_menu + FTitle;
    document.getElementById("events").classList.add('activemenu');

}
if(active_menu == "Contact")
{
    document.title = active_menu + FTitle;
    document.getElementById("contact").classList.add('activemenu');
  
}

if(active_menu == "Blog")
{
    document.title = active_menu + FTitle;
    document.getElementById("blog").classList.add('activemenu');
    
}

}


   
