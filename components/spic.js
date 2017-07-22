
// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    document.getElementById("myBtn").style.display = "block";
    setTimeout(function () {document.getElementById("myBtn").style.display = "none";}, 1000);
}
// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0; // For Chrome, Safari and Opera
    document.documentElement.scrollTop = 0; // For IE and Firefox
} 


$('ul.nav li.dropdown').hover(function() {
  $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeIn(500);
}, function() {
  $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeOut(500);
});
$(window).on('hashchange', function() {community();});
function community() {
    str=window.location.hash;
    console.log(str);
    if (str=="#home") {
        return home();
    }
    else if (str=="#about") {
        return about();
    }
    else if (str=="#activity") {
        return activity();
    }
    else if (str=="#gallery") {
        return gallery();
    }
    else if (str=="#gallery") {
        return gallery();
    }
    else if (str=="#team") {
        return team();
    }
    else if (str=="#wincon") {
        return wincon();
    }
    else if (str=="#wincon_img") {
        return winconimg();
    }
    else if (str=="#contacts") {
        return contacts();
    }
    else if (str=="#wall") {
        return wall();
    }
    else if (str=="#events") {
        return events();
    }
    else {
         $("#body_content").load("html/home.html");
    }
}
function home(){
     $("#body_content").load("html/home.html");
     window.location = 'index.html#home';
     document.getElementById('b_body').scrollIntoView();
}
function about(){
     $("#body_content").load("html/about.html");
     window.location = 'index.html#about';
     document.getElementById('b_body').scrollIntoView();
}
function activity(){
     $("#body_content").load("html/activity.html");
     window.location = 'index.html#activity';
     document.getElementById('b_body').scrollIntoView();
}
function gallery(){
     $("#body_content").load("html/gallery.html");
     window.location = 'index.html#gallery';
     document.getElementById('b_body').scrollIntoView();
}
function team(){
     $("#body_content").load("html/team.html");
     window.location = 'index.html#team';
     document.getElementById('b_body').scrollIntoView();
}
function wincon(){
     $("#body_content").load("html/wincon.html");
     window.location = 'index.html#wincon';
     document.getElementById('b_body').scrollIntoView();
}
function winconimg(){
     $("#body_content").load("html/wincon_gallery.html");
     window.location = 'index.html#wincon_img';
     document.getElementById('b_body').scrollIntoView();
}
function contacts(){
     $("#body_content").load("html/contacts.html");
     window.location = 'index.html#contacts';
     document.getElementById('b_body').scrollIntoView();
}
function wall(){
     $("#body_content").load("html/wall_mag.html");
     window.location = 'index.html#wall';
     document.getElementById('b_body').scrollIntoView();
}
function events(){
     $("#body_content").load("html/events.html");
     window.location = 'index.html#events';
     document.getElementById('b_body').scrollIntoView();
}