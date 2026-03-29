window.addEventListener("load", function(){

setTimeout(function(){

let preloader = document.getElementById("preloader");
if(preloader){
preloader.style.display = "none";
}

let content = document.getElementById("content");
if(content){
content.style.display = "block";
}

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

function applyTheme(mode){

let toggleButton = document.getElementById("theme-toggle");

if(mode === "dark"){
document.body.classList.add("dark-mode");
if(toggleButton){
toggleButton.textContent = "Light";
}
}
else{
document.body.classList.remove("dark-mode");
if(toggleButton){
toggleButton.textContent = "Dark";
}
}

}

function toggleDarkMode(){

let isDark = document.body.classList.contains("dark-mode");
let nextMode = isDark ? "light" : "dark";

applyTheme(nextMode);

try{
localStorage.setItem("theme", nextMode);
}
catch(error){
// Ignore storage failures (e.g., restricted local file contexts).
}

}

document.addEventListener("DOMContentLoaded", function(){

let savedTheme = "light";

try{
savedTheme = localStorage.getItem("theme") || "light";
}
catch(error){
savedTheme = "light";
}

applyTheme(savedTheme);

});
