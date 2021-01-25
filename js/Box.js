class Box {
    constructor(x,y) {
      var options = {
          restitution: 0.4,
          density: 0.004
      }
     // console.log("x "+x+ " y: " +y)
      this.width = 50;
      this.height = 50;
      this.body = Bodies.rectangle(x,y,this.width,this.height,options);
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      rectMode(CENTER);
      push();
      strokeWeight(5)
      stroke("green")
      fill("white");
      translate(pos.x,pos.y);
      rotate(this.body.angle);
      rect(0, 0, this.width, this.height);
      pop();
    }
  };