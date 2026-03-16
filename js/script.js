window.addEventListener("load", function(){

setTimeout(function(){

document.getElementById("preloader").style.display = "none";
document.getElementById("content").style.display = "block";

},1000);

});
let currentSize = 16;

function changeFontSize(action){

if(action === -1){
currentSize -= 1;
}

if(action === 1){
currentSize += 1;
}

if(action === 0){
currentSize = 16;
}

document.body.style.fontSize = currentSize + "px";

}

function translatePage(lang){

let select = document.querySelector(".goog-te-combo");

if(select){
select.value = lang;
select.dispatchEvent(new Event("change"));
}

}
