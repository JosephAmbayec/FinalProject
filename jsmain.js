//Reaction Time Test by Joseph Ambayec

//Setting up public vars that will be accessed later on
var x = document.querySelector("div.TestArea");
var y = document.querySelector("p#Start");
var z = document.querySelector(".boxtext")
var list = document.querySelector("ol")
var img = document.getElementById("myImage")
var w;
var colorName;
var oldName;
var s;
var e;
var popbox = document.getElementById('myPopbox');
var span = document.getElementsByClassName("close")[0];
var test;
var intro = document.getElementById('myIntro');
var introclose = document.getElementsByClassName("introclose")[0];
// Intro popbox

// Credit to W3 popup box lesson
popbox.style.display = "block";
img.style.display = "none";
span.onclick = function(){
  popbox.style.display = "none";
}
x.onclick = function(event) {
  if (event.target == popbox) {
    popbox.style.display = "none";
  }
}
//Timer function
function timer(){
  t = e - s;
  return t;
}

function sTime() {
   s = new Date();
   s.getMilliseconds();
  }

function eTime(){
   e = new Date();
   e.getMilliseconds();
}





//Credit for finding height: https://plainjs.com/javascript/styles/set-and-get-css-styles-of-elements-53/
//Idea for window resize: https://developer.mozilla.org/en-US/docs/Web/API/Document/defaultView/resize_event
//Function allows for recenter text
function recenter(){
  var elem  = document.querySelector('div')
  var style = window.getComputedStyle ? getComputedStyle(elem, null) : elem.currentStyle;
  var rheight  = innerHeight;
  rheight = parseInt(rheight);
  rheight = rheight;
  lheight = Math.floor(rheight/50);
  elem.style.lineHeight = lheight;
}
window.addEventListener('resize',function(){
  recenter()
});



// Red function
function changetoRed(){
  // Picks Random time
  var w = ((Math.random() * 5) + 3) * 1000;
  ChangeClassColor("TestAreaRed", "TestAreaBlue");
  colorName = "TestAreaRed"
  y.innerHTML = "Wait for the green to appear!";


  var test = setTimeout(function green(){

    // Only allows for green to appear when not blue


    if (colorName != "TestAreaBlue"){
      ChangeClassColor("TestAreaGreen", "TestAreaRed");
      y.innerHTML = "Press!";
      colorName = "TestAreaGreen";
      sTime()
      return s;
    }
    else {

    }
  }, w)


}

// Function for switching to blue
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
  if (t < 400){
    popbox.style.display = "block";
    z.innerText = "You got under 400ms! Here's a prize:";
    list.style.display = "none";
    img.style.display = "block";
  }
  else {
    // Nothing
  }
}


var colorName = ChangeClassColor("TestAreaBlue", "TestArea");
//Function that switch for Blue to Red


// Main switching color function
function switchColor(){

   if (colorName == "TestAreaRed" && colorName != "TestAreaBlue") {
        // When its red and clicked then:
        ChangeClassColor("TestAreaBlue", "TestAreaRed");
        changetoBlue("Pressed too early!");


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
        changetoBlue(t + " ms. Press to go again");
        span.onclick = function(){
          popbox.style.display = "none";
        }
        x.onclick = function(event) {
          if (event.target == popbox) {
            popbox.style.display = "none";
          }
        }
        return e;
   }

    else{
    }
  }

// Credit for event listener, https://www.w3schools.com/js/js_htmldom_eventlistener.asp


// Credit for event listener, https://www.w3schools.com/js/js_htmldom_eventlistener.asp

// Event listener for keyups
document.addEventListener('keyup', function(event) {
      if(event.keyCode == 32) {

          pressed = "True";

          switchColor()
      }

});
// Event listener for mouse clicks
 x.addEventListener('click', function(event) {
      pressed = "True"

      switchColor()

});

recenter();
