function setup() {
  var cnv = createCanvas(2000, 2000);      
  cnv.position((windowWidth-width)/2, 30); // sets up canvas size
  background(5, 5, 5);                     // colors canvas black
}

function draw() {
  if (mouseIsPressed) {              // mouse is pressed 
    fill(255);                       // shape is filled the color white
    ellipse(mouseX, mouseY, 20, 30); // it's an oval placed down wherever the mouse is
  } 
}