var Bodies=Matter.Bodies
var Engine=Matter.Engine
var World=Matter.World
var bricks=[]
var engine,world
function setup() {
  createCanvas(windowWidth,windowHeight);
  engine=Engine.create();
world=engine.world;
  console.log(windowWidth/75)
 for(var i=0;i<windowWidth;i=i+10){
   bricks.push(new Brick(i,75))
 }

  
 
}


function draw() {
  background(0);
  for(vari=0;i=bricks.length;i++){
    bricks[i].display()
  }
    
  drawSprites();
}