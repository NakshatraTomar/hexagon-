const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var block1,block2,block3,block4,block5,block6,block7,block8,block9;
var platform;
var hexagon, slingshot,ground,;


var gamestate="on sling";
function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


 block1 = new Block(330,235,30,40);
 block2 = new Block(360,235,30,40);
 block3 = new Block(390,235,30,40);  
 block4 = new Block(420,235,30,40);
 block5 = new Block(450,235,30,40);
 block6 = new Block(360,195,30,40);
 block7 = new Block(390,195,30,40);
 block8 = new Block(420,195,30,40);
 block9 = new Block(390,155,30,40);

 Chuck=new Hexagon(200,200);

 ground = new Ground(600,height,1200,20);
 platform = new Ground(150, 305, 300, 170);

 slingshot = new Slingshot(chuck.body,{ x:200 , y:100});
}

function draw(){
block1.display(); 
block2.display();
block3.display();
block4.display();
block5.display();
block6.display();
block7.display();
block8.display();
block9.display();
chuck.display();
ground.display();
slingshot.display();
platform.display();

}

function mouseDragged(){
    Matter.Body.setPosition(chuck.body,{x:mouseX,y:mouseY})
}
function mouseReleased(){
    slingshot.fly();
}