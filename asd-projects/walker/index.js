/* global $, sessionStorage */

$(document).ready(runProgram); // wait for the HTML / CSS elements of the page to fully load, then execute runProgram()

function runProgram() {
  ////////////////////////////////////////////////////////////////////////////////
  //////////////////////////// SETUP /////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////

  // Constant Variables
  var FRAME_RATE = 60;
  var FRAMES_PER_SECOND_INTERVAL = 1000 / FRAME_RATE;
  var KEY = {
    LEFT: -5,
    RIGHT: 5,
    UP: 5,
    DOWN:-5,
  };
}
// Game Item Objects
var walker = {
  positionX: 0,
  positionY: 0,
  speedX: 0,
  speedY: 0,
};

// one-time setup
var FRAMES_PER_SECOND_INTERVAL;

var interval = setInterval(newFrame, FRAMES_PER_SECOND_INTERVAL); // execute newFrame every 0.0166 seconds (60 Frames per second)
$(document).on("keydown", handleKeyDown);
function handleKeyDown(event){
  console.log("enter pressed")
}
; // change 'eventType' to the type of event you want to handle

////////////////////////////////////////////////////////////////////////////////
///////////////////////// CORE LOGIC ///////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

/* 
  On each "tick" of the timer, a new frame is dynamically drawn using JavaScript
  by calling this function and executing the code inside.
  */
function newFrame() {}

/* 
  Called in response to events.
  */
// need four if statments to know what key to press left right down and up
function handleKeyDown (event){
  if(event.which === " left pressed"){
    console.log("enter pressed")
  }else if(event.which === "right pressed"){
  console.log("enter pressed")
  }else if(event.which === "up pressed"){

    console.log("enter pressed")
  }else if(event.which === "down pressed"){
 console.log(" enter pressed")
    
  }
}

////////////////////////////////////////////////////////////////////////////////
////////////////////////// HELPER FUNCTIONS ////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
//  create as functions

function repositionGameItem() {
  $("#box").css("top", speedY);
 function redrawGameItem(){
  $("#box").css("top", speedX);
 }
   
    
  
}

function endGame() {
  // stop the interval timer
  clearInterval(interval);

  // turn off event handlers
  $(document).off();
}
