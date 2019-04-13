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


  return colorName;
  return oldName
}

var colorName = ChangeClassColor("TestAreaBlue", "TestArea");
//Function that switch for Blue to Red

x.onclick = function switchColor(){

 if (colorName == "TestAreaRed" && colorName != "TextAreaBlue") {
      ChangeClassColor("TestAreaBlue", "TestAreaRed");
      y.innerHTML = "Click too early, try again!";
      colorName = "TestAreaBlue"


  }
 else if (colorName == "TestAreaBlue" && colorName != "TextAreaRed"){
      ChangeClassColor("TestAreaRed", "TestAreaBlue");
      colorName = "TestAreaRed"
      y.innerHTML = "Wait for the green to appear!";


    }
  else{
    console.log("Nothing")
  }
}
