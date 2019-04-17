//Setting up public vars that will be accessed later on
var x = document.querySelector("div.TestArea");
var y = document.querySelector("p#Start");
var w = Math.floor(Math.random() * 5) + 1;
var colorName;
var oldName;

//Credit for finding height: https://plainjs.com/javascript/styles/set-and-get-css-styles-of-elements-53/
//Idea for window resize: https://developer.mozilla.org/en-US/docs/Web/API/Document/defaultView/resize_event

//Function allows for recenter text

function recenter(){
  var elem  = document.querySelector('div')
  var style = window.getComputedStyle ? getComputedStyle(elem, null) : elem.currentStyle;
  var rheight  = innerHeight;
  rheight = parseInt(rheight);
  var lineheight = 25;
  var divideby;
  var setlineheight;
  var divideby = Math.floor(rheight/lineheight);
  var setlineheight = Math.floor(rheight/divideby)

  elem.style.lineHeight = setlineheight;
  console.log(setlineheight);




}
window.addEventListener('resize',function(){
  recenter()
});





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


recenter();
