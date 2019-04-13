//Setting up public vars that will be accessed later on
var x = document.querySelector("div.TestArea");
var y = document.querySelector("p#Start");
var w = Math.floor(Math.random() * 5) + 1;
var click = 0;



x.onclick = function Start(){
  x.style.backgroundColor = "red";
  y.innerHTML = "Wait for the green to appear!";
}
