var bullet,wall1;
var speed,weight,damage,thickness;

function setup() {
  createCanvas(1600,400);
  speed=random(223,321)
  weight=random(30,52)
  thickness=random(22,83)
  wall1=createSprite(1200,200,thickness,height/2)
  wall1.shapeColor=color(80,80,80);

  bullet=createSprite(50,200,50,50);
  bullet.velocityX=speed;
  bullet.shapeColor=color(255);
}

 

function draw() {
  background(0);  
 
    
  if(hasCollided(bullet,wall1)){
      bullet.velocityX=0;
       damage=(0.5*weight*speed*speed)/(thickness*thickness*thickness);
    
      if(damage<10){
        wall1.shapeColor=color(0,255,0);
      }
     else{
        wall1.shapeColor=color(255,0,0)
      }
    }
  

  

drawSprites();
}
function hasCollided(bullet,wall1){
  if(wall1.x-bullet.x<(bullet.width+wall1.width)/2){
    return true
  }
  else{return false}}
  


