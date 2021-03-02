let h = hour();
text('Current hour:\n' + h, 5, 50);

let m = minute();
text('Current minute: \n' + m, 5, 50);

let s = second();
text('Current second: \n' + s, 5, 50);

hr=hour();
mn=minute();
sc = second();

function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
  noStroke();
}
  

function draw() {
  background(255,255,255); 
  // Scale the mouseX value from 0 to 720 to a range between 0 and 175
  let h = map(mouseX, 0, width, 0, 175);
  hrAngle = map(sc,0,60,0,360);

  // Scale the mouseX value from 0 to 720 to a range between 40 and 300
  let m = map(mouseX, 0, width, 40, 300);
  mnAngle = map(sc,0,60,0,360);

  let s= map(mouseX, 0, width, 40, 300);
  scAngle = map(sc,0,60,0,360);
  fill(255, c, 0);
  ellipse(width/2, height/2, d, d); 
  drawSprites();
}