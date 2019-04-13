//Setting up public vars that will be accessed later on
var x = document.querySelector("div.TestArea");
var y = document.querySelector("p#Start");
var w = Math.floor(Math.random() * 5) + 1;
var colorName;
var oldName;


//Function that allows me to switch classes and color
function ChangeClassColor(colorName, oldName){
  x.classList.add(colorName);
  x.classList.remove(oldName);
  x = document.querySelector("div" + '.' + colorName);


  console.log(colorName);
  return colorName;
}

var colorName = ChangeClassColor("TestAreaBlue", "TestArea");
//Function that switch for Blue to Red

x.onclick = function switchColor(){
  if (colorName == "TestAreaBlue"){
      ChangeClassColor("TestAreaRed", "TestAreaBlue");
      y.innerHTML = "Wait for the green to appear!";

  }

  else if (colorName == "TestAreaRed") {
      ChangeClassColor("TestAreaBlue", "TestAreaRed");
      y.innerHTML = "Click too early, try again!";

  
    }
}
