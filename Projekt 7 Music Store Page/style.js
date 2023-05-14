var audio = document.getElementById('audio');
var image1 = document.querySelector('.img1');
var image2 = document.querySelector('.img2');
var a1 = document.querySelector('.a1');
var a2 = document.querySelector('.a2');
var dropdown = document.querySelector('.dropdown-content');
var dropbtn = document.querySelector('.dropbtn');
function play(){
audio.play();
}
function pause(){
audio.pause();
}
image1.addEventListener('click',function(event){
play();
a1.classList.add("active");
a2.classList.remove("active");
a2.classList.add("show");
image2.style.display = "inline-block";
});
image2.addEventListener('click',function(event){
pause();
a1.classList.remove("active");
a2.classList.remove('show');
a2.classList.add("active");
});
var count = 0;
dropbtn.onclick = function(){
count++;
console.log(count);
if (count % 2 !== 0){
dropdown.style.display = "block";
}
else{
dropdown.style.display = "none";
}
}
