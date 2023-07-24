var menu = document.getElementById("menu");
var clear = document.getElementById("clear");
var nav = document.getElementById("nav_bar");

if(menu){
    menu.addEventListener("click", function(){
        menu.style.display = "none";
        clear.style.display = "flex";
        nav.style.left = "0";
    })
}
if(clear){
    clear.addEventListener("click", function(){
        menu.style.display = "flex";
        clear.style.display = "none";
        nav.style.left = "-70%";
    })
}

var description_btn = document.getElementById("description");
var review_btn = document.getElementById("review");
var description_text = document.getElementById("description-text");
var form = document.getElementById("reviews_form");

if(description_btn){
    description_btn.addEventListener("click", function(){
        description_text.style.display="block"; 
        form.style.display="none";
    })
}
    if(review_btn){
        review_btn.addEventListener("click", function(){
            description_text.style.display="none"; 
            form.style.display="block";
        })
}