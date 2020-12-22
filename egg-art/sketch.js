function setup() {
  var cnv = createCanvas(2000, 2000);      
  cnv.position((windowWidth-width)/2, 40); // sets up canvas size
  background(5, 5, 5);                     // colors canvas black
  button = createButton('Save Image');     // creates Save Image button
  button.position(19, 10);                 // positions button 
  button.mousePressed(saveArt);            // saves current image
}

function saveArt() {
  saveCanvas('myArt', 'png')  // downloads image as 'myArt.png'
}

function draw() {
  textSize(32)
  text('@17angelsprings', 100, 80);  // puts text on upper left corner 
  if (mouseIsPressed) {              // mouse is pressed 
    fill(255);                       // shape is filled the color white
    ellipse(mouseX, mouseY, 20, 30); // it's an oval placed down wherever the mouse is
  }
}

// make canvas more adjustible next time?