const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var myengine, myworld

function setup() {
  createCanvas(400,400);
  myengine = Engine.create()
  myworld = myengine.world;

  var options = {
    isStatic : true
  }

  object = Bodies.rectangle(200, 380, 400, 20, options)
  World.add(myworld, object)

  console.log(object)
  

  
}

function draw() {
  background(0); 
  Engine.update(myengine)
  rectMode (CENTER)
  rect(object.position.x, object.position.y, 400, 20)
  //console.log(object.position.x)
  //console.log(object.position.y)
  
}
