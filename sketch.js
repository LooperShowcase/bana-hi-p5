function setup() {
  // The size of our starting canvas: 400px width, 400px height
  createCanvas(400, 400);
  angleMode(DEGREES);
}

function draw() {
  let seconds = second();
  let minutes = minute();
  let hours = hour();
  background("yellow");
  noFill();
  stroke(52, 160, 164);
  strokeWeight(8);
  translate(width / 2, height / 2);
  rotate(-90);
  let secArc = map(seconds, 0, 60, 0, 360);
  arc(0, 0, 300, 300, 0, secArc);
  stroke(26, 117, 159);
  let minArc = map(minutes, 0, 60, 0, 360);
  arc(0, 0, 250, 250, 0, minArc);

  stroke(24, 78, 119);
  let hourArc = map(hours % 12, 0, 12, 0, 360);
  arc(0, 0, 200, 200, 0, hourArc);

  push();
  stroke(26, 117, 159);
  rotate(secArc);
  line(0, 0, 150, 0);
  pop();

  push();
  stroke(26, 117, 159);
  rotate(minArc);
  line(0, 0, 125, 0);
  pop();

  push();
  stroke(24, 78, 119);
  rotate(hourArc);
  line(0, 0, 100, 0);
  pop();
  strokeWeight(1);

  textSize(20);
  rotate(90);
  text("3", 170, 0);
  text("9", -160, 0);
  text("12", 0, -160);
  text("6", 0, 170);
  text("7", -80, 150);
  text("8", -150, 80);
  text("10", -150, -80);
  text("11", -100, -140);
  text("1", 80, -140);
  text("2", 160, -80);
  text("4", 150, 80);
  text("5", 100, 150);
  textSize(30);
  text(seconds, -10, 0);
}
