const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;


var engine,world;
var bkg, monsterImg1, monsterImg2, heroImg1, heroImg2;
var ground, hero, fly, monster, invisibleBase;
var box;

function preload() {
//preload the images here
bkg = loadImage("images/GamingBackground.png");
}

function setup() {
  createCanvas(1200, 600);

  engine = Engine.create();
  world = engine.world;

  ground = new Ground(400, 400, 650,20);
  invisibleBase = new Ground(800,220,40,20)
  hero = new Hero(50,200);
  fly = new Fly(hero.body,{x:250, y:20});
  box = [];
  monster = new Monster(800,200);

  for(var j = 350; j <= ground.width; j += 100){
    var rand = Math.round(random(1,3))*20
   // console.log(rand);
    for(var i = 400; i >= rand; i -= 70){
      box.push(new Box(j,i));
      
    }
  } 

/* var render = Matter.Render.create({element:document.body, engine:engine,options:{
    width:1200, height: 600}
  } )

  Matter.Render.run(render);*/


  // create sprites here

}

function draw() {
  background(bkg);
  Engine.update(engine);
  ground.display();
  hero.display();
  for(i=0; i <box.length;i++){
    box[i].display();
  }
  monster.display();
 // invisibleBase.display();
  

}

function mouseDragged(){
  Body.setPosition(hero.body,{x: mouseX, y: mouseY})
}

