class Bob {
    constructor(x, y,radius) {
      var options = {
          isStatic:false,
          restitution:1,
          friction:0,
          density:0.8
      }
      this.body = Bodies.circle(this.x,this.y,this.radius, options);
      this.x=x
      this.y=y
      this.radius= radius
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle= this.body.angle
      push();
      rotate(angle);
      translate(pos.x,pos.y)
      ellipseMode(CENTER);
      fill("purple");
      ellipse(0,0,this.radius,this.radius);
      pop();
    }
  };
  