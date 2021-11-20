function preload() {

}


function setup() {
  canvas = createCanvas(640, 480); 
  canvas.position(110, 250);
  video = createCapture(VIDEO);
  video.hide();
  tint_color = "";
}


function draw() {
  image(video, 0, 0, 640, 480);
  tint(tint_color);
  stroke(100,190,180);
  fill(220,20,60);
  circle(90,80,100);

  stroke(100,190,180);
  fill(58,78,255);
  rect(140,60,495, 10);

  stroke(100,190,180);
  fill(220,20,60);
  circle(559,60,100);









  stroke(100,190,180);
  fill(220,20,60);
  circle(90,450,100);

  stroke(100,190,180);
  fill(58,78,255);
  rect(140,450,495, 10);

  stroke(100,190,180);
  fill(220,20,60);
  circle(559,450,100);
  

  stroke(100,190,180);
  fill(58,78,255);
  rect(59,9, 15, 450);


  stroke(100,190,180);
  fill(58,78,255);
  rect(540,9, 15, 450);
}

function take_snapshot() {
    save('photo_frame.png');
}

function filter_tint(){
    
}