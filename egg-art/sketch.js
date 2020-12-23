function setup() {
  var cnv = createCanvas(2000, 1000);      
  cnv.position((windowWidth-width)/2, 100); // sets up canvas position
  background(5, 5, 5);                     // colors canvas black

  button = createButton('Save Image');      // creates Save Image button
  button.position(19, 10);                 // positions button 
  button.mousePressed(saveArt);           // saves current image

  button = createButton('Change Canvas Height');    // creates Change Canvas Height button
  button.position(150, 10);                        // positions button 
  button.mousePressed(adjustHeight);              // adjusts canvas height

  slider = createSlider(0, 2000, 1000);      // creates canvas height slider 
  slider.position(150, 40);
  slider.style('width', '150px');
}

function saveArt() {
  saveCanvas('myArt', 'png');  // downloads image as 'myArt.png'
}

function adjustHeight() {
  let h = slider.value();
  resizeCanvas(2000, h);
  background(5,5,5);
}

function draw() {
  textSize(30)
  text('created by @17angelsprings', 800, 80);  // puts text middle on top of canvas
  if (mouseIsPressed) {              // mouse is pressed 
    fill(255);                       // shape is filled the color white
    ellipse(mouseX, mouseY, 20, 30); // it's an oval placed down wherever the mouse is
  }
}
// change size of eggs?