// This is a small program. There are only two sections. This first section is what runs
// as soon as the page loads.
$(document).ready(function () {
  render($("#display"), image);
  $("#apply").on("click", applyAndRender);
  $("#reset").on("click", resetAndRender);
});

/////////////////////////////////////////////////////////
//////// event handler functions are below here /////////
/////////////////////////////////////////////////////////

// this function resets the image to its original value; do not change this function
function resetAndRender() {
  reset();
  render($("#display"), image);
}

// this function applies the filters to the image and is where you should call
// all of your apply functions
function applyAndRender() {
  // Multiple TODOs: Call your apply function(s) here
    applyFilterNoBackground(reddify);
   applyFilterNoBackground(increaseGreenByBlue);
   applyFilter(decreaseBlue);
 

  // do not change the below line of code
  render($("#display"), image);
}

/////////////////////////////////////////////////////////
// "apply" and "filter" functions should go below here //
/////////////////////////////////////////////////////////

// TODO 1, 2 & 4: Create the applyFilter function here
function applyFilter(filterFunction) {
  for (var i = 0; i < image.length; i++) {
    for (var j = 0; j < image[i].length; j++) {
      var rgbStr = image[i][j];
      var rgbNumbers = rgbStringToArray(rgbStr);
      //console.log(rgbNumbers);
      filterFunction(rgbNumbers);
      //console.log(rgbNumbers);
      var newColors = rgbArrayToString(rgbNumbers);
      image[i][j] = newColors;
    }
  }
}

// TODO 7: Create the applyFilterNoBackground function
function applyFilterNoBackground(filterFunction) {
  var backgroundColor = image[0][0];
  for (var i = 0; i < image.length; i++) {
    for (var j = 0; j < image[i].length; j++) {
      var rgbstr = image[i][j];
      if (rgbstr !== backgroundColor) {
        var rgbNumbers = rgbStringToArray(rgbstr);
        filterFunction(rgbNumbers);
        var newColor = rgbArrayToString(rgbNumbers);
        image[i][j] = newColor;
      }
    }
  }
}
// TODO 5: Create the keepInBounds function
function keepInBounds(num) {
  let input = num;
  input = Math.max(input, 0);
  input = Math.min(input, 255);
  return input;
}

// TODO 3: Create reddify function
function reddify(newcolors) {
  newcolors[RED] = 200;
}

// TODO 6: Create more filter functions
function decreaseBlue(array) {
  array[BLUE] = keepInBounds(array[BLUE] - 50);
}

function increaseGreenByBlue(color) {
  color[GREEN] = keepInBounds(color[BLUE] + color[GREEN]);
}

// CHALLENGE code goes below here
