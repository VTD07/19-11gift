var x=document.querySelector('.ground-line');
var y=document.querySelector(".typewriter");
function viet()
{
    console.log("animation finishied")
    $(document).ready(function(){
        $("#div1").remove()
    })
    y.style.display="block"
}
x.addEventListener("animationend",viet)