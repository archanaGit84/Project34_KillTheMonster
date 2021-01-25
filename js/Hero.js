class Hero {
    constructor(x,y,radius) {
      var options = {
          density:1,
          frictionAir: 0.01
      }
      this.radius = 40;
      this.image = loadImage("images/Superhero-01.png")
      this.body = Bodies.circle(x,y,this.radius,options);
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      //ellipseMode(RADIUS);
      fill("brown");
      image(this.image,pos.x-100, pos.y, this.radius*4, this.radius*2);
    }
  };