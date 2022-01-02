class Brick{
constructor(x,y){
  var options={
      restitution:0.4,
      friction:0,
      isStatic:true
  }
  this.body=Bodies.rectangle(x,y,75,50,options)
  this.width=75;
  this.height=50;
World.add(world,this.body)
}
display(){
    var pos=this.body.position
    rectMode(CENTER)
    rect(pos.x,pos.y,this.width,this.height)

}

}