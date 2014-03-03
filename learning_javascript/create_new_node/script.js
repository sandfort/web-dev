// store  the target area to a variable
var targetArea = document.getElementById("target-area");

// create the <p> element
var p = document.createElement("p");

// create a text node inside the <p> element
var snippet = p.createTextNode("this was a generated paragraph");

// insert generated paragraph into the DOM
targetArea.appendChild(p);

