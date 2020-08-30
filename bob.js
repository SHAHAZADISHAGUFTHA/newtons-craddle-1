class Bob{
  constructor(x, y, radius){
      var option = {
          isStatic:false,
          restitution:1,
          friction:0,
          density:0.8
      }
      this.body = Bodies.circle(x, y, radius, option);
         this.radius = radius;
          
          World.add(world, this.body);
  }
  display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      ellipseMode(RADIUS);
      fill(rgb(59,59,56));
      ellipse(0, 0, this.radius, this.radius);
      pop();
    }
}