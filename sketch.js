var bullet,wall1;
var speed,weight;
function setup() {
  createCanvas(1600,400);
  speed=random(55,90)
  weight=random(400,1500)

  wall1=createSprite(1500,200,60,height/2)
  wall1.shapeColor=color(80,80,80);

  bullet=createSprite(50,200,50,50);
  bullet.velocityX=speed;
  bullet.shapeColor=color(255);
}

  var wall,thickness;
  varbullet,speed,weight;
  thickness=random(22,83)
wall=createSprite(1200,200,thickness,height/2);
wall.shapeColor=(80,80,80)

speed=random(233,321)
weight=random(30,52)


function draw() {
  background(0);  
  if(wall1.x-bullet.x<(bullet.width+wall1.width)/2){
    bullet.velocityX=0;
    var deformation=0.5* weight*speed*speed/22500;
    if(deformation>180){
      bullet.shapeColor=color(255,0,0);
    }
    if(deformation<180 && deformation>100){
      bullet.shapeColor=color(230,230,0)
    }
    if(deformation<100){
      bullet.shapeColor=color(0,255,0)
    }
  
  }

  

drawSprites();
}
function hasCollided(lbullet,lwall){
  bulletRightEdge=lbullet.x+bullet.width;
  wallLeftEdge=lwall.x;
  if(bulletRightEdge>=wallLeftEdge){
    return true
  }
  return false;

if(hasCollided(bullet,wall)){
  bullet.velocityX=0;
  var damage=0.5*weight*speed*speed/(thickness*thickness*thickness);

  if(damage>10){
    wall.shapeColor=color(255,0,0);
  }
  if(damage10){
    wall.shapeColor=color(0,255,0)
  }
}
}