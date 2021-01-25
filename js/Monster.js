class Monster {
    constructor(x,y)
      {
        var options = { 
        density: 0.0004, 
        frictionAir: 0
        };
          this.r=40;
          this.image=loadImage("images/Monster-02.png");
          this.body=Bodies.circle(x, y, this.r, options)
          World.add(world, this.body);
  
      }
      display()
      {
              
              var pos=this.body.position;		
              push()
              translate(pos.x, pos.y);
            
              imageMode(CENTER);
              image(this.image, 0,0,this.r*2, this.r*2)
              pop()
              
      }
  }