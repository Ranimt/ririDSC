window.onload = function() {
var t = setInterval(move,10);
var pos=0;
var box=document.getElementById("fils");
function move()
{
if (pos<150) {
 pos+=1;
 box.style.left=pos+"px";
}
else {
    clearInterval(t);
}
 
}
}