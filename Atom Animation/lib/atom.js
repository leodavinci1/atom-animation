

var canvas;
var width = window.innerWidth;
var height = window.innerHeight;
let angle = 0;
var unitSize = [125,125,125,125,125,125,125,125,125];
var xoff = [0,1,2,3,4,5,6,7,8];
var x = [0,1,2,3,4,5,6,7,8];
var circles = [0,1,2,3,4,5,6,7,8];
var images = [0,1,2,3,4,5,6,7,8];

 // function preload(){
 //   images[0] = loadImage('images/img0.jpg'); 
 //   images[1] = loadImage('images/img1.jpg');
 //   images[2] = loadImage('images/img2.jpg');
 // images[3] = loadImage('images/img3.jpg');
 //   images[4] = loadImage('images/img4.jpg');
 //   images[5] = loadImage('images/img5.jpg');
 //   images[6] = loadImage('images/img6.jpg');
 //   images[7] = loadImage('images/img7.jpg');
 // images[8] = loadImage('images/img8.jpg');
 //   images[9] = loadImage('images/img9.jpg');
 // }

  function setup() {
    canvas = createCanvas(window.innerWidth, window.innerHeight);       //use WEBGL when using texture()
    canvas.parent("canvas"); 
  }

  function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
  }
    
  //if you don't want to spin it when scroll delete this
  function mouseWheel(event) {
    angle += (event.delta)*0.001;
  }


  function draw() {
    //delete this line when using WEBGL
    translate(width/2,height/2);
    noStroke();
    background( 255 );
    fill(126);
     
    //texture(images[9]);
    push();
    //rotate the black ellipses
    rotate(angle);
    //rotation speed
    angle = angle + 0.0007;
    //using noise() to get smooth random x values and using xoff to     get different random values for each black ellipse
    for (var i = x.length - 1; i >= 0; i--) {
      x[i] = map(noise(xoff[i]), 0 , 1 , 200 , 230);
      xoff[i] += 0.01;
    }
    //draw the black ellipses
    for( var i = 0; i < circles.length; i++) {
    rotate( TWO_PI/9.0 );
    //texture(images[i]);
    stroke(0);
    line( 0, 0,x[i],0);
    // imageMode(CENTER); using image() and not texture(), actualy way sharper results
    // image(images[i], x[i],0, 125,125); 
    fill(0);
    //draw each ellipse with different x value
    ellipse( x[i], 0, unitSize[i], unitSize[i] ); 
    }  
    pop();
    ellipse(0, 0, 260, 260);
  }

  



