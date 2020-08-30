class Chain{
    constructor(body1, body2, offSetX, offSetY){
        this.offSetX = offSetX;
        this.offSetY = offSetY;
var options={
    bodyA:body1,
    bodyB:body2,
    pointB:{x:this.offSetX, y:this.offSetY},
    
    
 }

 
this.chain = Constraint.create(options);
    World.add(world, this.chain);
}
 display(){
     var posA = this.chain.bodyA.position;
     var posB = this.chain.bodyB.position;
     push();
     var anchor1X = posA.x;
     var anchor1Y = posA.y;
     var anchor2X = posB.x + this.offSetX;
     var anchor2Y = posB.y + this.offSetY;
     strokeWeight(10)
     line(anchor1X, anchor1Y, anchor2X, anchor2Y);
     pop();
 }  
}