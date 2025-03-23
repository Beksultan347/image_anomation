let imgBox = document.querySelector(".img-box");
let imgWrap= document.querySelector(".img-wrap");
let originalImg = document.getElementById("original-img");
let line = document.getElementById("line");

originalImg.style.width = imgBox.offsetWidth + "px";
let letSpace = imgBox.offsetLeft;;

imgBox.onmousemove = function(e){
    let boxWidth = (e.pageX - letSpace ) + "px";
    imgWrap.style.width = boxWidth;
    line.style.left = boxWidth;
}