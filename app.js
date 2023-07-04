const toggle = document.getElementById("toggle")
const menu = document.getElementById("menu")
const rotate = document.getElementById("rotate")
var i = 0;

toggle.addEventListener("click", function() {
    if(i == 0){
        menu.style.transform = "scale(3)"
        rotate.style.transform = "rotate(45deg)"
        i = 1
    } else {
        menu.style.transform = "scale(0)"
        rotate.style.transform = "rotate(0deg)"
        i = 0
    }

})