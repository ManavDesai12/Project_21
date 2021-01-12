var bullet, wall, thickness;
var speed, weight;
speed=Math.random(223,321);
weight=Math.random(30,52);
thickness = Math.random(22,83);
function setup() {
  createCanvas(1600,400);
  bullet = createSprite(50, 200, 10, 5);
  bullet.shapeColor = ("white")
  wall=createSprite(1200,200,thickness,height/2);
  wall.shapeColor = ("orange");
  bullet.velocityX = 10;
  
}

function draw() {
  background(80, 80, 80);  
  bullet.collide(wall);
  drawSprites();
  if(wall.x - bullet.x < bullet.width/2 + wall.width/2){
    bullet.velocityX = 0
    if((0.5*weight*speed*speed)/thickness*thickness*thickness>10){
      bullet.shapeColor = "red"
    }
    else {
      bullet.shapeColor = "green";
    }
  }
  
}