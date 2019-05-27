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
var musicstop = document.querySelector("img#stop");
// I composed this music
var music = new Audio('./lonescavengerV2.wav');
var playing;
music.loop = true;
playing = "true";
// Credit to W3 popup box lesson
musicstop.onclick = function(){
  if (playing == "true"){
  music.pause();
  playing = "false";
  musicstop.src = "./images/mute.png";
}
else if (playing == "false"){
  music.play()
  playing = "true";
  musicstop.src = "./images/unmute.png";
  }
}
popbox.style.display = "block";
img.style.display = "none";
span.onclick = function(){
  popbox.style.display = "none";
  if(playing == "true"){
    music.play()
    playing = "true";
  }
}
x.onclick = function(event) {
  if (event.target == popbox) {
    popbox.style.display = "none";
  }
}
// Timer function
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





// Credit for finding height: https://plainjs.com/javascript/styles/set-and-get-css-styles-of-elements-53/
// Idea for window resize: https://developer.mozilla.org/en-US/docs/Web/API/Document/defaultView/resize_event
// Function allows for recenter text
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


// Function that allows me to switch classes and color
function ChangeClassColor(colorName, oldName){
  x.classList.add(colorName);
  x.classList.remove(oldName);
  x = document.querySelector("div" + '.' + colorName);

  return colorName;
  return oldName
}

// Function to for achievements
function achieve(){
  // Gold trophy
  if (t <= 400){
    popbox.style.display = "block";
    z.innerText = "You got under 400ms! Here's a prize:";
    list.style.display = "none";
    img.style.display = "block";
    img.src = "./images/gold.png"
  }
  // Silver trophy
  else if (t <= 600 && t > 400){
      popbox.style.display = "block";
      z.innerText = "You got under 600ms! Here's a prize:";
      list.style.display = "none";
      img.style.display = "block";
      img.src = "./images/silver.png"
    }
    // Bronze Trophy
    else if (t <= 1200 && t > 600){
        popbox.style.display = "block";
        z.innerText = "You got under 1200ms! Here's a prize:";
        list.style.display = "none";
        img.style.display = "block";
        img.src = "./images/bronze.png"
      }
  else {
    // Nothing
  }
}

// Function that switch for Blue to Red
var colorName = ChangeClassColor("TestAreaBlue", "TestArea");



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
        // End timer
        eTime();
        // Calc time
        timer();
        // Check if > 400ms
        achieve();
        changetoBlue(t + " ms. Press to go again");

        return e;
   }

    else{
      // Nothing
    }
  }

// Credit for event listener, https://www.w3schools.com/js/js_htmldom_eventlistener.asp



// Event listener for keyups
//Check for spacebar release and then calls if statement
document.addEventListener('keyup', function(event) {
  // Only allows spacebar to work if popbox is hidden
  if (popbox.style.display == "none") {
        if(event.keyCode == 32) {
            switchColor()
            // Credit for sound: http://soundbible.com/2067-Blop.html
            var blop = new Audio('./blop.wav');
            blop.play();
        }
    }

});
// Event listener for mouse clicks
 x.addEventListener('click', function(event) {
      pressed = "True"
      // Credit for sound: http://soundbible.com/2067-Blop.html
      var blop = new Audio('./blop.wav');
      blop.play();
      switchColor()

});

recenter();
