//Setting up public vars that will be accessed later on
var x = document.querySelector("div.TestArea");
var y = document.querySelector("p#Start");
var w;
var colorName;
var oldName;
var s;
var e;

//Function to start timer
function timer(){
  t = e - s;
  return t;
}

function sTime() {
   s = new Date();
   s.getMilliseconds();
  console.log(s);
  }

function eTime(){
   e = new Date();
   e.getMilliseconds();
  console.log(e);
}



//Credit for finding height: https://plainjs.com/javascript/styles/set-and-get-css-styles-of-elements-53/
//Idea for window resize: https://developer.mozilla.org/en-US/docs/Web/API/Document/defaultView/resize_event
//Function allows for recenter text
function recenter(){
  var elem  = document.querySelector('div')
  var style = window.getComputedStyle ? getComputedStyle(elem, null) : elem.currentStyle;
  var rheight  = innerHeight;
  rheight = parseInt(rheight);
  lheight = Math.floor(rheight/50);
  elem.style.lineHeight = lheight;
}
window.addEventListener('resize',function(){
  recenter()
});

function changetoRed(){
  // Picks Random time
  var w = ((Math.random() * 5) + 2) * 1000;
  ChangeClassColor("TestAreaRed", "TestAreaBlue");
  colorName = "TestAreaRed"
  y.innerHTML = "Wait for the green to appear!";
 console.log(w);
  setTimeout(function green(){
    // Only allows for green to appear when not blue
    if (colorName != "TestAreaBlue"){
      sTime()
      ChangeClassColor("TestAreaGreen", "TestAreaRed");
      y.innerHTML = "Click!";
      colorName = "TestAreaGreen";
      return s;
    }
    else {
      console.log("Stopped green function");
    }
  }, w)


}

function changetoBlue(text){

  y.innerHTML = text;
  colorName = "TestAreaBlue";

}



//Function that allows me to switch classes and color
function ChangeClassColor(colorName, oldName){
  x.classList.add(colorName);
  x.classList.remove(oldName);
  x = document.querySelector("div" + '.' + colorName);


  return colorName;
  return oldName
}

// Function to for achievements
function achieve(){
  if (t < 500){
    console.log("Wow you're fast");

  }
  else {
    // Nothing
  }

}



var colorName = ChangeClassColor("TestAreaBlue", "TestArea");
//Function that switch for Blue to Red

x.onclick = function switchColor(){

 if (colorName == "TestAreaRed" && colorName != "TestAreaBlue") {
      // When its red and clicked then:
      ChangeClassColor("TestAreaBlue", "TestAreaRed");
      changetoBlue("Clicked too early!");


  }
 else if (colorName == "TestAreaBlue" && colorName != "TestAreaRed"){
        // When its blue and clicked then:

        changetoRed();
    }

 else if(colorName == "TestAreaGreen" && colorName != "TestAreaRed"){
      // When its green and clicked then:
      ChangeClassColor("TestAreaBlue", "TestAreaGreen");

      eTime();

      timer();
      achieve()
      changetoBlue(t + " ms. Click to go again");
      return e;
 }

  else{
    console.log("Nothing");
  }
}








recenter();
