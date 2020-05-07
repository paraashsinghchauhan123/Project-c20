var r;
var g;
var b;

function setup() {
  createCanvas(800,400);
  
}

function draw() {
  
  ellipse(mouseX,200,50,50);
  drawSprites();
  
}
function mouseMoved(){
  r = Math.round(random (0,255));
  b = Math.round(random (0,255));
  g = Math.round(random (0,255));
  background(r,b,g);
}