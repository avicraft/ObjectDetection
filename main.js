var img = "";
var status = "";

function preload() {
  img = loadImage('dog_cat.jpg')
}
function setup() {
  canvas = createCanvas(640,420);
  canvas.center();
  objectDetector = ml5.objectDetector('cocossd',modelLoaded());
  document.getElementById("status").innerHTML = "Status : Detecting Objects";
}
function modelLoaded() {
  console.log("modelLoaded");
  status = true;
  objectDetector.detect(img, gotResult());
}
function gotResult(error, results) {
  if (error) {
    console.log(error);
  }
  console.log(results); 
}
function draw() {
  image(img, 0, 0, 640, 420);
  fill("#FF0000");
  text("Dog", 45, 75);
  noFill();
  stroke("#FF0000")
  rect(30, 60, 450, 350);
  fill("#0088ff");
  text("Cat", 450, 350);
  noFill();
  stroke("#0088ff")
  rect(30, 60, 450, 350);

  fill("#00fff2");
  text("Cat", 320, 120);
  noFill();
  stroke("#00fff2");
  rect(300, 90, 270, 320);

}
function redirect1() {
  window.location = "index.html";
}
