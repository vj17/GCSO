var car, wall;
var speed, weight;


function setup() {
  createCanvas(1600,400);

  car = createSprite(40,200,20,20);
  wall = createSprite(1300,200,60,200);

  //assign random speed and weight to the car
  speed = random(55,90);
  weight = random(400,1500);

  //set random speed to the car
  car.velocityX = speed;

}

function draw() {

  background("black");  

  calculateDeformation(car, wall, weight, speed);

  drawSprites();
}

function calculateDeformation(car, wall, weight, speed){

  //calculate deformation when collision occurs
  if((wall.x - car.x) <= (wall.width/2 + car.width/2)){
    car.velocityX = 0;
    var deformation = (0.5 * weight * speed * speed)/22500;

    if(deformation < 100){
      car.shapeColor = color(0,255,0);
    }  
    else if(deformation >= 100 && deformation <= 180){
      car.shapeColor = color(230,230,0);
    }
    else { 
      car.shapeColor = color(255,0,0);
  }
  }
}