
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var dog;
var database;
var food;
var foodStock;
var foodx;
var position;
var pos;
// function preload()
// {

// }

function setup() {

  createCanvas(windowWidth, windowHeight);

  engine = Engine.create();
  world = engine.world;

  // database = firebase.database();
  database = firebase.database();

  dog = new Dog(windowWidth / 2, windowHeight / 2);
  Engine.run(engine);


  foodStock = database.ref("food");
  foodStock.on("value", readData);

}


function draw() {
  resizeCanvas(windowWidth, windowHeight);

  rectMode(CENTER);
  background(46, 148, 87);

  dog.keyPressed();


  dog.display();

  fill("white");
  textSize(52);
  text("Food left " + food, windowWidth / 2.5, 200)

  fill("white");
  textSize(30);
  text("Note : PRESS UP_ARROW TO FEED THE DOG", windowWidth / 3, 500);
}

function move(xoff, yoff) {
  dog.body.position.x = dog.body.position.x + xoff;
  dog.body.position.y = dog.body.position.y + yoff;

}

function writeData(foodx) {

  if (foodx <= 0) {
    foodx = 0;

  } else {
    foodx = foodx - 1;
  }

  database.ref("/").update({ food: foodx });


}

function readData(data) {
  food = data.val();
  foodx = food;
}
